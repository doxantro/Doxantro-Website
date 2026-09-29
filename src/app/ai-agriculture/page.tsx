'use client';

import React from 'react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

const solutions = [
  {
    title: 'Satellite NDVI & Drone Crop Health Monitoring',
    description: 'Multispectral satellite analytics combined with autonomous drone computer vision to detect crop stress and disease.',
    iconName: 'Sprout',
    features: [
      'Sub-meter multispectral satellite vegetation indexing (NDVI/EVI)',
      'Automated fungal blight and pest infestation detection',
      'Drone thermal and RGB orthomosaic mapping',
      'Canopy chlorophyll and nitrogen status estimation',
      'Historical field anomaly trend tracking',
      'Automated field boundary and crop type classification',
    ],
    benefits: [
      'Detect crop disease up to 14 days before visible damage',
      'Flag preventable crop blights for earlier human review',
      'Daily autonomous indexing across thousands of arable acres',
      'Seamless export to tractor guidance & GIS software',
    ],
  },
  {
    title: 'Precision Micro-Irrigation & Yield Optimization',
    description: 'IoT soil sensor fusion and predictive weather microclimate modeling to deliver exact resource recommendations.',
    iconName: 'Cpu',
    features: [
      'Soil moisture, salinity, and temperature sensor integration',
      'Hyper-local evapotranspiration (ET) forecasting',
      'Dynamic variable rate fertilizer prescriptions (VRA)',
      'Automated drip and pivot irrigation schedules',
      'End-of-season harvest yield forecasting models',
      'Carbon sequestration and soil health metrics',
    ],
    benefits: [
      'Support more informed crop-yield planning',
      'Model precision irrigation strategies',
      'Support targeted fertilizer recommendations',
      'Comply with agricultural environmental sustainability standards',
    ],
  },
  {
    title: 'Automated Harvest & Agribusiness Supply Logistics',
    description: 'Predictive commodity harvesting schedules, grain elevator logistics, and regional market price optimization.',
    iconName: 'Boxes',
    features: [
      'Optimal harvest window prediction based on crop maturity',
      'Fleet routing for combines, grain carts, and haulers',
      'Storage silo aeration and moisture management AI',
      'Regional grain price forecasting and hedge optimization',
      'Supply chain provenance and organic tracking ledger',
      'Integration with ag-retailer ERPs and cooperatives',
    ],
    benefits: [
      'Model post-harvest spoilage and drying risk',
      'Optimize harvest equipment utilization and fuel costs',
      'Secure higher commodity sales pricing at peak demand',
      'End-to-end farm-to-table provenance traceability',
    ],
  },
];

const architectureSpecs = [
  {
    category: 'Sensory & Vision Models',
    items: ['Multispectral Orthomosaic CNNs', 'NDVI / NDRE Spectral Indices', 'IoT Time-Series Soil Sensor Fusion', 'Hyper-Local Weather Forecast Models'],
  },
  {
    category: 'Edge & Offline Capabilities',
    items: ['Offline Field Edge Processing (Jetson/TPU)', 'Low-Bandwidth Satellite Uplink', 'ISOBUS Tractor Telematics', 'GeoJSON & Shapefile GIS Exports'],
  },
  {
    category: 'Scale & Coverage',
    items: ['0 Verified Field Deployments', 'Sub-Meter Resolution Mapping', 'Automated Orbit Ingestion Concept', 'Multi-Crop Model Roadmap'],
  },
];

const useCases = [
  {
    title: 'Large-Scale Farming Cooperatives & Growers',
    desc: 'Automated daily field stress mapping, precision nitrogen dosing, and maximum yield harvest optimization.',
  },
  {
    title: 'Agribusiness & Chemical Enterprises',
    desc: 'Targeted pesticide/fertilizer prescription engines and automated efficacy benchmarking.',
  },
  {
    title: 'Agricultural Insurance & Commodity Funds',
    desc: 'Accurate regional yield forecasting, drought index claim verification, and acreage audits.',
  },
];

const metrics = [
  { value: '0', label: 'Verified Field Deployments', sublabel: 'Pre-launch baseline' },
  { value: '0', label: 'Published Yield Benchmarks', sublabel: 'Awaiting field validation' },
  { value: '0', label: 'Verified Resource Savings', sublabel: 'Awaiting field validation' },
  { value: '14 Days', label: 'Early Disease Detection', sublabel: 'Before visible canopy leaf decay' },
];

export default function AIAgriculturePage() {
  return (
    <SolutionPageLayout
      badge="AgTech & Precision AI"
      titlePrefix="Precision AI for"
      titleHighlight="Sustainable Agriculture"
      subtitle="Maximize crop yields, conserve water and fertilizer, and detect plant diseases early using satellite NDVI imagery and IoT sensor fusion."
      iconName="Sprout"
      metrics={metrics}
      solutions={solutions}
      architectureSpecs={architectureSpecs}
      useCases={useCases}
      ctaTitle="Ready to Optimize Your Agricultural Acreage with AI?"
      ctaSubtitle="Connect with our precision agronomy AI specialists to plan a drone, satellite, or IoT pilot for your growing season."
    />
  );
}
