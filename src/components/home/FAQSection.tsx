'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What models and architectures does Doxantro support?',
    answer:
      'Doxantro supports private open-weight models (Llama 3, DeepSeek, Mistral, Qwen), domain-specific architectures (BioGPT, Quant-70B, Spatial GraphNNs), and external foundation APIs (Claude, OpenAI). Our unified router automatically selects and load balances across them based on your latency and accuracy constraints.',
  },
  {
    question: 'Can Doxantro be deployed fully on-premises or in an air-gapped VPC?',
    answer:
      'Yes. Doxantro inference nodes can be deployed directly into your private AWS VPC, GCP, Azure, or bare-metal Kubernetes clusters with encrypted local weights and zero outbound telemetry.',
  },
  {
    question: 'How does Doxantro guarantee zero data retention and HIPAA / SOC-2 compliance?',
    answer:
      'We enforce stream-level PII/PHI redaction before tokens reach the model context. Your data is never used to train public models, and all interactions generate cryptographic audit hashes for regulatory compliance.',
  },
  {
    question: 'Do we need a machine learning team to integrate?',
    answer:
      'No. Doxantro provides high-level, type-safe SDKs for Node.js, Python, and Go that allow software engineers to deploy complete AI pipelines in minutes. For enterprise custom models, our AI systems engineers assist with tuning and deployment.',
  },
  {
    question: 'How does Doxantro prevent hallucinations in critical workflows?',
    answer:
      'We combine deterministic JSON schema enforcement, hybrid vector grounding, confidence-threshold gating, and automatic fallback to verified rule engines whenever a confidence score drops below 99.8%.',
  },
  {
    question: 'What are the latency and uptime SLAs for enterprise clusters?',
    answer:
      'Doxantro delivers sub-20ms P99 latency guarantees across edge nodes with a 99.99% uptime SLA backed by automated multi-region failover.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#111111] leading-tight">
              FAQs
            </h2>
            <p className="text-sm text-zinc-600 mt-4 leading-relaxed">
              Everything you need to know about Doxantro architecture, deployment models, and compliance.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-8 divide-y divide-black/[0.08] border-t border-b border-black/[0.08]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#111111] tracking-tight group-hover:text-black">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-zinc-500 group-hover:text-black transition-transform duration-200">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-black' : ''
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
