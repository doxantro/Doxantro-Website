'use client';

import React from 'react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

const solutions = [
  {
    title: 'Dynamic Multi-Vector Route & Fleet Optimization',
    description: 'Real-time heuristics and reinforcement learning models that dynamically re-route multi-modal logistics across roads, rail, and sea.',
    iconName: 'Boxes',
    features: [
      'Real-time traffic, weather, and port congestion rerouting',
      'Multi-drop dispatch and load balancing algorithms',
      'EV fleet charging schedule & battery optimization',
      'Driver hours-of-service (HOS) compliant routing',
      'Dynamic freight carrier rate bidding integration',
      'Live GPS telemetry tracking with sub-second recalculation',
    ],
    benefits: [
      'Reduce total logistics and fuel costs by up to 35%',
      'Improve on-time freight delivery arrival rates to 99%',
      'Cut fleet carbon emissions and empty deadhead miles by 30%',
      'Automate 80% of dispatch decision overhead',
    ],
  },
  {
    title: 'Multi-Echelon Demand Forecasting & Stocking',
    description: 'Deep time-series transformers predicting SKU-level demand spikes, seasonal patterns, and regional consumption shifts.',
    iconName: 'TrendingUp',
    features: [
      'Hierarchical SKU-level demand forecasting',
      'External signal ingestion (weather, inflation, holidays, promotions)',
      'Automated safety stock & dynamic re-order triggers',
      'Warehouse slotting and cross-docking optimization',
      'Supplier lead-time volatility and risk scoring',
      'ERP integration (SAP, Oracle, NetSuite, Blue Yonder)',
    ],
    benefits: [
      'Reduce dead-inventory carrying costs by 45%',
      'Eliminate stockout lost-sales revenue by 85%',
      'Accurate 90-day forward demand projections',
      'Automated replenishment purchase order workflows',
    ],
  },
  {
    title: 'Global Supplier Risk & Disruption Early Warning',
    description: 'Natural language processing and geopolitical graph analytics that scan global news, ports, and weather for supply vulnerabilities.',
    iconName: 'ShieldAlert',
    features: [
      'Multi-tier supply chain visibility and dependency mapping',
      'Real-time port strike, canal, and maritime bottleneck alerts',
      'Supplier financial distress and ESG compliance scoring',
      'Automated dual-sourcing contingency recommendations',
      'Custom risk threshold trigger alerts for procurement teams',
      'Scenario simulation and supply network stress testing',
    ],
    benefits: [
      'Identify supply bottlenecks 10-14 days before disruption',
      'Mitigate single-source failure vulnerabilities',
      'Protect brand reputation and SLA contract compliance',
      'Automated alternative supplier onboarding triggers',
    ],
  },
];

const architectureSpecs = [
  {
    category: 'Optimization & ML Models',
    items: ['Dynamic Route Heuristics (VRP/OR-Tools)', 'Hierarchical Time-Series Transformers', 'Graph Supply Dependency Networks', 'Reinforcement Learning Dispatch'],
  },
  {
    category: 'Telemetry & Ingestion',
    items: ['Sub-Second AIS / GPS Tracking Streams', 'EDI / ERP Direct Connectors', 'Real-Time Weather & Congestion Feeds', 'Sub-10ms Recalculation Engine'],
  },
  {
    category: 'Enterprise Scale',
    items: ['Millions of SKUs Handled Concurrently', 'Global Multi-Modal Network Mapping', 'SOC-2 Private Vaults', '99.95% Availability SLA'],
  },
];

const useCases = [
  {
    title: 'Global Freight & 3PL Logistics Providers',
    desc: 'Dynamic freight dispatch, container turnaround acceleration, and multi-modal route optimization.',
  },
  {
    title: 'Omnichannel Retail & E-Commerce Giants',
    desc: 'Micro-fulfillment demand forecasting, same-day delivery routing, and inventory dead-stock elimination.',
  },
  {
    title: 'Automotive & Industrial Manufacturers',
    desc: 'Just-in-time parts delivery orchestration, multi-tier supplier vulnerability early warning, and raw material buffer sizing.',
  },
];

const metrics = [
  { value: '-35%', label: 'Logistics Operating Cost', sublabel: 'Demonstrated in production deployments' },
  { value: '+50%', label: 'On-Time Freight Deliveries', sublabel: 'Dynamic real-time rerouting' },
  { value: '-45%', label: 'Dead-Inventory Waste', sublabel: 'Multi-echelon demand forecasting' },
  { value: '<10ms', label: 'Route Recalculation Speed', sublabel: 'Low-latency heuristic engine' },
];

export default function AISupplyChainPage() {
  return (
    <SolutionPageLayout
      badge="Logistics & Supply Chain AI"
      titlePrefix="Autonomous AI for"
      titleHighlight="Supply Chain & Logistics"
      subtitle="Eliminate shipping bottlenecks, slash dead-inventory costs, and predict global supply disruptions with real-time optimization models."
      iconName="Boxes"
      metrics={metrics}
      solutions={solutions}
      architectureSpecs={architectureSpecs}
      useCases={useCases}
      ctaTitle="Ready to Automate Your Supply Chain Network with AI?"
      ctaSubtitle="Speak with our operations research directors and logistics architects to evaluate your freight and inventory pipelines."
    />
  );
}
