'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Lock,
  Clock,
  Send,
  Loader2,
} from 'lucide-react';
import Button from '../../components/ui/Button';

const verticals = [
  'Finance & Banking',
  'Healthcare & Diagnostics',
  'Supply Chain & Logistics',
  'Precision Agriculture',
  'Cybersecurity & Defense',
  'Smart Grid & Energy',
  'Custom Enterprise Architecture',
];

const modelScopes = [
  'Domain Model Fine-Tuning',
  'Low-Latency Edge Deployment',
  'Zero-Trust Guardrails & PII',
  'Private Air-Gapped VPC Pods',
  'Technical Architecture Audit',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    vertical: verticals[0],
    selectedScopes: [modelScopes[0]],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleScopeToggle = (scope: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedScopes: prev.selectedScopes.includes(scope)
        ? prev.selectedScopes.filter((s) => s !== scope)
        : [...prev.selectedScopes, scope],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
            Contact & Scoping
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] font-semibold tracking-[-0.03em] text-[#111111] leading-tight mb-6">
            Partner with Doxantro Systems.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Discuss your technical requirements directly with our AI infrastructure architects. We respond to enterprise scoping requests within 2 business hours.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="py-20 bg-[#f9f9f8] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Info & Guarantees (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#111111] mb-3">
                  Enterprise Technical Engagement
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Whether you are planning an air-gapped VPC cluster or benchmarking domain models against existing pipelines, our systems engineers will guide your architecture.
                </p>
              </div>

              {/* Direct Info Box */}
              <div className="rounded-2xl border border-black/[0.08] bg-white p-6 space-y-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-600" />
                  <div>
                    <div className="text-zinc-400 text-[10px] uppercase">Direct Email</div>
                    <a href="mailto:solutions@doxantro.com" className="font-semibold text-zinc-900 hover:underline">
                      solutions@doxantro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-black/[0.06]">
                  <Clock className="w-4 h-4 text-zinc-600" />
                  <div>
                    <div className="text-zinc-400 text-[10px] uppercase">Enterprise Response SLA</div>
                    <div className="font-semibold text-zinc-900">&lt; 2 Business Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-black/[0.06]">
                  <ShieldCheck className="w-4 h-4 text-zinc-600" />
                  <div>
                    <div className="text-zinc-400 text-[10px] uppercase">Security Standard</div>
                    <div className="font-semibold text-zinc-900">SOC-2 Type II · HIPAA · NDA Ready</div>
                  </div>
                </div>
              </div>

              {/* Guarantee Items */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-700">
                    Mutual Non-Disclosure Agreement (NDA) executed prior to data sharing.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-700">
                    Dedicated Principal AI Solutions Architect assigned to each deployment.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-700">
                    Proof-of-Concept benchmark sandbox deployed in under 7 business days.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Scoping Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-black/[0.09] bg-white p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#111111] mb-2">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-sm text-zinc-600 max-w-md mx-auto mb-6">
                      Thank you for contacting Doxantro Systems. A senior AI architect has received your scoping requirements and will reach out within 2 business hours.
                    </p>
                    <Button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          company: '',
                          vertical: verticals[0],
                          selectedScopes: [modelScopes[0]],
                          message: '',
                        });
                      }}
                      size="sm"
                      variant="secondary"
                    >
                      Submit Another Scoping Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-600 mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="e.g. Alex"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.1] bg-zinc-50 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-600 mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="e.g. Mercer"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.1] bg-zinc-50 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-600 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@enterprise.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.1] bg-zinc-50 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-600 mb-1.5">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Enterprise Inc."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.1] bg-zinc-50 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-600 mb-1.5">
                        Industry Vertical *
                      </label>
                      <select
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.1] bg-zinc-50 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                      >
                        {verticals.map((v) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Scope Pills */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-600 mb-2">
                        Project Scope Areas
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {modelScopes.map((scope) => {
                          const isSelected = formData.selectedScopes.includes(scope);
                          return (
                            <button
                              key={scope}
                              type="button"
                              onClick={() => handleScopeToggle(scope)}
                              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#111111] text-white'
                                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/70'
                              }`}
                            >
                              {scope}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-600 mb-1.5">
                        Technical Requirements & Objectives
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your current pipeline, target latency SLAs, volume requirements, or security constraints..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/[0.1] bg-zinc-50 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full h-11 bg-[#111111] hover:bg-black text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Scoping Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}