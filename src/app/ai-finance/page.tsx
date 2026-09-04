'use client';

import React from 'react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

const solutions = [
  {
    title: 'Adaptive Fraud Detection & Interception',
    description: 'Real-time graph neural network analyzing payment streams with sub-6ms latency and 99.9% precision.',
    iconName: 'ShieldAlert',
    features: [
      'Real-time transaction monitoring (18,000+ ops/sec)',
      'Behavioral graph pattern analysis',
      'Machine learning risk scoring',
      'Instant automated fraud blocking',
      'Adaptive drift learning from new exploits',
      'Regulatory compliance reporting',
    ],
    benefits: [
      'Reduce fraud losses by up to 90%',
      'Minimize false positive declines by 87%',
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
      'Improve approval conversion by 25%',
      'Reduce non-performing loans by 30%',
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
      'Increase trading yield by 15-25%',
      'Reduce institutional execution slippage by 40%',
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
    items: ['Sub-6ms P99 Inference SLA', '25,000+ Transactions / sec', 'Zero-Copy Shared Memory IPC', 'Distributed Cache Clusters'],
  },
  {
    category: 'Compliance & Privacy',
    items: ['SOC-2 Type II Certified', 'PCI-DSS Level 1 Encrypted', 'Zero-Retention Tokenized PII', 'Explainable AI Decision Audit Logs'],
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
  { value: '99.9%', label: 'Fraud Detection Precision', sublabel: 'Benchmarked across 100M+ ops' },
  { value: '<6ms', label: 'Average Response Time', sublabel: 'Sub-10ms P99 latency SLA' },
  { value: '-90%', label: 'Fraud Chargeback Losses', sublabel: 'Demonstrated in production deployments' },
  { value: '100%', label: 'SOC-2 & PCI-DSS Compliant', sublabel: 'Zero-retention private cloud' },
];

export default function AIFinancePage() {
  return (
    <SolutionPageLayout
      badge="Fintech & Banking AI"
      titlePrefix="Institutional AI for"
      titleHighlight="Finance & Banking"
      subtitle="Eliminate fraud losses, automate institutional risk underwriting, and execute algorithmic strategies with sub-6ms latency and deterministic accuracy."
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
