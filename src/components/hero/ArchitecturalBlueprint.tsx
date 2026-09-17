'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  Zap,
  ArrowRight,
  Database,
  Lock,
  GitBranch,
  Layers,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import SolutionIcon from '../ui/SolutionIcon';

interface LayerData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  badges: string[];
  description: string;
  sectorApplication: string;
  deliverables: string[];
}

interface VerticalArchitecture {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  routePath: string;
  tagline: string;
  layers: [
    { sectorApplication: string; badges: string[]; detail: string },
    { sectorApplication: string; badges: string[]; detail: string },
    { sectorApplication: string; badges: string[]; detail: string }
  ];
}

const verticals: VerticalArchitecture[] = [
  {
    id: 'finance',
    name: 'High-Frequency Fintech & Risk Infrastructure',
    shortName: 'Finance',
    iconName: 'BadgeDollarSign',
    routePath: '/ai-finance',
    tagline: 'Deterministic fraud detection with zero data retention.',
    layers: [
      {
        sectorApplication: 'Real-time payment gateway tokenizer with deterministic PII sanitization.',
        badges: ['Zero-Retention', 'AES-256 GCM', 'PCI-DSS'],
        detail: 'Ingests transaction streams directly into memory with hardware-enforced cryptographic sanitization before model processing.',
      },
      {
        sectorApplication: 'Graph Attention Network (GAN) tuned on cross-institutional transaction typologies.',
        badges: ['Domain-Tuned', 'Sub-10ms Inference', 'AWQ Quantized'],
        detail: 'Evaluates relational anomaly patterns across 128-dimensional entity graphs in under 4 milliseconds.',
      },
      {
        sectorApplication: 'Autonomous account quarantine & real-time risk mitigation dispatch.',
        badges: ['Autonomous Intercept', 'Audit Verified', 'Human-in-the-Loop'],
        detail: 'Triggers instant liquidity stops and generates cryptographically signed audit logs for compliance review.',
      },
    ],
  },
  {
    id: 'healthcare',
    name: 'Clinical Diagnostics & Hospital PACS Enclave',
    shortName: 'Healthcare',
    iconName: 'Activity',
    routePath: '/ai-healthcare',
    tagline: 'De-identified radiological triage inside air-gapped clinical enclaves.',
    layers: [
      {
        sectorApplication: 'Direct DICOM / PACS image router with lossless patient de-identification.',
        badges: ['HIPAA & GDPR', 'Air-Gapped', 'On-Premises'],
        detail: 'Sanitizes clinical headers while maintaining sub-voxel radiological fidelity across MRI and CT series.',
      },
      {
        sectorApplication: '3D Axial Volumetric Vision Transformer fine-tuned on radiological benchmarks.',
        badges: ['ViT-Med Backbone', 'Sub-Voxel Precision', 'Zero-Drift'],
        detail: 'Processes multi-slice volumetric scans to detect subtle pulmonary and neurological anomalies.',
      },
      {
        sectorApplication: 'Tier-1 physician emergency alert dispatch and clinical priority queueing.',
        badges: ['Physician Priority', 'EHR Integrated', 'Validated AUC 99.4%'],
        detail: 'Pushes automated anomaly heatmaps directly to attending radiologists within 30 seconds of scan completion.',
      },
    ],
  },
  {
    id: 'agriculture',
    name: 'Multispectral Precision Agronomy Infrastructure',
    shortName: 'Agriculture',
    iconName: 'Sprout',
    routePath: '/ai-agriculture',
    tagline: 'Satellite and ground IoT fusion for autonomous yield optimization.',
    layers: [
      {
        sectorApplication: 'Multispectral Sentinel-2 imagery feed & solar-powered soil sensor hub.',
        badges: ['13-Band Ingest', 'LoRaWAN Mesh', 'Daily Orbit'],
        detail: 'Combines orbital telemetry with localized soil hydration probes to build continuous field micro-climate models.',
      },
      {
        sectorApplication: 'Temporal ConvLSTM Canopy Chlorophyll & NDVI index regressor.',
        badges: ['Geo-Spatial ML', '24 Crop Ontologies', '0.5m Resolution'],
        detail: 'Projects biomass accumulation curves and detects nitrogen deficiencies weeks before visual symptoms appear.',
      },
      {
        sectorApplication: 'Automated variable-rate fertilizer & micro-irrigation dispatch.',
        badges: ['Autonomous Dosing', '+32% Yield Delta', 'Water Conserved'],
        detail: 'Transmits prescription maps directly to autonomous sprayers and pivot irrigation systems.',
      },
    ],
  },
  {
    id: 'supply-chain',
    name: 'Global Multi-Modal Logistics & Freight Matrix',
    shortName: 'Supply Chain',
    iconName: 'Boxes',
    routePath: '/ai-supply-chain',
    tagline: 'Dynamic corridor re-calculation across ports, rail, and freight routes.',
    layers: [
      {
        sectorApplication: 'Global AIS vessel tracking, port dwell telemetry, and customs feed aggregator.',
        badges: ['Real-Time Ingestion', 'Tariff Adaptive', 'Sub-Second'],
        detail: 'Monitors international maritime chokepoints and customs delays across 45,000 active trade lanes.',
      },
      {
        sectorApplication: 'Reinforcement learning multi-echelon network corridor solver.',
        badges: ['Graph RL Engine', 'Multi-Constraint', 'ETA Minimizer'],
        detail: 'Computes millions of alternative intermodal combinations to optimize cost, transit time, and carbon emissions.',
      },
      {
        sectorApplication: 'Automated carrier dispatch & intermodal bypass rerouting.',
        badges: ['Dispatched', '-22.6% Freight Cost', '100% SLA Guarantee'],
        detail: 'Executes direct rail bypass corridors automatically when port dwell times exceed predefined SLA thresholds.',
      },
    ],
  },
  {
    id: 'security',
    name: 'Kernel-Level Cyber Defense & Memory Isolation',
    shortName: 'Cyber Defense',
    iconName: 'ShieldAlert',
    routePath: '/ai-security',
    tagline: 'Zero-day exploit detection and autonomous hardware memory isolation.',
    layers: [
      {
        sectorApplication: 'Non-blocking Ring-0 eBPF kernel sensor tapping L3/L7 raw packet flows.',
        badges: ['< 0.2% Overhead', 'Ring-0 Tap', '100 Gbps Line Rate'],
        detail: 'Captures raw payload buffers at hardware line-rate without introducing network latency or socket blocking.',
      },
      {
        sectorApplication: 'Latent space payload autoencoder detecting zero-signature memory exploits.',
        badges: ['Zero-Day Defense', 'Transformer ML', '< 0.01% False Positive'],
        detail: 'Identifies novel buffer overflow and privilege escalation vectors by analyzing execution trace distributions.',
      },
      {
        sectorApplication: 'Sub-millisecond memory segment quarantine & cryptographic key rotation.',
        badges: ['Threat Neutralized', 'Zero Data Loss', 'Automated Containment'],
        detail: 'Isolates infected kernel threads in under 3 milliseconds and immediately revokes compromised session tokens.',
      },
    ],
  },
  {
    id: 'energy',
    name: 'Smart Grid Load Balancing & Battery Dispatch',
    shortName: 'Clean Energy',
    iconName: 'Zap',
    routePath: '/ai-energy',
    tagline: 'Predictive generation forecasting and automated peaker suppression.',
    layers: [
      {
        sectorApplication: '100Hz SCADA bus telemetry stream from solar inverters, turbines, and substations.',
        badges: ['100 Samples/s', 'SCADA Bus', '12k Grid Nodes'],
        detail: 'Collects synchronized phasor measurements across distributed renewable generation assets in real time.',
      },
      {
        sectorApplication: '48-hour time-series forecasting transformer with continuous drift shield.',
        badges: ['Predictive ML', '8,192-Step Window', 'Continuous Retrain'],
        detail: 'Forecasts solar irradiance, wind gusts, and metropolitan load curves 48 hours in advance.',
      },
      {
        sectorApplication: 'Autonomous multi-megawatt battery storage inverter charge/discharge dispatch.',
        badges: ['Optimal Dispatch', '+24.8% Efficiency', 'Peaker Suppressed'],
        detail: 'Discharges grid-scale battery storage during peak demand spikes to eliminate reliance on fossil peaker plants.',
      },
    ],
  },
];

