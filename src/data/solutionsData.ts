export interface SolutionItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  iconName: 'BadgeDollarSign' | 'Activity' | 'Sprout' | 'Boxes' | 'ShieldAlert' | 'Zap';
  badge: string;
  stat: string;
  statLabel: string;
  features: string[];
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'finance',
    title: 'AI for Finance & Banking',
    shortTitle: 'Finance',
    description: 'Real-time transaction surveillance, adaptive fraud prevention, and predictive credit risk modeling.',
    href: '/ai-finance',
    iconName: 'BadgeDollarSign',
    badge: 'Popular',
    stat: '99.9%',
    statLabel: 'Fraud Detection Precision',
    features: ['Fraud Detection & Prevention', 'Credit Risk Scoring', 'Algorithmic Trading Strategies'],
  },
  {
    id: 'healthcare',
    title: 'AI for Healthcare & Diagnostics',
    shortTitle: 'Healthcare',
    description: 'High-precision medical imaging triage, computer vision diagnostics, and automated clinical reports.',
    href: '/ai-healthcare',
    iconName: 'Activity',
    badge: 'Clinical Grade',
    stat: '85%',
    statLabel: 'Diagnostic Accuracy Gain',
    features: ['Diagnostic Support AI', 'Medical Image Segmentation', 'Patient Monitoring & Triage'],
  },
  {
    id: 'agriculture',
    title: 'AI for Precision Agriculture',
    shortTitle: 'Agriculture',
    description: 'Drone and multispectral satellite imagery analysis for crop disease detection and automated yield forecasting.',
    href: '/ai-agriculture',
    iconName: 'Sprout',
    badge: 'Eco-Tech',
    stat: '30%',
    statLabel: 'Average Yield Increase',
    features: ['Satellite Crop Surveillance', 'Pest & Blight Detection', 'Water & Fertilizer Optimization'],
  },
  {
    id: 'supply-chain',
    title: 'AI for Supply Chain & Logistics',
    shortTitle: 'Supply Chain',
    description: 'Dynamic route optimization, multi-echelon inventory forecasting, and real-time shipment risk intelligence.',
    href: '/ai-supply-chain',
    iconName: 'Boxes',
    badge: 'Enterprise',
    stat: '40%',
    statLabel: 'Logistics Cost Reduction',
    features: ['Real-time Route Optimization', 'Demand Forecasting', 'Supplier Risk Analytics'],
  },
  {
    id: 'security',
    title: 'AI for Cybersecurity & Defense',
    shortTitle: 'Security',
    description: 'Autonomous threat detection, zero-day exploit recognition, and real-time behavioral security orchestration.',
    href: '/ai-security',
    iconName: 'ShieldAlert',
    badge: 'Zero-Trust',
    stat: '<1s',
    statLabel: 'Threat Incident Response',
    features: ['Zero-Day Anomaly Detection', 'Network Behavioral Analysis', 'Automated Threat Mitigation'],
  },
  {
    id: 'energy',
    title: 'AI for Smart Grid & Clean Energy',
    shortTitle: 'Energy',
    description: 'Autonomous grid load balancing, renewable energy generation forecasting, and predictive equipment maintenance.',
    href: '/ai-energy',
    iconName: 'Zap',
    badge: 'Next-Gen',
    stat: '25%',
    statLabel: 'Energy Efficiency Gain',
    features: ['Grid Load Optimization', 'Renewable Forecasting', 'Predictive Asset Maintenance'],
  },
];
