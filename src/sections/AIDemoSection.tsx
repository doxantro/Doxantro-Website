'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Activity,
  Boxes,
  Sprout,
  BadgeDollarSign,
  ShieldAlert,
  ArrowRight,
  Sliders,
  Terminal,
} from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import GlowCard from '../components/ui/GlowCard';
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
    }, 650);
  };

  const currentVertObj = demoVerts.find((v) => v.id === activeVert) || demoVerts[0];

  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Interactive Sandbox"
          badgeVariant="orange"
          title="Experience Doxantro AI"
          highlightText="in Action"
          subtitle="Interact directly with our specialized inference simulators across 6 high-stakes industries and observe real-time decision outputs."
          className="text-white"
        />

        {/* Vertical Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {demoVerts.map((vert) => (
            <button
              key={vert.id}
              onClick={() => setActiveVert(vert.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeVert === vert.id
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              <SolutionIcon name={vert.iconName} className="w-4 h-4" />
              <span>{vert.name}</span>
            </button>
          ))}
        </div>

        {/* Sandbox Canvas */}
        <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="orange" dot pulse size="sm">
                  {currentVertObj.badge}
                </Badge>
                <span className="text-xs font-mono text-zinc-400">Model: doxantro-{currentVertObj.id}-v3.4</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {currentVertObj.title}
              </h3>
            </div>

            <Button
              onClick={runSimulation}
              disabled={isRunningInference}
              size="md"
              variant="primary"
              icon={isRunningInference ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-white" />}
            >
              {isRunningInference ? 'Running Inference...' : 'Execute Neural Scan'}
            </Button>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Controls (5 cols) */}
            <div className="lg:col-span-5 bg-zinc-950/80 rounded-2xl p-6 border border-zinc-800 space-y-6">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-400 pb-2 border-b border-zinc-800">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-orange-500" />
                  <span>Input Parameters</span>
                </span>
                <span className="text-orange-400 font-mono">Live Inputs</span>
              </div>

              {/* Finance Controls */}
              {activeVert === 'finance' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-400">Transaction Amount</span>
                      <span className="font-mono text-orange-400 font-bold">${txAmount.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={txAmount}
                      onChange={(e) => setTxAmount(Number(e.target.value))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-xs text-zinc-300">Foreign IP Routing</span>
                    <button
                      onClick={() => setIsForeignIp(!isForeignIp)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                        isForeignIp ? 'bg-orange-600 text-white' : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {isForeignIp ? 'YES (Mismatch)' : 'NO (Domestic)'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-xs text-zinc-300">Velocity Spike Anomaly</span>
                    <button
                      onClick={() => setVelocitySpike(!velocitySpike)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                        velocitySpike ? 'bg-orange-600 text-white' : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {velocitySpike ? 'DETECTED' : 'NORMAL'}
                    </button>
                  </div>
                </div>
              )}

              {/* Healthcare Controls */}
              {activeVert === 'healthcare' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-2">Scan Modality</label>
                    <select
                      value={scanType}
                      onChange={(e) => setScanType(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white"
                    >
                      <option>Chest CT (Multi-Slice)</option>
                      <option>Brain MRI (T1/T2 Axial)</option>
                      <option>Orthopedic Digital X-Ray</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-xs text-zinc-300">Contrast Agent Enhanced</span>
                    <button
                      onClick={() => setContrastEnhanced(!contrastEnhanced)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                        contrastEnhanced ? 'bg-orange-600 text-white' : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {contrastEnhanced ? 'ENABLED' : 'DISABLED'}
                    </button>
                  </div>
                </div>
              )}

              {/* Agriculture Controls */}
              {activeVert === 'agriculture' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-400">Multispectral NDVI Index</span>
                      <span className="font-mono text-orange-400 font-bold">{ndviIndex}</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="0.95"
                      step="0.01"
                      value={ndviIndex}
                      onChange={(e) => setNdviIndex(Number(e.target.value))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-400">Soil Moisture Content</span>
                      <span className="font-mono text-orange-400 font-bold">{soilMoisture}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={soilMoisture}
                      onChange={(e) => setSoilMoisture(Number(e.target.value))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Supply Chain Controls */}
              {activeVert === 'supply-chain' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-400">Port Delay Bottleneck</span>
                      <span className="font-mono text-orange-400 font-bold">{portDelay} Hours</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="120"
                      value={portDelay}
                      onChange={(e) => setPortDelay(Number(e.target.value))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Security Controls */}
              {activeVert === 'security' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-2">Simulated Exploit Payload</label>
                    <select
                      value={attackVector}
                      onChange={(e) => setAttackVector(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white"
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
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-zinc-400">Intermittent Solar & Wind Output</span>
                      <span className="font-mono text-orange-400 font-bold">{solarOutput}% Capacity</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={solarOutput}
                      onChange={(e) => setSolarOutput(Number(e.target.value))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              <div className="pt-2 text-[11px] text-zinc-500">
                Adjust sliders or toggles, then click "Execute Neural Scan" to trigger client-side evaluation.
              </div>
            </div>

            {/* Right: Live Telemetry Output Canvas (7 cols) */}
            <div className="lg:col-span-7 bg-zinc-950 rounded-2xl p-6 sm:p-8 border border-zinc-800 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-zinc-800">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>INFERENCE RESULT CANVAS</span>
                </span>
                <span className="text-zinc-400">Response SLA: &lt;10ms</span>
              </div>

              {/* Dynamic Results Display */}
              {activeVert === 'finance' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                    <div>
                      <div className="text-xs text-zinc-400">Neural Risk Score</div>
                      <div className="text-3xl font-extrabold font-mono text-orange-400">
                        {financeResult.riskScore} / 100
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={financeResult.riskScore > 70 ? 'orange' : 'green'} size="sm">
                        {financeResult.status}
                      </Badge>
                      <div className="text-xs font-mono text-zinc-400 mt-1">
                        Inference: {financeResult.latency}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Neural Decision Signals:
                    </div>
                    {financeResult.signals.map((sig, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-300 flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                        <span>{sig}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeVert === 'healthcare' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                    <div className="flex justify-between text-xs text-zinc-400 mb-1">
                      <span>Diagnostic Confidence Score</span>
                      <span className="font-mono text-emerald-400 font-bold">{healthResult.confidence}</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-2">{healthResult.finding}</div>
                    <Badge variant="orange" size="sm">{healthResult.urgency}</Badge>
                  </div>
                </div>
              )}

              {activeVert === 'agriculture' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                      <div className="text-xs text-zinc-400">Projected Yield</div>
                      <div className="text-lg font-bold font-mono text-emerald-400">{agriResult.projectedYield}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                      <div className="text-xs text-zinc-400">Water Conservation</div>
                      <div className="text-lg font-bold font-mono text-orange-400">{agriResult.waterSaving}</div>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                    <span className="font-bold text-white block mb-1">Prescription Action:</span>
                    {agriResult.recommendation}
                  </div>
                </div>
              )}

              {activeVert === 'supply-chain' && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                    <div className="text-xs text-zinc-400">Dynamic Re-routing Vector</div>
                    <div className="text-sm font-bold text-white mb-1">{supplyResult.reRouteVector}</div>
                    <div className="text-xs font-mono text-emerald-400">Saved: {supplyResult.etaSaved} | {supplyResult.costReduction} Costs</div>
                  </div>
                </div>
              )}

              {activeVert === 'security' && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                    <div className="text-xs text-zinc-400">Autonomous Defense Trigger</div>
                    <div className="text-sm font-bold text-white mb-1">{secResult.action}</div>
                    <div className="text-xs font-mono text-emerald-400">Containment Latency: {secResult.containmentTime}</div>
                  </div>
                </div>
              )}

              {activeVert === 'energy' && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                    <div className="text-xs text-zinc-400">Grid Stabilization Status</div>
                    <div className="text-sm font-bold text-white mb-1">{energyResult.gridFrequency}</div>
                    <div className="text-xs font-mono text-orange-400">{energyResult.batteryDispatch} ({energyResult.peakerSavings})</div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Need this model fine-tuned on your private dataset?</span>
                <Link
                  href={`/ai-${activeVert === 'finance' ? 'finance' : activeVert === 'healthcare' ? 'healthcare' : activeVert === 'agriculture' ? 'agriculture' : activeVert === 'supply-chain' ? 'supply-chain' : activeVert === 'security' ? 'security' : 'energy'}`}
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1"
                >
                  <span>Explore Full Architecture</span>
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
