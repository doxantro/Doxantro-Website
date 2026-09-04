'use client';

import React from 'react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

const solutions = [
  {
    title: 'Clinical Diagnostic Support & DICOM Triage',
    description: 'Computer vision pipelines that pre-segment radiological imaging (CT, MRI, X-Ray) and flag emergency anomalies.',
    iconName: 'Activity',
    features: [
      'Multi-slice CT/MRI 3D image segmentation',
      'Automated emergency triage prioritization',
      'Confidence heatmap generation for radiologists',
      'Natural language structured report drafting',
      'Zero-retention HIPAA-compliant PACS integration',
      'Continuous algorithmic validation against clinical datasets',
    ],
    benefits: [
      'Improve preliminary diagnostic accuracy by 85%',
      'Reduce emergency radiology backlog wait times by 60%',
      '24/7 autonomous triage support for on-call clinicians',
      'Strict HIPAA, GDPR, and ISO-13485 alignment',
    ],
  },
  {
    title: 'Predictive Patient Monitoring & ICU Deterioration',
    description: 'Time-series machine learning models that detect hemodynamic instability and sepsis onset hours in advance.',
    iconName: 'Cpu',
    features: [
      'Real-time vital sign telemetry stream indexing',
      'Early sepsis and respiratory distress prediction',
      'Automated severity index scoring (SOFA/APACHE)',
      'Physician alarm fatigue reduction filters',
      'Integration with major EHR systems (Epic, Cerner)',
      'Auditable clinician decision support logs',
    ],
    benefits: [
      'Predict patient deterioration 4-6 hours earlier',
      'Reduce ICU false alarm noise by up to 70%',
      'Lower post-operative complication rates',
      'Improve clinical throughput and bedside efficiency',
    ],
  },
  {
    title: 'Accelerated Drug Discovery & Molecular Screening',
    description: 'Deep neural graph models for molecular binding affinity prediction, toxicity screening, and candidate optimization.',
    iconName: 'Sparkles',
    features: [
      'Target-ligand interaction modeling',
      'ADMET in-silico toxicity profiling',
      'De-novo molecular generation pipelines',
      'Protein folding & conformational analysis',
      'Chemical synthesis pathway prediction',
      'High-throughput screening cluster acceleration',
    ],
    benefits: [
      'Shorten early-stage candidate discovery from years to months',
      'Reduce wet-lab assay screening expenditure by 60%',
      'Higher clinical trial phase-1 transition success',
      'Proprietary IP generated under private client vaults',
    ],
  },
];

const architectureSpecs = [
  {
    category: 'Model Architectures',
    items: ['Vision Transformers (ViT)', '3D U-Net Segmentation', 'Physiological Time-Series LSTM', 'Molecular Graph Convolutions'],
  },
  {
    category: 'Clinical Standards',
    items: ['DICOM 3.0 Native Parsing', 'HL7 FHIR Interoperability', 'EHR Direct API Connectors', 'Sub-Second Image Triage SLA'],
  },
  {
    category: 'Privacy & Governance',
    items: ['HIPAA BAA Certified Infrastructure', 'GDPR Health Data Compliance', 'Air-Gapped Hospital On-Premise', 'Clinician-in-the-Loop Safeguards'],
  },
];

const useCases = [
  {
    title: 'Hospital Networks & Emergency Centers',
    desc: 'Autonomous emergency scan triage, ICU hemodynamic alert forecasting, and clinician workflow optimization.',
  },
  {
    title: 'Diagnostic Imaging & Radiology Groups',
    desc: 'Automated lesion segmentation, pre-drafted structured reports, and radiologist productivity amplification.',
  },
  {
    title: 'Biotech & Pharmaceutical R&D',
    desc: 'In-silico candidate screening, toxicity profiling, and molecular optimization clusters.',
  },
];

const metrics = [
  { value: '85%', label: 'Diagnostic Accuracy Gain', sublabel: 'Benchmarked across clinical datasets' },
  { value: '60%', label: 'Reduction in Triage Wait Time', sublabel: 'Measured in emergency radiology' },
  { value: '99.4%', label: 'Anomaly Detection AUC', sublabel: 'Multi-slice CT / MRI segmentation' },
  { value: '100%', label: 'HIPAA & FHIR Compliant', sublabel: 'Air-gapped on-premise deployment' },
];

export default function AIHealthcarePage() {
  return (
    <SolutionPageLayout
      badge="Clinical & Health AI"
      titlePrefix="Clinical-Grade AI for"
      titleHighlight="Healthcare & Diagnostics"
      subtitle="Transform medical imaging triage, forecast patient deterioration, and accelerate drug discovery with HIPAA-compliant, sub-second neural systems."
      iconName="Activity"
      metrics={metrics}
      solutions={solutions}
      architectureSpecs={architectureSpecs}
      useCases={useCases}
      ctaTitle="Ready to Upgrade Your Hospital or Clinical AI Infrastructure?"
      ctaSubtitle="Speak with our healthcare AI specialists and medical informatics directors to plan a clinical trial or pilot deployment."
    />
  );
}
