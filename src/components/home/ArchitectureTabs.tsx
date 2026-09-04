'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface TabData {
  id: 'build' | 'orchestrate' | 'govern';
  label: string;
  title: string;
  description: string;
  bullets: string[];
  codeFile: string;
  codeSnippet: string;
  terminalLog: string;
}

const tabs: TabData[] = [
  {
    id: 'build',
    label: 'Build',
    title: 'Developer-first SDKs and private fine-tuning pipelines.',
    description:
      'Train, align, and index domain data in minutes. Full API control, zero black-box lock-in, and pre-configured adapters for finance, health, and logistics.',
    bullets: [
      'Typed Node.js, Python, and Go SDKs',
      'Automated RAG embedding with hybrid vector search',
      'Air-gapped parameter-efficient fine-tuning (LoRA / QLoRA)',
      'Deterministic output schemas with strict JSON validation',
    ],
    codeFile: 'src/ai/pipeline.ts',
    codeSnippet: `import { Doxantro } from '@doxantro/sdk';

const dx = new Doxantro({ apiKey: process.env.DOX_KEY });

// Initialize private domain engine
const pipeline = await dx.pipelines.create({
  domain: 'finance',
  guardrails: ['pii_redact', 'anti_hallucination'],
  routing: 'latency_optimized',
  vpcIsolation: true,
});`,
    terminalLog: `~ % npm install @doxantro/sdk
✓ Model weights cached in VPC
✓ Pipeline initialized in 84ms`,
  },
  {
    id: 'orchestrate',
    label: 'Orchestrate',
    title: 'Dynamic multi-model routing with sub-20ms latency.',
    description:
      'Route prompts across specialized LLMs, local SLMs, and deterministic rules engines based on cost, latency, and context difficulty.',
    bullets: [
      'Intelligent prompt classifier and model selector',
      'Automatic failover across private and cloud clusters',
      'Semantic edge cache reducing token compute by 68%',
      'Global multi-region telemetry and latency SLAs',
    ],
    codeFile: 'src/ai/router.ts',
    codeSnippet: `const response = await dx.orchestrate.dispatch({
  prompt: userQuery,
  fallbackOrder: ['dox-quant-70b', 'claude-3-5-sonnet'],
  constraints: {
    maxLatencyMs: 25,
    maxTokenCost: 0.005,
    requireGrounding: true
  }
});`,
    terminalLog: `✓ Dispatched to dox-quant-70b (Edge Node 04)
✓ Latency: 13.8ms · Token Cost: -$0.0034
✓ Verification: Grounded in Verified DB`,
  },
  {
    id: 'govern',
    label: 'Govern',
    title: 'Zero-trust guardrails and real-time regulatory compliance.',
    description:
      'Ensure every token generated adheres to SOC-2, HIPAA, GDPR, and ISO standards. Sensitive PII is masked before model ingestion and verified before output.',
    bullets: [
      'Real-time PII & PHI stream redaction filter',
      'Deterministic hallucination scoring (<0.02% error rate)',
      'Immutable cryptographic audit logs for regulators',
      'Human-in-the-loop escalation queues with webhook alerts',
    ],
    codeFile: 'src/ai/governance.ts',
    codeSnippet: `const audit = await dx.guardrails.inspect({
  payload: transactionRecord,
  complianceRuleset: 'FINRA_SEC_RULE_17A',
  enforceZeroRetention: true,
  quarantineOnAnomaly: true,
});`,
    terminalLog: `✓ Redacted 4 PII entities in flight
✓ Cryptographic trace hash: #0x8f21...c89
✓ Status: PASS · 100% compliant`,
  },
];

export default function ArchitectureTabs() {
  const [activeTab, setActiveTab] = useState<TabData['id']>('build');
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="architecture" className="py-24 bg-[#f9f9f8] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Segmented Switcher */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
            Developer Infrastructure
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold tracking-[-0.025em] text-[#111111] leading-tight mb-6">
            Integrate autonomous AI into your product in minutes.
          </h2>

          {/* 3-Tab Pill Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-white border border-black/[0.12] shadow-xs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-black hover:bg-zinc-100/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Content Preview */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Narrative Details */}
          <motion.div
            key={`left-${current.id}`}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111] mb-4">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
              {current.description}
            </p>

            <div className="space-y-3 mb-8">
              {current.bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-800 font-normal">
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <Button href="/contact" size="md" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
              Explore API Specs
            </Button>
          </motion.div>

          {/* Right Column: Code Window & Terminal */}
          <motion.div
            key={`right-${current.id}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex flex-col gap-3 font-mono"
          >
            {/* Editor Code Window */}
            <div className="rounded-xl border border-black/[0.12] bg-[#ffffff] overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 border-b border-black/[0.08] text-[11px] text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                </div>
                <span>{current.codeFile}</span>
              </div>
              <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[#111111] bg-white">
                <pre className="whitespace-pre font-mono">
                  <code>{current.codeSnippet}</code>
                </pre>
              </div>
            </div>

            {/* Terminal Result Pill */}
            <div className="rounded-xl border border-black/[0.1] bg-[#1a1a1a] p-4 text-[11px] sm:text-xs text-zinc-300 leading-relaxed shadow-xs">
              <pre className="whitespace-pre-wrap font-mono">
                <span className="text-zinc-500">{current.terminalLog.split('\n')[0]}</span>
                {'\n'}
                <span className="text-emerald-400">{current.terminalLog.split('\n').slice(1).join('\n')}</span>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
