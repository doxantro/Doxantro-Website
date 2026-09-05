'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, RefreshCw, AlertTriangle, ArrowRight, Sliders } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import SolutionIcon from '../components/ui/SolutionIcon';

const demoVerts = [
  {
    id: 'finance',
    name: 'Finance & Fraud',
    title: 'Real-Time Fraud & Anomaly Detector',
    iconName: 'BadgeDollarSign',
    badge: 'Live Simulator',
    desc: 'Simulate high-velocity financial transactions and test Doxantro’s real-time risk scoring engine.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare Vision',
    title: 'Clinical DICOM Scan Segmenter',
    iconName: 'Activity',
    badge: 'Live Simulator',
    desc: 'Analyze high-resolution radiology scans with automated bounding box triage and confidence heatmaps.',
  },
  {
    id: 'agriculture',
    name: 'Precision Agri',
    title: 'Satellite NDVI Yield Forecaster',
    iconName: 'Sprout',
    badge: 'Live Simulator',
    desc: 'Simulate multispectral crop indices and soil parameters to forecast yield and optimize fertilization.',
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain',
    title: 'Dynamic Multi-Vector Route Optimizer',
    iconName: 'Boxes',
    badge: 'Live Simulator',
    desc: 'Simulate port bottlenecks and fuel spikes to watch Doxantro re-compute global freight routes in under 10ms.',
  },
  {
    id: 'security',
    name: 'Cyber Defense',
    title: 'Zero-Day Packet Interceptor',
    iconName: 'ShieldAlert',
    badge: 'Live Simulator',
    desc: 'Inject simulated malicious payloads to test automated kernel anomaly quarantine mechanisms.',
  },
  {
    id: 'energy',
    name: 'Smart Energy',
    title: 'Renewable Grid Load Balancer',
    iconName: 'Zap',
    badge: 'Live Simulator',
    desc: 'Adjust solar and wind output fluctuations to test automated battery dispatch and peaker suppression.',
  },
];

