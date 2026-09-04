'use client';

import React from 'react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

const solutions = [
  {
    title: 'Autonomous Zero-Day & Advanced Persistent Threat (APT) Defense',
    description: 'Kernel-level behavioral anomaly sensing that catches and isolates stealthy cyber threats within sub-second thresholds.',
    iconName: 'ShieldAlert',
    features: [
      'eBPF kernel-level runtime anomaly monitoring',
      'Zero-day payload heuristic inspection',
      'Lateral movement & privilege escalation interception',
      'Automated micro-segmentation quarantine triggers',
      'MITRE ATT&CK framework mapping & real-time telemetry',
      'Air-gapped sovereign deployment support',
    ],
    benefits: [
      'Contain critical exploits in under 1 second',
      '99.99% malicious threat neutralization precision',
      'Drastically reduce SecOps alert fatigue by 92%',
      'Zero unauthorized lateral data exfiltration',
    ],
  },
  {
    title: 'User & Entity Behavioral Analytics (UEBA)',
    description: 'Graph neural networks that baseline employee and credential behaviors to spot compromised accounts and insider risks.',
    iconName: 'ShieldCheck',
    features: [
      'Continuous authentication and identity graph scoring',
      'Credential harvesting and token theft anomaly detection',
      'Abnormal data access and off-hours exfiltration alerts',
      'Privileged account session surveillance',
      'Automated step-up MFA and token revocation triggers',
      'Compliance and forensic audit trail generation',
    ],
    benefits: [
      'Stop account take-overs (ATO) before data access',
      'Detect insider threats without privacy overreach',
      'Automate 90% of routine IAM security triage',
      'Ensure SOC-2, ISO 27001, and NIST 800-53 compliance',
    ],
  },
  {
    title: 'AI-Powered Security Orchestration & Auto-Remediation (SOAR)',
    description: 'Automated incident playbooks that execute complex containment actions across firewalls, IAM, and cloud enclaves instantly.',
    iconName: 'Cpu',
    features: [
      'Natural language incident synthesis and timeline reconstruction',
      'Automated firewall rule updates and malicious IP blocking',
      'Compromised endpoint isolate and memory snapshot extraction',
      'Integration with CrowdStrike, SentinelOne, Splunk, and Palo Alto',
      'Automated patch generation and vulnerability prioritization',
      'Zero-human-delay automated remediation workflows',
    ],
    benefits: [
      'Reduce Mean Time to Detect (MTTD) from days to milliseconds',
      'Reduce Mean Time to Respond (MTTR) by 95%',
      'Eliminate manual repetitive playbook engineering',
      '24/7 autonomous SOC operations with human auditability',
    ],
  },
];

const architectureSpecs = [
  {
    category: 'Detection & Kernel Models',
    items: ['eBPF Linux Kernel Sensors', 'Graph Neural Authorization Networks', 'Dynamic Payload Heuristic Sandbox', 'Sub-Millisecond Threat Isolation'],
  },
  {
    category: 'Integrations & SIEM',
    items: ['Native Splunk / Sentinel Connectors', 'CrowdStrike / SentinelOne Hooks', 'Kubernetes Runtime Enclave Defense', 'Air-Gapped Sovereign Mesh'],
  },
  {
    category: 'Compliance & Governance',
    items: ['SOC-2 Type II Certified', 'NIST 800-53 & ISO 27001 Ready', 'FedRAMP High Compatible Architecture', 'Zero-Retention Immutable Audit Vault'],
  },
];

const useCases = [
  {
    title: 'Critical National Infrastructure & Defense',
    desc: 'Air-gapped sovereign threat monitoring, SCADA defense, and state-sponsored zero-day exploit isolation.',
  },
  {
    title: 'Financial Institutions & Digital Payment Gateways',
    desc: 'Real-time API credential harvesting protection, insider risk detection, and regulatory compliance logging.',
  },
  {
    title: 'Enterprise Sovereign Cloud & SaaS Providers',
    desc: 'Multi-tenant container isolation, automated runtime breach containment, and IAM policy enforcement.',
  },
];

const metrics = [
  { value: '<1s', label: 'Autonomous Threat Containment', sublabel: 'Sub-second breach mitigation' },
  { value: '99.99%', label: 'Exploit Neutralization Precision', sublabel: 'Benchmarked against zero-day CVEs' },
  { value: '-92%', label: 'SecOps Alert Fatigue', sublabel: 'Noise suppression filtering' },
  { value: 'Zero', label: 'Data Exfiltration Breaches', sublabel: 'Active production track record' },
];

export default function AISecurityPage() {
  return (
    <SolutionPageLayout
      badge="Cybersecurity & Defense AI"
      titlePrefix="Autonomous AI for"
      titleHighlight="Cybersecurity & Defense"
      subtitle="Detect and neutralize zero-day exploits, insider threats, and lateral network attacks with sub-second kernel-level autonomous defense models."
      iconName="ShieldAlert"
      metrics={metrics}
      solutions={solutions}
      architectureSpecs={architectureSpecs}
      useCases={useCases}
      ctaTitle="Ready to Protect Your Infrastructure with Autonomous AI Defense?"
      ctaSubtitle="Consult with our senior cybersecurity directors and zero-trust architects to schedule a threat vector simulation."
    />
  );
}
