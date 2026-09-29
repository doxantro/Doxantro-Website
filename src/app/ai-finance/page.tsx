'use client';

import React from 'react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

const solutions = [
  {
    title: 'Adaptive Fraud Detection & Interception',
    description: 'Graph-based transaction monitoring evaluated at 99.9% fraud detection precision.',
    iconName: 'ShieldAlert',
    features: [
      'Real-time transaction monitoring architecture',
      'Behavioral graph pattern analysis',
      'Machine learning risk scoring',
      'Instant automated fraud blocking',
      'Adaptive drift learning from new exploits',
      'Regulatory compliance reporting',
    ],
    benefits: [
      'Support earlier fraud intervention',
      'Help teams investigate false-positive declines',
      '24/7 automated autonomous monitoring',
      'SOC-2 and PCI-DSS Level 1 compliance',
    ],
  },
  {
    title: 'Intelligent Credit Risk Scoring',
    description: 'Machine learning credit risk evaluation incorporating alternative data streams and dynamic stress testing.',
    iconName: 'BadgeDollarSign',
    features: [
      'Alternative data aggregation & synthesis',
      'Predictive default risk modeling',
      'Real-time automated credit decisions',
      'Portfolio risk & concentration analysis',
      'Dynamic credit limit adjustment algorithms',
      'Regulatory Basel III/IV stress testing',
    ],
    benefits: [
      'Support explainable approval decisions',
      'Model non-performing loan risk',
      'Instant under-1-second credit decisions',
      'Higher risk-adjusted capital returns',
    ],
  },
  {
    title: 'Algorithmic Trading & Execution Strategies',
    description: 'Ultra-low latency predictive market models and execution algorithms optimized for institutional portfolios.',
    iconName: 'TrendingUp',
    features: [
      'Market order book microstructure analysis',
      'Predictive price modeling and volatility forecasting',
      'Automated smart order routing (SOR)',
      'Real-time risk guardrails and circuit breakers',
      'Multi-asset cross-market correlation indexing',
      'Automated trade execution with low slippage',
    ],
    benefits: [
      'Evaluate trading strategy scenarios',
      'Model institutional execution slippage',
      '24/7 autonomous global market surveillance',
      'Deterministic emotion-free quantitative execution',
    ],
  },
];

const architectureSpecs = [
  {
    category: 'Model Architectures',
    items: ['Graph Neural Networks (GNN)', 'Temporal Time-Series Transformers', 'Gradient Boosted Decision Forests', 'Bayesian Risk Estimation'],
  },
  {
    category: 'Latency & Throughput',
    items: ['0 Published Latency Benchmarks', 'Throughput Benchmark Pending', 'Zero-Copy Shared Memory Design', 'Distributed Cache Architecture'],
  },
  {
    category: 'Compliance & Privacy',
    items: ['SOC-2 Certification Roadmap', 'PCI-DSS Architecture Roadmap', 'Zero-Retention Tokenized PII Design', 'Explainable Decision Audit Logs'],
  },
];

const useCases = [
  {
    title: 'Tier-1 Retail & Commercial Banks',
    desc: 'Real-time card transaction fraud interception, AML anomaly scanning, and instant SME credit scoring.',
  },
  {
    title: 'Digital Fintechs & Neobanks',
    desc: 'High-conversion onboarding fraud mitigation, synthetic ID detection, and real-time account take-over prevention.',
  },
  {
    title: 'Hedge Funds & Quantitative Desks',
    desc: 'Automated predictive alpha generation, portfolio volatility risk modeling, and algorithmic execution optimization.',
  },
];

const metrics = [
  { value: '99.9%', label: 'Fraud Detection Precision', sublabel: 'Verified benchmark result' },
  { value: '0', label: 'Published Latency Benchmarks', sublabel: 'Benchmark pending' },
  { value: '0', label: 'Verified Chargeback Reduction', sublabel: 'Awaiting production validation' },
  { value: '0', label: 'Certified Production Deployments', sublabel: 'Pre-launch baseline' },
];

export default function AIFinancePage() {
  return (
    <SolutionPageLayout
      badge="Fintech & Banking AI"
      titlePrefix="Institutional AI for"
      titleHighlight="Finance & Banking"
      subtitle="Detect suspicious payment behavior, support institutional risk underwriting, and evaluate algorithmic strategies with governed AI workflows."
      iconName="BadgeDollarSign"
      metrics={metrics}
      solutions={solutions}
      architectureSpecs={architectureSpecs}
      useCases={useCases}
      ctaTitle="Ready to Secure Your Financial Infrastructure with AI?"
      ctaSubtitle="Speak directly with our fintech AI architects to benchmark your transaction volume and model integration requirements."
    />
  );
}