export default function AIDemoSection() {
  const [activeVert, setActiveVert] = useState(demoVerts[0].id);
  const [isRunningInference, setIsRunningInference] = useState(false);

  // Finance Sandbox State
  const [txAmount, setTxAmount] = useState(14500);
  const [isForeignIp, setIsForeignIp] = useState(true);
  const [velocitySpike, setVelocitySpike] = useState(true);
  const [financeResult, setFinanceResult] = useState({
    riskScore: 94,
    status: 'High Risk (Flagged & Intercepted)',
    latency: '4.2ms',
    savedAmount: '$14,500',
    signals: ['Foreign IP range (AS-9402)', 'Velocity 14x above 30-day baseline', 'Device fingerprint mismatch'],
  });

  // Healthcare Sandbox State
  const [scanType, setScanType] = useState('Chest CT (Multi-Slice)');
  const [contrastEnhanced, setContrastEnhanced] = useState(true);
  const [healthResult, setHealthResult] = useState({
    finding: 'Sub-pleural ground glass opacity detected (Upper Right Lobe)',
    confidence: '99.4%',
    urgency: 'Tier 1 - Immediate Physician Review',
    inferenceTime: '0.38s',
  });

  // Agriculture Sandbox State
  const [soilMoisture, setSoilMoisture] = useState(62);
  const [ndviIndex, setNdviIndex] = useState(0.78);
  const [agriResult, setAgriResult] = useState({
    projectedYield: '+32.4% vs Regional Average',
    healthStatus: 'Optimal Canopy Chlorophyll Index',
    waterSaving: '38,000 Liters / Acre',
    recommendation: 'Reduce nitrogen dosing by 18%; maintain current irrigation vector.',
  });

  // Supply Chain Sandbox State
  const [portDelay, setPortDelay] = useState(48);
  const [supplyResult, setSupplyResult] = useState({
    reRouteVector: 'Direct Rail Corridor via Hub Gamma',
    costReduction: '-22.6%',
    etaSaved: '42 Hours',
    riskIndex: 'Low (0.12)',
  });

  // Security Sandbox State
  const [attackVector, setAttackVector] = useState('Privilege Escalation');
  const [secResult, setSecResult] = useState({
    action: 'Payload Quarantined & Enclave Re-keyed',
    containmentTime: '2.8ms',
    dataExfiltration: '0 Bytes',
    severity: 'Critical (Mitigated)',
  });

  // Energy Sandbox State
  const [solarOutput, setSolarOutput] = useState(45);
  const [energyResult, setEnergyResult] = useState({
    gridFrequency: '50.02 Hz (Stable)',
    batteryDispatch: '+34 MW Discharged',
    peakerSavings: '$18,400 / hr',
    efficiencyGain: '+24.8%',
  });

  const runSimulation = () => {
    setIsRunningInference(true);
    setTimeout(() => {
      if (activeVert === 'finance') {
        const baseRisk = (txAmount > 10000 ? 50 : 20) + (isForeignIp ? 25 : 0) + (velocitySpike ? 20 : 0);
        setFinanceResult({
          riskScore: Math.min(baseRisk, 99),
          status: baseRisk > 70 ? 'High Risk (Flagged & Intercepted)' : 'Low Risk (Approved)',
          latency: '3.8ms',
          savedAmount: `$${txAmount.toLocaleString()}`,
          signals: [
            isForeignIp ? 'Foreign IP range detected' : 'Domestic verified IP range',
            velocitySpike ? 'Velocity spike anomaly' : 'Velocity within normal bounds',
            txAmount > 10000 ? 'High-value threshold trigger' : 'Standard transaction band',
          ],
        });
      } else if (activeVert === 'agriculture') {
        setAgriResult({
          projectedYield: `+${(ndviIndex * 40).toFixed(1)}% vs Regional Average`,
          healthStatus: ndviIndex > 0.6 ? 'Healthy Vegetation Index' : 'Water Stress Alert',
          waterSaving: `${Math.round(soilMoisture * 500)} Liters / Acre`,
          recommendation: ndviIndex > 0.6 ? 'Optimize micro-fertilization vector' : 'Increase drip irrigation in Sector 4',
        });
      }
      setIsRunningInference(false);
    }, 500);
  };

  const currentVertObj = demoVerts.find((v) => v.id === activeVert) || demoVerts[0];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="INTERACTIVE SANDBOX"
          title="Simulate Real-Time Inference Across 6 Verticals"
          subtitle="Interact directly with our specialized neural simulators and observe production telemetry decision outputs."
        />

        {/* Minimalist Switcher Pills - Native Horizontal Momentum Swipe on Mobile */}
        <div className="flex items-center justify-start md:justify-center gap-1.5 overflow-x-auto scrollbar-none pb-3 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          {demoVerts.map((vert) => (
            <button
              key={vert.id}
              onClick={() => setActiveVert(vert.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap cursor-pointer flex-shrink-0 ${
                activeVert === vert.id
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/70'
              }`}
            >
              <SolutionIcon name={vert.iconName} className="w-3.5 h-3.5" />
              <span>{vert.name}</span>
            </button>
          ))}
        </div>

        {/* Sandbox Canvas */}
        <div className="rounded-2xl border border-black/[0.08] bg-[#fafafa] p-4 sm:p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-black/[0.06]">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-white border border-black/[0.06] px-2 py-0.5 rounded">
                  {currentVertObj.badge}
                </span>
                <span className="text-[11px] font-mono text-zinc-400">Model: doxantro-{currentVertObj.id}-v3.4</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-zinc-900">
                {currentVertObj.title}
              </h3>
            </div>

            <button
              onClick={runSimulation}
              disabled={isRunningInference}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-all shadow-sm cursor-pointer disabled:opacity-50 w-full sm:w-auto flex-shrink-0"
            >
              {isRunningInference ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Evaluating...</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-white" />
                  <span>Run Inference</span>
                </>
              )}
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Left: Input Controls (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-xl p-4 sm:p-5 border border-black/[0.06] space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-500 pb-2 border-b border-black/[0.04]">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Parameters</span>
                </span>
                <span className="text-zinc-900 font-medium">Active Input</span>
              </div>

              {/* Finance Controls */}
              {activeVert === 'finance' && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-500">Transaction Value</span>
                      <span className="font-mono text-zinc-900 font-bold tabular-nums">${txAmount.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={txAmount}
                      onChange={(e) => setTxAmount(Number(e.target.value))}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 border border-black/[0.04]">
                    <span className="text-xs text-zinc-600">Foreign IP Routing</span>
                    <button
                      onClick={() => setIsForeignIp(!isForeignIp)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors ${
                        isForeignIp ? 'bg-[#111111] text-white' : 'bg-zinc-200 text-zinc-600'
                      }`}
                    >
                      {isForeignIp ? 'FLAGGED (AS-9402)' : 'VERIFIED (DOMESTIC)'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 border border-black/[0.04]">
                    <span className="text-xs text-zinc-600">Velocity Anomaly</span>
                    <button
                      onClick={() => setVelocitySpike(!velocitySpike)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors ${
                        velocitySpike ? 'bg-[#111111] text-white' : 'bg-zinc-200 text-zinc-600'
                      }`}
                    >
                      {velocitySpike ? 'DETECTED' : 'NORMAL'}
                    </button>
                  </div>
                </div>
              )}

              {/* Healthcare Controls */}
              {activeVert === 'healthcare' && (
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs text-zinc-500 mb-1.5">Scan Modality</label>
                    <select
                      value={scanType}
                      onChange={(e) => setScanType(e.target.value)}
                      className="w-full p-2 rounded-lg bg-zinc-50 border border-black/[0.06] text-xs text-zinc-900"
                    >
                      <option>Chest CT (Multi-Slice)</option>
                      <option>Brain MRI (T1/T2 Axial)</option>
                      <option>Orthopedic Digital X-Ray</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 border border-black/[0.04]">
                    <span className="text-xs text-zinc-600">Contrast Agent</span>
                    <button
                      onClick={() => setContrastEnhanced(!contrastEnhanced)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors ${
                        contrastEnhanced ? 'bg-[#111111] text-white' : 'bg-zinc-200 text-zinc-600'
                      }`}
                    >
                      {contrastEnhanced ? 'ENHANCED' : 'STANDARD'}
                    </button>
                  </div>
                </div>
              )}

              {/* Agriculture Controls */}
              {activeVert === 'agriculture' && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-500">NDVI Canopy Index</span>
                      <span className="font-mono text-zinc-900 font-bold tabular-nums">{ndviIndex}</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="0.95"
                      step="0.01"
                      value={ndviIndex}
                      onChange={(e) => setNdviIndex(Number(e.target.value))}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-500">Soil Moisture Content</span>
                      <span className="font-mono text-zinc-900 font-bold tabular-nums">{soilMoisture}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={soilMoisture}
                      onChange={(e) => setSoilMoisture(Number(e.target.value))}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Supply Chain Controls */}
              {activeVert === 'supply-chain' && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-500">Port Bottleneck Delay</span>
                      <span className="font-mono text-zinc-900 font-bold tabular-nums">{portDelay} Hours</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="120"
                      value={portDelay}
                      onChange={(e) => setPortDelay(Number(e.target.value))}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Security Controls */}
              {activeVert === 'security' && (
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs text-zinc-500 mb-1.5">Simulated Exploit Payload</label>
                    <select
                      value={attackVector}
                      onChange={(e) => setAttackVector(e.target.value)}
                      className="w-full p-2 rounded-lg bg-zinc-50 border border-black/[0.06] text-xs text-zinc-900"
                    >
                      <option>Privilege Escalation</option>
                      <option>Lateral Kerberos Pass-The-Hash</option>
                      <option>DNS Tunneling Exfiltration</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Energy Controls */}
              {activeVert === 'energy' && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-500">Renewable Output Capacity</span>
                      <span className="font-mono text-zinc-900 font-bold tabular-nums">{solarOutput}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={solarOutput}
                      onChange={(e) => setSolarOutput(Number(e.target.value))}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                  </div>
                </div>
              )}

              <div className="pt-2 text-[11px] text-zinc-400 font-mono">
                Real-time weights updated on client-side simulation bus.
              </div>
            </div>

            {/* Right: Output Canvas (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-xl p-4 sm:p-6 border border-black/[0.06] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono pb-2.5 border-b border-black/[0.04]">
                <span className="text-zinc-900 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>INFERENCE TELEMETRY</span>
                </span>
                <span className="text-zinc-400">Response &lt; 10ms</span>
              </div>

              {/* Dynamic Results Display */}
              {activeVert === 'finance' && (
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-xl bg-zinc-50 border border-black/[0.04]">
                    <div>
                      <div className="text-[11px] text-zinc-500">Risk Score</div>
                      <div className="text-2xl font-bold font-mono text-[#111111] tabular-nums">
                        {financeResult.riskScore} / 100
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded border inline-block ${
                        financeResult.riskScore > 70 ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}>
                        {financeResult.status}
                      </span>
                      <div className="text-[10px] font-mono text-zinc-400 mt-1 tabular-nums">
                        Latency: {financeResult.latency}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                      Evaluated Signals:
                    </div>
                    {financeResult.signals.map((sig, sIdx) => (
                      <div key={sIdx} className="p-2 rounded-lg bg-zinc-50 border border-black/[0.04] text-xs text-zinc-700 flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-zinc-700 flex-shrink-0" />
                        <span>{sig}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeVert === 'healthcare' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-black/[0.04]">
                    <div className="flex justify-between text-xs text-zinc-500 mb-1">
                      <span>Diagnostic Confidence</span>
                      <span className="font-mono text-zinc-900 font-bold tabular-nums">{healthResult.confidence}</span>
                    </div>
                    <div className="text-xs font-semibold text-zinc-900 mb-1.5">{healthResult.finding}</div>
                    <span className="text-[10px] font-mono text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
                      {healthResult.urgency}
                    </span>
                  </div>
                </div>
              )}

              {activeVert === 'agriculture' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-lg bg-zinc-50 border border-black/[0.04]">
                      <div className="text-[11px] text-zinc-500">Projected Yield</div>
                      <div className="text-sm font-bold font-mono text-zinc-900 tabular-nums">{agriResult.projectedYield}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-50 border border-black/[0.04]">
                      <div className="text-[11px] text-zinc-500">Water Conservation</div>
                      <div className="text-sm font-bold font-mono text-zinc-900 tabular-nums">{agriResult.waterSaving}</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 border border-black/[0.04] text-xs text-zinc-600">
                    <span className="font-semibold text-zinc-900 block mb-0.5">Recommendation:</span>
                    {agriResult.recommendation}
                  </div>
                </div>
              )}

              {activeVert === 'supply-chain' && (
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-black/[0.04]">
                    <div className="text-[11px] text-zinc-500">Re-Routing Corridor</div>
                    <div className="text-xs font-semibold text-zinc-900 mb-1">{supplyResult.reRouteVector}</div>
                    <div className="text-[11px] font-mono text-zinc-600">Saved: {supplyResult.etaSaved} | {supplyResult.costReduction} Costs</div>
                  </div>
                </div>
              )}

              {activeVert === 'security' && (
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-black/[0.04]">
                    <div className="text-[11px] text-zinc-500">Autonomous Quarantine</div>
                    <div className="text-xs font-semibold text-zinc-900 mb-1">{secResult.action}</div>
                    <div className="text-[11px] font-mono text-zinc-600">Containment Latency: {secResult.containmentTime}</div>
                  </div>
                </div>
              )}

              {activeVert === 'energy' && (
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-black/[0.04]">
                    <div className="text-[11px] text-zinc-500">Grid Stabilization</div>
                    <div className="text-xs font-semibold text-zinc-900 mb-1">{energyResult.gridFrequency}</div>
                    <div className="text-[11px] font-mono text-zinc-600">{energyResult.batteryDispatch} ({energyResult.peakerSavings})</div>
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-black/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <span className="text-zinc-500">Fine-tune on your private dataset</span>
                <Link
                  href={`/ai-${activeVert === 'finance' ? 'finance' : activeVert === 'healthcare' ? 'healthcare' : activeVert === 'agriculture' ? 'agriculture' : activeVert === 'supply-chain' ? 'supply-chain' : activeVert === 'security' ? 'security' : 'energy'}`}
                  className="font-medium text-zinc-900 hover:text-orange-600 inline-flex items-center gap-1"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
