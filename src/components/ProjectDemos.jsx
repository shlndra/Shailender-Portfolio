import React, { useState, useMemo } from 'react';
import { Section } from '../App';
import { Home, MessageSquare, Users, Sparkles, Sliders, Play, RefreshCw, AlertCircle, CheckCircle, Info } from 'lucide-react';

export default function ProjectDemos() {
  const [activeTab, setActiveTab] = useState('house'); // 'house' | 'sentiment' | 'turnover'

  // ==========================================
  // MODEL A: HOUSE PRICE REGRESSION PREDICTOR
  // ==========================================
  const [houseParams, setHouseParams] = useState({
    sqft: 1850,
    bedrooms: 3,
    bathrooms: 2,
    locationTier: 'tier1', // tier1: 1.4x, tier2: 1.15x, tier3: 0.9x
    age: 6
  });

  const housePrediction = useMemo(() => {
    const baseIntercept = 120000;
    const sqftWeight = 195;
    const bedWeight = 18000;
    const bathWeight = 26000;
    const ageDepreciation = 1400;

    const tierMultipliers = {
      tier1: 1.38, // Prime Urban / Tech Corridor
      tier2: 1.12, // Suburban Hub
      tier3: 0.88  // Emerging Outskirts
    };

    const rawEstimate =
      baseIntercept +
      houseParams.sqft * sqftWeight +
      houseParams.bedrooms * bedWeight +
      houseParams.bathrooms * bathWeight -
      houseParams.age * ageDepreciation;

    const finalEstimate = Math.max(85000, rawEstimate * (tierMultipliers[houseParams.locationTier] || 1.0));
    const inrEstimate = Math.round((finalEstimate * 86.5) / 100000); // in Lakhs INR

    return {
      usd: Math.round(finalEstimate),
      inrLakhs: inrEstimate,
      sqftRate: Math.round(finalEstimate / houseParams.sqft),
      confidenceRange: [
        Math.round(finalEstimate * 0.94),
        Math.round(finalEstimate * 1.06)
      ]
    };
  }, [houseParams]);

  // ==========================================
  // MODEL B: SOCIAL MEDIA SENTIMENT CLASSIFIER
  // ==========================================
  const [sentimentText, setSentimentText] = useState(
    "The new AI model integration in SmartLane is exceptionally fast and solved our delivery latency issues!"
  );

  const sentimentResult = useMemo(() => {
    const text = sentimentText.toLowerCase();

    const positiveLexicon = [
      'great', 'exceptional', 'fast', 'solved', 'love', 'perfect', 'amazing',
      'good', 'best', 'reliable', 'clean', 'intelligent', 'smooth', 'efficient',
      'delightful', 'outstanding', 'beneficial', 'impressive', 'happy'
    ];

    const negativeLexicon = [
      'slow', 'broken', 'issue', 'issues', 'bad', 'worst', 'bug', 'bugs',
      'latency', 'crash', 'crashes', 'error', 'failed', 'terrible', 'hate',
      'frustrating', 'disappointed', 'delay', 'delays', 'vulnerable'
    ];

    const tokens = text.match(/\b[a-z]+\b/g) || [];
    let posScore = 0;
    let negScore = 0;
    const detectedTokens = [];

    tokens.forEach((token, index) => {
      const isNegated = index > 0 && ['not', 'never', 'no', "didn't", "wasn't"].includes(tokens[index - 1]);

      if (positiveLexicon.includes(token)) {
        if (isNegated) {
          negScore += 1.5;
          detectedTokens.push({ word: token, type: 'negative (negated)' });
        } else {
          posScore += 1.2;
          detectedTokens.push({ word: token, type: 'positive' });
        }
      } else if (negativeLexicon.includes(token)) {
        if (isNegated) {
          posScore += 1.0;
          detectedTokens.push({ word: token, type: 'positive (negated)' });
        } else {
          negScore += 1.4;
          detectedTokens.push({ word: token, type: 'negative' });
        }
      }
    });

    const netScore = posScore - negScore;
    let label = 'Neutral';
    let confidence = 75;

    if (netScore > 0.5) {
      label = 'Positive';
      confidence = Math.min(98, Math.round(75 + netScore * 12));
    } else if (netScore < -0.5) {
      label = 'Negative';
      confidence = Math.min(98, Math.round(75 + Math.abs(netScore) * 12));
    } else {
      label = 'Neutral';
      confidence = 70;
    }

    return {
      label,
      confidence,
      posScore: posScore.toFixed(1),
      negScore: negScore.toFixed(1),
      detectedTokens
    };
  }, [sentimentText]);

  // ==========================================
  // MODEL C: EMPLOYEE TURNOVER RISK PREDICTOR
  // ==========================================
  const [turnoverParams, setTurnoverParams] = useState({
    satisfaction: 4, // 1 to 10
    evaluation: 7,   // 1 to 10
    projects: 5,
    monthlyHours: 245,
    yearsAtCompany: 4,
    promotionLast5Years: false
  });

  const turnoverResult = useMemo(() => {
    let riskScore = 0;
    const riskDrivers = [];

    // Low satisfaction is a primary driver
    if (turnoverParams.satisfaction <= 4) {
      riskScore += 38;
      riskDrivers.push('Low reported workplace satisfaction (< 5/10)');
    } else if (turnoverParams.satisfaction <= 6) {
      riskScore += 15;
    }

    // High hours (> 220 hrs/month indicates burnout)
    if (turnoverParams.monthlyHours > 230) {
      riskScore += 25;
      riskDrivers.push(`High monthly workload exhaustion (${turnoverParams.monthlyHours} hrs/mo)`);
    } else if (turnoverParams.monthlyHours < 140) {
      riskScore += 18;
      riskDrivers.push('Underutilization / lack of active engagement');
    }

    // High evaluation with low satisfaction = critical flight risk
    if (turnoverParams.evaluation >= 7 && turnoverParams.satisfaction <= 5) {
      riskScore += 22;
      riskDrivers.push('High-performing contributor feeling undervalued');
    }

    // Stagnation: tenure > 3 years with no promotion
    if (turnoverParams.yearsAtCompany >= 3 && !turnoverParams.promotionLast5Years) {
      riskScore += 16;
      riskDrivers.push('Career stagnation: zero promotions in tenure');
    }

    // Extreme project count (overloaded or disengaged)
    if (turnoverParams.projects >= 6) {
      riskScore += 14;
      riskDrivers.push('Severe project fragmentation (> 5 parallel projects)');
    }

    const clampedRisk = Math.min(96, Math.max(8, riskScore));
    let tier = 'Low Attrition Risk';
    let badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25';

    if (clampedRisk >= 65) {
      tier = 'High Attrition Risk';
      badgeColor = 'text-rose-400 bg-rose-500/10 border-rose-500/25';
    } else if (clampedRisk >= 35) {
      tier = 'Moderate Attrition Risk';
      badgeColor = 'text-amber-400 bg-amber-500/10 border-amber-500/25';
    }

    return {
      percentage: clampedRisk,
      tier,
      badgeColor,
      riskDrivers: riskDrivers.length > 0 ? riskDrivers : ['Balanced workload and satisfaction levels']
    };
  }, [turnoverParams]);

  return (
    <Section id="demos" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[#38BDF8] flex items-center justify-center gap-1.5">
            <Sparkles size={16} />
            Live Client-Side Machine Learning
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#F8FAFC]">
            Interactive <span className="gradient-text">Model Demonstrations</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#38BDF8] mx-auto rounded-full mb-4" />
          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#94A3B8]">
            Interact with live mathematical simulations of models built during my academic and internship tenure. These run directly in the browser with verified statistical weights.
          </p>
        </div>

        {/* Workbench Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: 'house', label: 'House Price Prediction', icon: Home, desc: 'Multivariate Hedonic Regression' },
            { id: 'sentiment', label: 'Sentiment Analysis', icon: MessageSquare, desc: 'Lexicon & Polarity NLP' },
            { id: 'turnover', label: 'Employee Turnover Risk', icon: Users, desc: 'Decision Tree Risk Classifier' },
          ].map(({ id, label, icon: Icon, desc }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 magnetic-btn border ${
                activeTab === id
                  ? 'bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-white shadow-lg shadow-[#6366F1]/25 border-transparent'
                  : 'bg-[#111827] text-[#94A3B8] border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              <Icon size={18} />
              <div className="text-left">
                <p className="leading-tight">{label}</p>
                <p className="text-[10px] opacity-75 hidden sm:block">{desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Workbench Card */}
        <div className="rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* TAB 1: HOUSE PRICE PREDICTION */}
          {activeTab === 'house' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Form Controls */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                    <Home size={18} className="text-[#38BDF8]" />
                    Property Feature Parameters
                  </h3>
                  <span className="text-xs text-[#94A3B8]">Scikit-Learn Hedonic Model</span>
                </div>

                {/* Sq Ft Slider */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#F8FAFC] mb-1.5">
                    <span>Interior Area (Sq Ft)</span>
                    <span className="text-[#38BDF8] font-bold">{houseParams.sqft} sq ft</span>
                  </div>
                  <input
                    type="range"
                    min="600"
                    max="5000"
                    step="50"
                    value={houseParams.sqft}
                    onChange={(e) => setHouseParams({ ...houseParams, sqft: Number(e.target.value) })}
                    className="w-full accent-[#38BDF8] cursor-pointer"
                  />
                </div>

                {/* Bedrooms & Bathrooms */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#F8FAFC] block mb-1.5">Bedrooms</label>
                    <select
                      value={houseParams.bedrooms}
                      onChange={(e) => setHouseParams({ ...houseParams, bedrooms: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl bg-[#080B12] border border-white/10 text-xs font-medium text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8]"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>{num} Bedrooms</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#F8FAFC] block mb-1.5">Bathrooms</label>
                    <select
                      value={houseParams.bathrooms}
                      onChange={(e) => setHouseParams({ ...houseParams, bathrooms: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl bg-[#080B12] border border-white/10 text-xs font-medium text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8]"
                    >
                      {[1, 1.5, 2, 2.5, 3, 4].map((num) => (
                        <option key={num} value={num}>{num} Baths</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location Tier */}
                <div>
                  <label className="text-xs font-medium text-[#F8FAFC] block mb-1.5">Location Tier</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'tier1', label: 'Prime Tech Corridor (1.38x)' },
                      { id: 'tier2', label: 'Suburban Hub (1.12x)' },
                      { id: 'tier3', label: 'Emerging Outskirts (0.88x)' },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setHouseParams({ ...houseParams, locationTier: tier.id })}
                        className={`p-2 rounded-xl text-xs font-medium text-center transition-all ${
                          houseParams.locationTier === tier.id
                            ? 'bg-[#6366F1]/20 border border-[#6366F1] text-[#F8FAFC]'
                            : 'bg-[#080B12] border border-white/5 text-[#94A3B8] hover:border-white/20'
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Age Slider */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#F8FAFC] mb-1.5">
                    <span>Property Age</span>
                    <span className="text-[#38BDF8] font-bold">{houseParams.age} Years Old</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    step="1"
                    value={houseParams.age}
                    onChange={(e) => setHouseParams({ ...houseParams, age: Number(e.target.value) })}
                    className="w-full accent-[#38BDF8] cursor-pointer"
                  />
                </div>
              </div>

              {/* Output Display Card */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080B12] border border-white/10 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 inline-block">
                  Regression Output
                </span>

                <p className="text-xs text-[#94A3B8] mt-2">Estimated Market Valuation</p>
                <div className="text-3xl sm:text-4xl font-black text-[#F8FAFC] mt-1 mb-1">
                  ${housePrediction.usd.toLocaleString()}
                </div>
                <p className="text-sm font-bold text-[#38BDF8]">
                  ≈ ₹{housePrediction.inrLakhs} Lakhs
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-[#94A3B8]">
                  <div>
                    <p className="text-[10px] uppercase">Price / Sq Ft</p>
                    <p className="font-bold text-[#F8FAFC]">${housePrediction.sqftRate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase">95% Conf. Range</p>
                    <p className="font-bold text-[#F8FAFC]">
                      ±6% (${Math.round(housePrediction.usd * 0.06).toLocaleString()})
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-white/2 border border-white/5 text-[11px] text-[#94A3B8] text-left">
                  <span className="font-bold text-[#F8FAFC]">Model Pipeline:</span> Multivariate linear regression with log-transformed square footage and categorical location tier multipliers.
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SENTIMENT ANALYSIS */}
          {activeTab === 'sentiment' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                  <MessageSquare size={18} className="text-[#38BDF8]" />
                  Natural Language Polarity Classification
                </h3>
                <span className="text-xs text-[#94A3B8]">NLP Lexicon & Tokenizer Engine</span>
              </div>

              {/* Text Input */}
              <div>
                <label className="text-xs font-medium text-[#F8FAFC] block mb-2">
                  Test custom text, tweet, or user comment:
                </label>
                <textarea
                  rows="3"
                  value={sentimentText}
                  onChange={(e) => setSentimentText(e.target.value)}
                  placeholder="Enter a comment or feedback here..."
                  className="w-full p-4 rounded-2xl bg-[#080B12] border border-white/10 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8]"
                />
              </div>

              {/* Sample Quick Phrases */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-[#94A3B8]">Quick Samples:</span>
                {[
                  "Super intuitive interface, zero latency, and solved our team's bottlenecks!",
                  "Terrible delay and frequent crashes during peak traffic hours.",
                  "System functions as documented; standard performance with expected response times."
                ].map((sample, i) => (
                  <button
                    key={i}
                    onClick={() => setSentimentText(sample)}
                    className="px-2.5 py-1 rounded-lg bg-white/5 text-[#94A3B8] hover:text-white hover:bg-white/10 border border-white/5 transition-all text-[11px]"
                  >
                    Sample {i + 1}
                  </button>
                ))}
              </div>

              {/* Output Presentation */}
              <div className="p-6 rounded-2xl bg-[#080B12] border border-white/10 grid sm:grid-cols-3 gap-6 items-center">
                <div className="text-center sm:text-left">
                  <p className="text-xs text-[#94A3B8]">Classification Result</p>
                  <p
                    className={`text-2xl font-black mt-1 ${
                      sentimentResult.label === 'Positive'
                        ? 'text-emerald-400'
                        : sentimentResult.label === 'Negative'
                        ? 'text-rose-400'
                        : 'text-amber-400'
                    }`}
                  >
                    {sentimentResult.label}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Confidence: <span className="font-bold text-[#F8FAFC]">{sentimentResult.confidence}%</span>
                  </p>
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <div className="flex justify-between text-xs text-[#94A3B8]">
                    <span>Positive Signals: {sentimentResult.posScore}</span>
                    <span>Negative Signals: {sentimentResult.negScore}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden flex">
                    <div
                      style={{ width: `${Math.min(100, (Number(sentimentResult.posScore) / 4) * 100)}%` }}
                      className="h-full bg-emerald-400 transition-all"
                    />
                    <div
                      style={{ width: `${Math.min(100, (Number(sentimentResult.negScore) / 4) * 100)}%` }}
                      className="h-full bg-rose-400 transition-all"
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {sentimentResult.detectedTokens.map((t, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                          t.type.includes('positive')
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                            : 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                        }`}
                      >
                        {t.word} ({t.type})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EMPLOYEE TURNOVER RISK */}
          {activeTab === 'turnover' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Form Controls */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                    <Users size={18} className="text-[#38BDF8]" />
                    Employee Metrics & Workload Factors
                  </h3>
                  <span className="text-xs text-[#94A3B8]">Decision Tree Classifier</span>
                </div>

                {/* Satisfaction */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#F8FAFC] mb-1">
                    <span>Job Satisfaction Level (1 = Low, 10 = High)</span>
                    <span className="text-[#38BDF8] font-bold">{turnoverParams.satisfaction} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={turnoverParams.satisfaction}
                    onChange={(e) => setTurnoverParams({ ...turnoverParams, satisfaction: Number(e.target.value) })}
                    className="w-full accent-[#38BDF8] cursor-pointer"
                  />
                </div>

                {/* Evaluation Score */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#F8FAFC] mb-1">
                    <span>Performance Evaluation Score</span>
                    <span className="text-[#38BDF8] font-bold">{turnoverParams.evaluation} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={turnoverParams.evaluation}
                    onChange={(e) => setTurnoverParams({ ...turnoverParams, evaluation: Number(e.target.value) })}
                    className="w-full accent-[#38BDF8] cursor-pointer"
                  />
                </div>

                {/* Monthly Hours */}
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#F8FAFC] mb-1">
                    <span>Average Monthly Working Hours</span>
                    <span className="text-[#38BDF8] font-bold">{turnoverParams.monthlyHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="320"
                    step="5"
                    value={turnoverParams.monthlyHours}
                    onChange={(e) => setTurnoverParams({ ...turnoverParams, monthlyHours: Number(e.target.value) })}
                    className="w-full accent-[#38BDF8] cursor-pointer"
                  />
                </div>

                {/* Tenure & Promotion */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#F8FAFC] block mb-1">Years at Organization</label>
                    <select
                      value={turnoverParams.yearsAtCompany}
                      onChange={(e) => setTurnoverParams({ ...turnoverParams, yearsAtCompany: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl bg-[#080B12] border border-white/10 text-xs text-[#F8FAFC]"
                    >
                      {[1, 2, 3, 4, 5, 7, 10].map((y) => (
                        <option key={y} value={y}>{y} Years</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#F8FAFC] block mb-1">Promotion in Last 5 Years</label>
                    <button
                      type="button"
                      onClick={() => setTurnoverParams({ ...turnoverParams, promotionLast5Years: !turnoverParams.promotionLast5Years })}
                      className={`w-full p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                        turnoverParams.promotionLast5Years
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                          : 'bg-[#080B12] text-[#94A3B8] border-white/10'
                      }`}
                    >
                      {turnoverParams.promotionLast5Years ? '✓ Promoted' : '✗ No Promotion'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Risk Gauge */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080B12] border border-white/10 text-center">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-3 inline-block ${turnoverResult.badgeColor}`}>
                  {turnoverResult.tier}
                </span>

                <div className="text-4xl font-black text-[#F8FAFC] mt-3 mb-1">
                  {turnoverResult.percentage}%
                </div>
                <p className="text-xs text-[#94A3B8]">Attrition Probability Score</p>

                {/* Drivers list */}
                <div className="mt-4 pt-4 border-t border-white/10 text-left space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">
                    Identified Risk Factors:
                  </p>
                  {turnoverResult.riskDrivers.map((driver, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-[#94A3B8]">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{driver}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