const baseLayers = [
  {
    number: '01',
    title: 'Private Data Substrate',
    subtitle: 'Air-Gapped Ingestion & Cryptographic Security',
    icon: Database,
    defaultBadges: ['Air-Gapped', 'Zero-Retention', 'AES-256 GCM'],
    coreGuarantee: 'Zero external retention · Enterprise sovereign enclaves',
  },
  {
    number: '02',
    title: 'Neural Core Orchestration',
    subtitle: 'Domain-Adapted Weights & Inference Mesh',
    icon: Cpu,
    defaultBadges: ['Domain-Tuned', 'Low-Latency', 'Deterministic'],
    coreGuarantee: 'Fine-tuned on proprietary institutional weights',
  },
  {
    number: '03',
    title: 'Enterprise Actuation Engine',
    subtitle: 'Autonomous Policy Enforcement & Dispatch',
    icon: Zap,
    defaultBadges: ['Autonomous Action', 'Human-in-the-Loop', 'Audit Trail'],
    coreGuarantee: 'Verifiable execution with full institutional oversight',
  },
];

export default function ArchitecturalBlueprint() {
  const [activeVerticalId, setActiveVerticalId] = useState<string>(verticals[0].id);
  const [activeLayerIdx, setActiveLayerIdx] = useState<number>(0);

  const activeVertical = verticals.find((v) => v.id === activeVerticalId) || verticals[0];

  return (
    <div className="relative rounded-2xl border border-black/[0.1] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden w-full max-w-full">
      {/* 1. Blueprint Header Bar */}
      <div className="p-3.5 sm:p-4 pb-3 border-b border-black/[0.06] bg-[#fafafa] w-full overflow-hidden">
        <div className="flex items-center justify-between gap-2 mb-2.5 w-full">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-zinc-800 font-semibold truncate">
              System Architecture Blueprint
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 bg-white border border-black/[0.08] px-2 py-0.5 rounded flex-shrink-0">
            SOVEREIGN STACK
          </span>
        </div>

        {/* 6 Sector Selection Pills (Clean native touch-scrolling) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full">
          {verticals.map((vert) => {
            const isSelected = activeVerticalId === vert.id;
            return (
              <button
                key={vert.id}
                onClick={() => {
                  setActiveVerticalId(vert.id);
                  setActiveLayerIdx(0);
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                  isSelected
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white border border-black/[0.08] text-zinc-600 hover:text-[#111111] hover:border-black/[0.16]'
                }`}
              >
                <SolutionIcon name={vert.iconName} className="w-3 h-3 flex-shrink-0" />
                <span>{vert.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Three Architecture Layers */}
      <div className="p-3.5 sm:p-4 lg:p-5 space-y-2.5 sm:space-y-3 w-full overflow-hidden">
        {baseLayers.map((layer, idx) => {
          const isSelected = activeLayerIdx === idx;
          const LayerIcon = layer.icon;
          const currentLayerData = activeVertical.layers[idx];

          return (
            <div
              key={layer.number}
              onClick={() => setActiveLayerIdx(idx)}
              className={`rounded-xl border transition-all cursor-pointer overflow-hidden w-full ${
                isSelected
                  ? 'bg-[#0d0d11] text-white border-black/[0.15] shadow-sm'
                  : 'bg-[#fafafa] hover:bg-zinc-100/90 text-zinc-900 border-black/[0.06]'
              }`}
            >
              {/* Layer Main Header Row */}
              <div className="p-3 sm:p-3.5 flex items-start justify-between gap-2.5 w-full">
                <div className="flex items-start gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold ${
                      isSelected
                        ? 'bg-white text-zinc-950 shadow-sm'
                        : 'bg-zinc-200 text-zinc-700'
                    }`}
                  >
                    {layer.number}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h4
                        className={`text-xs sm:text-sm font-bold tracking-tight truncate ${
                          isSelected ? 'text-white' : 'text-zinc-900'
                        }`}
                      >
                        {layer.title}
                      </h4>
                      <span
                        className={`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded font-medium ${
                          isSelected ? 'bg-white/15 text-zinc-300' : 'bg-zinc-200 text-zinc-600'
                        }`}
                      >
                        Layer {layer.number}
                      </span>
                    </div>

                    <p
                      className={`text-[11px] sm:text-xs leading-relaxed truncate ${
                        isSelected ? 'text-zinc-300' : 'text-zinc-500'
                      }`}
                    >
                      {currentLayerData.sectorApplication}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0 self-center">
                  <LayerIcon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-orange-400' : 'text-zinc-400'
                    }`}
                  />
                </div>
              </div>

              {/* Layer Expanded Drawer */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 sm:px-3.5 pb-3 sm:pb-3.5 pt-1 border-t border-white/10 text-xs space-y-2"
                  >
                    <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed">
                      {currentLayerData.detail}
                    </p>

                    {/* Architecture Badges */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      {currentLayerData.badges.map((b, bIdx) => (
                        <span
                          key={bIdx}
                          className="text-[9px] sm:text-[10px] font-mono text-zinc-300 bg-white/10 px-2 py-0.5 rounded border border-white/10"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* 3. Bottom Blueprint Context Link */}
        <div className="pt-2 sm:pt-3 border-t border-black/[0.06] flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2.5 w-full">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-zinc-500 min-w-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span className="truncate">SOC-2 Type II · Dedicated Private Enclave</span>
          </div>

          <Link
            href={activeVertical.routePath}
            className="inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-semibold text-zinc-900 hover:text-orange-600 transition-colors group flex-shrink-0 py-1"
          >
            <span>Explore {activeVertical.shortName} Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
