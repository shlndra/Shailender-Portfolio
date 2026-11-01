import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas3D({ darkMode = true }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Outer wireframe icosahedron (representing neural connection topology)
    const geometry = new THREE.IcosahedronGeometry(1.6, 1);
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: darkMode ? 0x6366F1 : 0x4F46E5,
      transparent: true,
      opacity: darkMode ? 0.35 : 0.25,
      linewidth: 1
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, lineMaterial);
    mainGroup.add(wireframe);

    // Inner glowing core (representing AI reasoning core)
    const innerGeometry = new THREE.OctahedronGeometry(0.8, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x38BDF8 : 0x0284C7,
      wireframe: true,
      transparent: true,
      opacity: darkMode ? 0.6 : 0.45
    });
    const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerCore);

    // Floating neural node vertices
    const vertices = geometry.attributes.position.array;
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    
    const pointsMaterial = new THREE.PointsMaterial({
      color: darkMode ? 0x38BDF8 : 0x2563EB,
      size: 0.08,
      transparent: true,
      opacity: 0.85
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    mainGroup.add(points);

    // Mouse tracking for parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Render loop with visibility pause
    let animationFrameId;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      if (!prefersReducedMotion) {
        // Continuous subtle rotation
        mainGroup.rotation.y += 0.003;
        mainGroup.rotation.x += 0.0015;
        innerCore.rotation.y -= 0.005;

        // Smooth mouse damping
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        mainGroup.rotation.y += mouseX * 0.02;
        mainGroup.rotation.x -= mouseY * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      wireframeGeometry.dispose();
      lineMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, [darkMode]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] sm:min-h-[380px] md:min-h-[440px] relative pointer-events-none"
      aria-hidden="true"
    />
  );
}
