'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  Play,
  RefreshCw,
  Sliders,
  ShieldCheck,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';
import SolutionIcon from '../ui/SolutionIcon';

interface PipelineStep {
  step: string;
  name: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  specs: { label: string; value: string }[];
}

interface VerticalPipeline {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  modelName: string;
  routePath: string;
  summaryMetric: { label: string; value: string };
  p99Latency: string;
  throughput: string;
  steps: PipelineStep[];
}

const pipelineData: VerticalPipeline[] = [
  {
    id: 'finance',
    name: 'High-Frequency Fintech & Fraud Mesh',
    shortName: 'Finance',
    iconName: 'BadgeDollarSign',
    modelName: 'dox-fin-gnn',
    routePath: '/ai-finance',
    summaryMetric: { label: 'Fraud Intercept', value: '99.9%' },
    p99Latency: '3.8ms',
    throughput: '18k ops/s',
    steps: [
      {
        step: '01',
        name: 'Data Vault',
        badge: 'Zero-Retention',
        icon: Lock,
        headline: 'Encrypted Streaming Tokenizer & PII Scrub',
        specs: [
          { label: 'Encryption', value: 'AES-256 GCM' },
          { label: 'PII Scrub', value: 'Deterministic' },
          { label: 'Ingest SLA', value: '0.4ms' },
        ],
      },
      {
        step: '02',
        name: 'Neural Core',
        badge: '4-bit AWQ',
        icon: Cpu,
        headline: 'Graph Attention Network (128-dim)',
        specs: [
          { label: 'Weights', value: 'Domain-Tuned' },
          { label: 'Quantization', value: 'AWQ 4-Bit' },
          { label: 'VRAM Footprint', value: '3.2 GB' },
        ],
      },
      {
        step: '03',
        name: 'Inference Mesh',
        badge: 'Sub-10ms',
        icon: Zap,
        headline: 'Distributed Edge Acceleration Cluster',
        specs: [
          { label: 'P99 Latency', value: '3.8ms' },
          { label: 'Throughput', value: '18k ops/s' },
          { label: 'Protocol', value: 'gRPC IPC' },
        ],
      },
      {
        step: '04',
        name: 'Decision Trigger',
        badge: 'Autonomous',
        icon: CheckCircle2,
        headline: 'Synthetic Anomaly Intercept & Block',
        specs: [
          { label: 'Decision Action', value: 'Quarantine' },
          { label: 'Confidence', value: '99.94%' },
          { label: 'Protected', value: '$14,500' },
        ],
      },
    ],
  },
  {
    id: 'healthcare',
    name: 'Clinical DICOM Scan Diagnostic Pipeline',
    shortName: 'Healthcare',
    iconName: 'Activity',
    modelName: 'dox-med-vit',
    routePath: '/ai-healthcare',
    summaryMetric: { label: 'Diagnostic AUC', value: '99.4%' },
    p99Latency: '38ms',
    throughput: '2.4k scans/h',
    steps: [
      {
        step: '01',
        name: 'HIPAA Ingest',
        badge: 'SOC-2 Vault',
        icon: Lock,
        headline: 'De-Identified PACS & DICOM Routing',
        specs: [
          { label: 'Compliance', value: 'HIPAA & GDPR' },
          { label: 'Sanitization', value: 'Lossless' },
          { label: 'Ingest Route', value: 'PACS Node' },
        ],
      },
      {
        step: '02',
        name: 'Vision Transformer',
        badge: 'Multi-Modal',
        icon: Cpu,
        headline: '3D Axial Volumetric Attention Encoder',
        specs: [
          { label: 'Resolution', value: '512x512x64' },
          { label: 'Backbone', value: 'ViT-Med-3D' },
          { label: 'Precision', value: 'Sub-Voxel' },
        ],
      },
      {
        step: '03',
        name: 'Edge TPU Mesh',
        badge: 'On-Premises',
        icon: Zap,
        headline: 'Air-Gapped Radiological Acceleration',
        specs: [
          { label: 'Inference SLA', value: '0.38s/Scan' },
          { label: 'Concurrency', value: '48 Streams' },
          { label: 'Deployment', value: 'Hospital Node' },
        ],
      },
      {
        step: '04',
        name: 'Alert Dispatch',
        badge: 'Tier-1 Flag',
        icon: CheckCircle2,
        headline: 'Abnormality Heatmap & Physician Priority',
        specs: [
          { label: 'Finding', value: 'Ground Glass' },
          { label: 'Urgency Tier', value: 'Immediate' },
          { label: 'Diagnostic AUC', value: '99.4%' },
        ],
      },
    ],
  },
  {
    id: 'agriculture',
    name: 'Precision Agricultural Multispectral Pipeline',
    shortName: 'Agriculture',
    iconName: 'Sprout',
    modelName: 'dox-agri-ndvi',
    routePath: '/ai-agriculture',
    summaryMetric: { label: 'Yield Increase', value: '+32.4%' },
    p99Latency: '6.2ms',
    throughput: '85k Acres/d',
    steps: [
      {
        step: '01',
        name: 'Orbital Ingest',
        badge: 'Multi-Band',
        icon: Lock,
        headline: 'Sentinel-2 & Drone Imagery Aggregator',
        specs: [
          { label: 'Bands', value: '13 Spectral' },
          { label: 'Sensors', value: 'Ground IoT' },
          { label: 'Refresh', value: 'Daily Orbit' },
        ],
      },
      {
        step: '02',
        name: 'NDVI Regressor',
        badge: 'Geo-Spatial',
        icon: Cpu,
        headline: 'Chlorophyll Stress & Soil Hydration ML',
        specs: [
          { label: 'Resolution', value: '0.5m/Pixel' },
          { label: 'Architecture', value: 'ConvLSTM' },
          { label: 'Ontologies', value: '24 Crops' },
        ],
      },
      {
        step: '03',
        name: 'Field Edge Mesh',
        badge: 'Low-Power',
        icon: Zap,
        headline: 'Low-Power Solar Gateway Synchronization',
        specs: [
          { label: 'Response SLA', value: '6.2ms' },
          { label: 'Power Draw', value: '7W Solar' },
          { label: 'Mesh Protocol', value: 'LoRaWAN Edge' },
        ],
      },
      {
        step: '04',
        name: 'Dosing Vector',
        badge: 'Autonomous',
        icon: CheckCircle2,
        headline: 'Automated Micro-Irrigation & Fertilizer Output',
        specs: [
          { label: 'Yield Delta', value: '+32.4%' },
          { label: 'Water Saved', value: '38k L/Acre' },
          { label: 'Nitrogen Saved', value: '-18%' },
        ],
      },
    ],
  },
  {
    id: 'supply-chain',
    name: 'Multi-Echelon Freight Route Optimizer',
    shortName: 'Supply Chain',
    iconName: 'Boxes',
    modelName: 'dox-route-rl',
    routePath: '/ai-supply-chain',
    summaryMetric: { label: 'Freight Delta', value: '-22.6%' },
    p99Latency: '8.4ms',
    throughput: '50k Waypoints/s',
    steps: [
      {
        step: '01',
        name: 'AIS Vessel Stream',
        badge: 'Real-Time',
        icon: Lock,
        headline: 'Port Bottleneck & AIS Vessel Stream',
        specs: [
          { label: 'Telemetry', value: 'AIS + Port' },
          { label: 'Tariff Matrix', value: 'Dynamic' },
          { label: 'Update Cycle', value: 'Sub-Second' },
        ],
      },
      {
        step: '02',
        name: 'Policy Network',
        badge: 'RL Solver',
        icon: Cpu,
        headline: 'Reinforcement Learning Multi-Modal Solver',
        specs: [
          { label: 'Graph Depth', value: '18 Layers' },
          { label: 'Reward Metric', value: 'Min Cost/ETA' },
          { label: 'Heuristics', value: 'Dynamic' },
        ],
      },
      {
        step: '03',
        name: 'Transit Mesh',
        badge: 'Sub-10ms',
        icon: Zap,
        headline: 'Instant Global Corridor Re-Calculation',
        specs: [
          { label: 'Execution SLA', value: '8.4ms' },
          { label: 'Nodes Evaluated', value: '45k/sec' },
          { label: 'Failover Rate', value: '0.001%' },
        ],
      },
      {
        step: '04',
        name: 'Auto-Reroute',
        badge: 'Dispatched',
        icon: CheckCircle2,
        headline: 'Direct Rail Bypass Corridor Hub Gamma',
        specs: [
          { label: 'Transit Saved', value: '42 Hours' },
          { label: 'Cost Delta', value: '-22.6%' },
          { label: 'SLA Guarantee', value: '100%' },
        ],
      },
    ],
  },
  {
    id: 'security',
    name: 'Zero-Day Packet Interceptor & Quarantine',
    shortName: 'Cyber Defense',
    iconName: 'ShieldAlert',
    modelName: 'dox-sec-ebpf',
    routePath: '/ai-security',
    summaryMetric: { label: 'Containment', value: '< 1 sec' },
    p99Latency: '2.1ms',
    throughput: '100 Gbps Link',
    steps: [
      {
        step: '01',
        name: 'Kernel eBPF Tap',
        badge: 'Ring-0 Sensor',
        icon: Lock,
        headline: 'Non-Blocking L3/L7 Packet Stream Capture',
        specs: [
          { label: 'CPU Overhead', value: '< 0.2%' },
          { label: 'Depth', value: 'Raw Payloads' },
          { label: 'Line Rate', value: '100 Gbps' },
        ],
      },
      {
        step: '02',
        name: 'Autoencoder',
        badge: 'Zero-Day AI',
        icon: Cpu,
        headline: 'Memory Exploit & Privilege Escalation Model',
        specs: [
          { label: 'Detection', value: 'Zero-Signature' },
          { label: 'False Positives', value: '< 0.01%' },
          { label: 'Backbone', value: 'Transformer' },
        ],
      },
      {
        step: '03',
        name: 'Sovereign Enclave',
        badge: 'Air-Gapped',
        icon: Zap,
        headline: 'Sub-Millisecond Hardware Isolation Core',
        specs: [
          { label: 'Inference Time', value: '2.1ms' },
          { label: 'Isolation', value: 'Memory Seg' },
          { label: 'Audit Trail', value: 'Cryptographic' },
        ],
      },
      {
        step: '04',
        name: 'Quarantine',
        badge: 'Mitigated',
        icon: CheckCircle2,
        headline: 'Exploit Packet Dropped & Keys Rotated',
        specs: [
          { label: 'Containment', value: '2.8ms' },
          { label: 'Exfiltration', value: '0 Bytes' },
          { label: 'Threat State', value: 'Neutralized' },
        ],
      },
    ],
  },
  {
    id: 'energy',
    name: 'Renewable Smart Grid Load Balancer',
    shortName: 'Clean Energy',
    iconName: 'Zap',
    modelName: 'dox-grid',
    routePath: '/ai-energy',
    summaryMetric: { label: 'Efficiency Gain', value: '+24.8%' },
    p99Latency: '4.6ms',
    throughput: '1M Nodes/s',
    steps: [
      {
        step: '01',
        name: 'SCADA Stream',
        badge: 'Real-Time',
        icon: Lock,
        headline: '100Hz Grid Frequency & Inverter Sensors',
        specs: [
          { label: 'Sample Rate', value: '100 Hz' },
          { label: 'Sensors', value: '12k Nodes' },
          { label: 'Bus Latency', value: 'Sub-1ms' },
        ],
      },
      {
        step: '02',
        name: 'Time Transformer',
        badge: 'Predictive',
        icon: Cpu,
        headline: '48-Hour Solar/Wind Output Predictive Model',
        specs: [
          { label: 'Horizon', value: '48 Hours' },
          { label: 'Window', value: '8,192 Steps' },
          { label: 'Drift Shield', value: 'Active Retrain' },
        ],
      },
      {
        step: '03',
        name: 'Dispatch Mesh',
        badge: 'Sub-10ms',
        icon: Zap,
        headline: 'Autonomous Battery Inverter Orchestration',
        specs: [
          { label: 'Inference SLA', value: '4.6ms' },
          { label: 'Stability Index', value: '99.98%' },
          { label: 'Frequency', value: '50.02 Hz' },
        ],
      },
      {
        step: '04',
        name: 'Peaker Balance',
        badge: 'Dispatched',
        icon: CheckCircle2,
        headline: 'Automated +34 MW Battery Storage Discharge',
        specs: [
          { label: 'Peaker Savings', value: '$18.4k/hr' },
          { label: 'Efficiency', value: '+24.8%' },
          { label: 'CO2 Offset', value: '3.8 T/hr' },
        ],
      },
    ],
  },
];

