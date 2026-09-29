'use client';

import React from 'react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

const solutions = [
  {
    title: 'Autonomous Smart Grid Load Balancing & Peak Shaving',
    description: 'Predictive neural models that forecast multi-regional electrical load and dynamically orchestrate peaker plants and battery reserves.',
    iconName: 'Zap',
    features: [
      'Sub-second grid frequency and phase angle stabilization',
      'Hyper-local commercial and residential load forecasting',
      'Automated virtual power plant (VPP) battery dispatch',
      'Peak-load demand response trigger automation',
      'SCADA / EMS protocol native integration (DNP3, Modbus, IEC 61850)',
      'Substation transformer overload early warning',
    ],
    benefits: [
      'Model grid transmission efficiency scenarios',
      'Support peak-load surge planning',
      'Prevent cascading transformer blackouts and grid faults',
      'Lower wholesale energy procurement expenditure',
    ],
  },
  {
    title: 'Renewable Generation Forecasting (Solar & Wind)',
    description: 'Satellite atmospheric sensing and numerical weather prediction models forecasting renewable energy generation 48 hours ahead.',
    iconName: 'Sparkles',
    features: [
      'Multi-spectral cloud vector and solar irradiance modeling',
      'Turbine-level wind wake and wind speed forecasting',
      'BTM (Behind-The-Meter) distributed rooftop solar indexing',
      'Dynamic curtailment prevention algorithms',
      'Energy market day-ahead and real-time bidding strategies',
      'Historical generation asset degradation analytics',
    ],
    benefits: [
      'Support renewable day-ahead forecasting',
      'Model renewable curtailment scenarios',
      'Maximize clean energy market arbitrage revenue',
      'Accelerate zero-carbon grid integration mandates',
    ],
  },
  {
    title: 'Predictive Energy Asset Maintenance & Fault Detection',
    description: 'Acoustic, thermal, and vibration sensor analytics that detect mechanical failure in wind turbines, solar inverters, and power lines.',
    iconName: 'Cpu',
    features: [
      'Wind turbine gearbox vibration anomaly detection',
      'Solar inverter thermal runaway and hot-spot detection',
      'High-voltage transmission line vegetation encroachment vision',
      'Transformer dielectric breakdown and gas analysis (DGA)',
      'Automated maintenance work-order generation',
      'Digital twin asset lifecycle simulation',
    ],
    benefits: [
      'Prevent catastrophic asset failures up to 30 days in advance',
      'Identify utility asset maintenance signals',
      'Support field inspection prioritization',
      'Model equipment health and maintenance windows',
    ],
  },
];

const architectureSpecs = [
  {
    category: 'Forecasting & Grid Models',
    items: ['Time-Series Temporal Transformers', 'Numerical Weather Prediction (NWP) Fusion', 'SCADA Real-Time SCADA Connectors', 'Reinforcement Learning VPP Dispatch'],
  },
  {
    category: 'Telemetry & Protocols',
    items: ['IEC 61850 & DNP3 Protocol Support', 'Sub-Second Synchrophasor PMU Ingestion', 'Edge Substation Gateway Deployments', 'Air-Gapped Utility Grid Security'],
  },
  {
    category: 'Reliability & Scale',
    items: ['0 Verified Utility Deployments', 'Grid Network Modeling Concept', 'NERC CIP Alignment Roadmap', 'Automated Failover Design'],
  },
];

const useCases = [
  {
    title: 'National & Regional Power Utilities',
    desc: 'Smart grid load balancing, automated peak shaving, and high-voltage transmission fault prediction.',
  },
  {
    title: 'Independent Renewable Power Producers (IPPs)',
    desc: 'Solar and wind farm generation forecasting, battery storage arbitrage, and curtailment mitigation.',
  },
  {
    title: 'Heavy Industrial & Commercial Campuses',
    desc: 'Microgrid optimization, on-site solar/storage orchestration, and demand charge tariff reduction.',
  },
];

const metrics = [
  { value: '0', label: 'Verified Efficiency Gains', sublabel: 'Pre-launch baseline' },
  { value: '0', label: 'Verified Surge Reductions', sublabel: 'Awaiting utility validation' },
  { value: '48 Hrs', label: 'Renewable Forecast Horizon', sublabel: 'Solar & wind generation models' },
  { value: '0', label: 'Published Stability Benchmarks', sublabel: 'Awaiting utility validation' },
];

export default function AIEnergyPage() {
  return (
    <SolutionPageLayout
      badge="Energy & Smart Grid AI"
      titlePrefix="Predictive AI for"
      titleHighlight="Smart Grids & Clean Energy"
      subtitle="Balance multi-gigawatt power grids, forecast intermittent solar and wind generation, and prevent catastrophic asset failures with real-time neural models."
      iconName="Zap"
      metrics={metrics}
      solutions={solutions}
      architectureSpecs={architectureSpecs}
      useCases={useCases}
      ctaTitle="Ready to Modernize Your Energy Grid with AI?"
      ctaSubtitle="Connect with our smart grid AI engineers and power systems directors to plan a microgrid or utility pilot."
    />
  );
}
