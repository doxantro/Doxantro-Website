'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Copy, Check } from 'lucide-react';
import Button from '../ui/Button';

interface SDKOption {
  id: string;
  name: string;
  filename: string;
  installCmd: string;
  installOutput: string;
  code: string;
  features: string[];
}

const sdks: SDKOption[] = [
  {
    id: 'node',
    name: 'Node.js',
    filename: 'api/inference/route.ts',
    installCmd: 'npm install @doxantro/sdk',
    installOutput: '✓ Compiled in 88ms · zero native dependencies',
    features: [
      'Type-safe async client with full TypeScript definitions',
      'Native streaming support with Server-Sent Events (SSE)',
      'Deterministic schema parsing via Zod integration',
      'Automatic exponential backoff and circuit breaker',
    ],
    code: `import { Doxantro } from '@doxantro/sdk';

const dx = new Doxantro({ key: process.env.DOXANTRO_KEY });

const result = await dx.inference.stream({
  domain:     'finance',
  prompt:     'Calculate real-time portfolio VaR under 5% stress shock',
  guardrails: ['pii_mask', 'anti_hallucination'],
  maxLatency: 20,
});`,
  },
  {
    id: 'python',
    name: 'Python',
    filename: 'services/inference_worker.py',
    installCmd: 'pip install doxantro',
    installOutput: '✓ Successfully installed doxantro-3.4.0',
    features: [
      'AsyncIO and sync clients compatible with FastAPI / Celery',
      'Pydantic v2 model validation for structured outputs',
      'NumPy / PyTorch zero-copy tensor serialization',
      'Automated LangChain and LlamaIndex bridge adapters',
    ],
    code: `from doxantro import DoxantroClient

client = DoxantroClient(api_key=os.environ["DOXANTRO_KEY"])

response = await client.orchestrate.dispatch(
    domain="healthcare",
    patient_query=query_text,
    hipaa_compliant=True,
    routing="latency_optimized"
)`,
  },
  {
    id: 'go',
    name: 'Go',
    filename: 'cmd/worker/main.go',
    installCmd: 'go get github.com/doxantro/sdk-go',
    installOutput: '✓ go: added github.com/doxantro/sdk-go v1.2.0',
    features: [
      'Zero-allocation memory pooling for high-throughput concurrency',
      'Native context cancellation and timeout management',
      'gRPC and HTTP/2 multiplexed transport',
      'Thread-safe connection pooling across cluster nodes',
    ],
    code: `package main

import (
    "context"
    "github.com/doxantro/sdk-go"
)

client := doxantro.NewClient(doxantro.WithAPIKey(apiKey))
res, err := client.Inference.Execute(ctx, &doxantro.Request{
    Domain:     "supply_chain",
    Payload:    telemetryBytes,
    VPCIsolated: true,
})`,
  },
  {
    id: 'rest',
    name: 'REST API',
    filename: 'curl -X POST /v1/orchestrate',
    installCmd: 'curl -I https://api.doxantro.com/v1/health',
    installOutput: 'HTTP/2 200 OK · latency: 4.1ms · region: us-east',
    features: [
      'OpenAPI 3.1 specifications with complete JSON schemas',
      'HMAC-SHA256 request signature verification',
      'Global multi-region Anycast IP edge routing',
      'Webhooks with automated retry and signature headers',
    ],
    code: `curl -X POST https://api.doxantro.com/v1/orchestrate/dispatch \\
  -H "Authorization: Bearer $DOXANTRO_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "domain": "energy",
    "prompt": "Optimize turbine power curve for 14m/s wind gust",
    "max_latency_ms": 15,
    "zero_retention": true
  }'`,
  },
];

export default function SDKSandbox() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const current = sdks[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="py-24 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-3">
            Integrate in under a minute
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold tracking-[-0.025em] text-[#111111] leading-tight mb-4">
            Developer-first SDKs for every production stack.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Build resilient AI workflows with type-safe clients for model routing, private RAG pipelines, and compliance verification.
          </p>
        </div>

        {/* Tab Selection Bar with Horizontal Scroll */}
        <div className="flex justify-center overflow-x-auto py-1 mb-10">
          <div className="inline-flex p-1 rounded-xl bg-zinc-100 border border-black/[0.08]">
            {sdks.map((sdk, idx) => (
              <button
                key={sdk.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                {sdk.name}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] mb-4">
              {current.name} Client Architecture
            </h3>
            <div className="space-y-3 mb-8">
              {current.features.map((feat) => (
                <div key={feat} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
            <Button href="/contact" size="md" variant="secondary">
              Read API Documentation
            </Button>
          </div>

          {/* Right Column: Code Window & Terminal */}
          <div className="lg:col-span-6 flex flex-col gap-3 font-mono">
            {/* Code Window */}
            <div className="rounded-xl border border-black/[0.12] bg-[#ffffff] overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 border-b border-black/[0.08] text-[11px] text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <span className="ml-2 text-zinc-600">{current.filename}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[10px] text-zinc-600 hover:text-black cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[#111111] bg-white">
                <pre className="whitespace-pre font-mono">
                  <code>{current.code}</code>
                </pre>
              </div>
            </div>

            {/* Terminal Window */}
            <div className="rounded-xl border border-black/[0.1] bg-[#1a1a1a] p-3.5 text-[11px] sm:text-xs text-zinc-300 shadow-xs">
              <pre className="whitespace-pre-wrap font-mono">
                <span className="text-zinc-500">~ % {current.installCmd}</span>
                {'\n'}
                <span className="text-emerald-400">{current.installOutput}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