export default function NeuralPipelineVisualizer() {
  const [activeVerticalId, setActiveVerticalId] = useState<string>(pipelineData[0].id);
  const [selectedStepIdx, setSelectedStepIdx] = useState<number>(0);
  const [isSimulatingPass, setIsSimulatingPass] = useState<boolean>(false);
  const [pulseStage, setPulseStage] = useState<number>(-1);

  const activeVertical = pipelineData.find((p) => p.id === activeVerticalId) || pipelineData[0];
  const activeStep = activeVertical.steps[selectedStepIdx] || activeVertical.steps[0];

  const handleVerticalChange = (vertId: string) => {
    setActiveVerticalId(vertId);
    setSelectedStepIdx(0);
  };

  const triggerLiveSimulation = () => {
    if (isSimulatingPass) return;
    setIsSimulatingPass(true);
    setPulseStage(0);

    const stepInterval = 280;
    setTimeout(() => setPulseStage(1), stepInterval * 1);
    setTimeout(() => setPulseStage(2), stepInterval * 2);
    setTimeout(() => {
      setPulseStage(3);
      setSelectedStepIdx(3);
    }, stepInterval * 3);
    setTimeout(() => {
      setPulseStage(-1);
      setIsSimulatingPass(false);
    }, stepInterval * 4);
  };

  return (
    <div className="relative rounded-2xl border border-black/[0.1] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden w-full max-w-full">
      {/* 1. Header & Sector Pills Bar */}
      <div className="p-3 sm:p-4 pb-2.5 border-b border-black/[0.06] bg-[#fafafa] w-full overflow-hidden">
        <div className="flex items-center justify-between gap-1.5 mb-2 w-full">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse flex-shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-zinc-700 font-semibold truncate">
              Neural Substrate Pipeline
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 bg-white border border-black/[0.06] px-1.5 sm:px-2 py-0.5 rounded flex-shrink-0 truncate max-w-[130px]">
            {activeVertical.modelName}
          </span>
        </div>

        {/* Horizontal Scrollable Presets with Momentum Scrolling */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full">
          {pipelineData.map((vert) => {
            const isSelected = activeVerticalId === vert.id;
            return (
              <button
                key={vert.id}
                onClick={() => handleVerticalChange(vert.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                  isSelected
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white border border-black/[0.08] text-zinc-600 hover:text-[#111111] hover:border-black/[0.15]'
                }`}
              >
                <SolutionIcon name={vert.iconName} className="w-3 h-3 flex-shrink-0" />
                <span>{vert.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Pipeline Visualizer Body */}
      <div className="p-3 sm:p-4 lg:p-5 space-y-3 sm:space-y-4 w-full overflow-hidden">
        {/* Pipeline Stage Indicators (4 Connected Nodes with Strict min-w-0 containment) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 relative w-full">
          {activeVertical.steps.map((st, idx) => {
            const isSelected = selectedStepIdx === idx;
            const isPulsing = pulseStage === idx;
            const StepIcon = st.icon;

            return (
              <button
                key={st.step}
                onClick={() => setSelectedStepIdx(idx)}
                className={`relative text-left p-2 sm:p-3 rounded-xl border transition-all cursor-pointer overflow-hidden min-w-0 w-full ${
                  isSelected
                    ? 'bg-[#0d0d10] text-white border-black/[0.12] shadow-sm'
                    : 'bg-[#fafafa] hover:bg-zinc-100/80 text-zinc-800 border-black/[0.06]'
                } ${isPulsing ? 'ring-2 ring-orange-500 scale-[1.01]' : ''}`}
              >
                {/* Active Packet Pulse Wave */}
                {isPulsing && (
                  <span className="absolute inset-0 bg-orange-500/15 animate-pulse pointer-events-none" />
                )}

                <div className="flex items-center justify-between gap-1 mb-1 min-w-0">
                  <div className="flex items-center gap-1 min-w-0 truncate">
                    <span
                      className={`text-[9px] font-mono px-1 py-0.2 rounded font-bold flex-shrink-0 ${
                        isSelected ? 'bg-white/10 text-zinc-300' : 'bg-zinc-200 text-zinc-600'
                      }`}
                    >
                      {st.step}
                    </span>
                    <span
                      className={`text-[8px] font-mono uppercase truncate ${
                        isSelected ? 'text-emerald-400' : 'text-zinc-500'
                      }`}
                    >
                      {st.badge}
                    </span>
                  </div>

                  <StepIcon
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 ${
                      isSelected ? 'text-orange-400' : 'text-zinc-500'
                    }`}
                  />
                </div>

                <div className="text-[11px] sm:text-xs font-bold leading-tight truncate mb-0.5">
                  {st.name}
                </div>
                <div
                  className={`text-[9px] sm:text-[10px] font-mono truncate ${
                    isSelected ? 'text-zinc-400' : 'text-zinc-500'
                  }`}
                >
                  {st.specs[0].label}: <span className="font-semibold">{st.specs[0].value}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 3. Deep Node Inspector Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeVertical.id}-${activeStep.step}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="rounded-xl p-3 sm:p-4 bg-zinc-50/90 border border-black/[0.06] space-y-2.5 w-full overflow-hidden"
          >
            <div className="flex items-center justify-between pb-2 border-b border-black/[0.05] min-w-0 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#111111] text-white flex items-center justify-center text-[9px] sm:text-[10px] font-mono font-bold flex-shrink-0">
                  {activeStep.step}
                </span>
                <div className="min-w-0 truncate">
                  <h4 className="text-[11px] sm:text-xs font-bold text-zinc-900 leading-tight truncate">
                    {activeStep.headline}
                  </h4>
                  <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 truncate block">
                    Phase {activeStep.step} · {activeStep.name}
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 flex-shrink-0">
                <ShieldCheck className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                <span>Zero Data Drift</span>
              </div>
            </div>

            {/* Spec Matrix - 3 column responsive boxes with min-w-0 containment */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full">
              {activeStep.specs.map((sp, sIdx) => (
                <div key={sIdx} className="p-1.5 sm:p-2 rounded-lg bg-white border border-black/[0.04] min-w-0 overflow-hidden">
                  <div className="text-[8px] sm:text-[9px] font-mono text-zinc-400 uppercase tracking-wider truncate">
                    {sp.label}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold font-mono text-zinc-900 truncate mt-0.5">
                    {sp.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4. Live Telemetry & Simulation Trigger Footer */}
        <div className="pt-2.5 border-t border-black/[0.06] flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2.5 sm:gap-2 w-full">
          {/* Real-time Telemetry Metrics */}
          <div className="flex items-center justify-between xs:justify-start gap-2.5 sm:gap-4 text-[10px] sm:text-[11px] font-mono flex-wrap">
            <div className="flex items-center gap-1 min-w-0">
              <span className="text-zinc-400">P99:</span>
              <span className="font-bold text-zinc-900">{activeVertical.p99Latency}</span>
            </div>
            <div className="flex items-center gap-1 min-w-0">
              <span className="text-zinc-400">Throughput:</span>
              <span className="font-bold text-zinc-900">{activeVertical.throughput}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 min-w-0">
              <span className="text-zinc-400">{activeVertical.summaryMetric.label}:</span>
              <span className="font-bold text-emerald-600">{activeVertical.summaryMetric.value}</span>
            </div>
          </div>

          {/* Interactive Simulation Trigger */}
          <button
            onClick={triggerLiveSimulation}
            disabled={isSimulatingPass}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-medium transition-all shadow-sm cursor-pointer disabled:opacity-50 flex-shrink-0 w-full xs:w-auto"
          >
            {isSimulatingPass ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin text-orange-400" />
                <span>Routing...</span>
              </>
            ) : (
              <>
                <Play className="w-2.5 h-2.5 fill-white" />
                <span>Simulate Ingest</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
