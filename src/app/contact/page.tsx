'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Mail,
  Building2,
  Clock,
  ShieldCheck,
  Send,
  Loader2,
} from 'lucide-react';
import Button from '../../components/ui/Button';

const verticalsList = [
  'Finance & Banking',
  'Healthcare & Diagnostics',
  'Precision Agriculture',
  'Supply Chain & Logistics',
  'Cybersecurity & Defense',
  'Smart Grid & Energy',
  'Custom Enterprise AI',
];

const timelineOptions = ['Immediate (< 1 mo)', '1 - 3 months', '3 - 6 months', 'Exploratory / R&D'];

const modelScopes = [
  'Fine-Tuning Domain Models',
  'Computer Vision & Imaging Pipeline',
  'Real-Time Anomaly & Fraud Interception',
  'Private On-Premise / Air-Gapped Deploy',
  'Full-Lifecycle Architecture Audit',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    vertical: verticalsList[0],
    timeline: timelineOptions[1],
    selectedScopes: [modelScopes[0]],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleScopeToggle = (scope: string) => {
    setFormData((prev) => {
      const exists = prev.selectedScopes.includes(scope);
      if (exists) {
        return {
          ...prev,
          selectedScopes: prev.selectedScopes.filter((s) => s !== scope),
        };
      } else {
        return {
          ...prev,
          selectedScopes: [...prev.selectedScopes, scope],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter your name and a valid corporate email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-20 border-b border-black/[0.06] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-3.5">
              <span className="subheading">
                Direct Engineering & Architecture Consultation
              </span>
            </div>

            <h1 className="display-1 mb-4 sm:mb-5">
              Start Your Enterprise AI Initiative
            </h1>

            <p className="body-lg max-w-2xl mx-auto text-zinc-600">
              Connect directly with our Principal AI Architects to evaluate your data pipelines, establish performance SLAs, and map project ROI under standard non-disclosure agreements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Scoping Form & Details */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#fafafa] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left: Scoping Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="card-minimal p-5 sm:p-7 md:p-8 bg-white">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-10 space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900">
                      Inquiry Received & Scoped
                    </h3>

                    <p className="text-xs text-zinc-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-zinc-900">{formData.firstName}</span>. An AI Principal Architect from our <span className="font-semibold text-zinc-900">{formData.vertical}</span> division has received your parameters and will respond within 24 hours.
                    </p>

                    <div className="p-3.5 rounded-lg bg-zinc-50 border border-black/[0.04] text-[11px] text-zinc-600 max-w-md mx-auto text-left space-y-1 font-mono">
                      <div>● Target Vertical: {formData.vertical}</div>
                      <div>● Est. Timeline: {formData.timeline}</div>
                      <div>● Model Scope: {formData.selectedScopes.join(', ')}</div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setStatus('idle')}
                        className="px-4 py-1.5 rounded-full border border-black/[0.1] text-xs font-medium text-zinc-700 hover:bg-zinc-100 transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-0.5">
                        Enterprise Scoping Questionnaire
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono">
                        Fields marked with * are required for evaluation.
                      </p>
                    </div>

                    {/* Name inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="e.g. Sarah"
                          className="w-full px-3.5 py-2 text-xs bg-zinc-50 border border-black/[0.08] rounded-lg focus:outline-none focus:border-black text-zinc-900"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="e.g. Connor"
                          className="w-full px-3.5 py-2 text-xs bg-zinc-50 border border-black/[0.08] rounded-lg focus:outline-none focus:border-black text-zinc-900"
                        />
                      </div>
                    </div>

                    {/* Email & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@enterprise.com"
                          className="w-full px-3.5 py-2 text-xs bg-zinc-50 border border-black/[0.08] rounded-lg focus:outline-none focus:border-black text-zinc-900"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                          Company / Institution
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Global Financial Corp"
                          className="w-full px-3.5 py-2 text-xs bg-zinc-50 border border-black/[0.08] rounded-lg focus:outline-none focus:border-black text-zinc-900"
                        />
                      </div>
                    </div>

                    {/* Vertical Selector */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                        Industry Vertical
                      </label>
                      <select
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-zinc-50 border border-black/[0.08] rounded-lg focus:outline-none focus:border-black text-zinc-900 cursor-pointer"
                      >
                        {verticalsList.map((v, idx) => (
                          <option key={idx} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Scopes Multi-select */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5">
                        Target AI Capabilities (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {modelScopes.map((scope, idx) => {
                          const isSelected = formData.selectedScopes.includes(scope);
                          return (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => handleScopeToggle(scope)}
                              className={`p-2 rounded-lg text-xs text-left border transition-colors cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? 'bg-zinc-100 border-black text-[#111111] font-semibold'
                                  : 'bg-zinc-50 border-black/[0.06] text-zinc-600 hover:border-black/[0.15]'
                              }`}
                            >
                              <span>{scope}</span>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 flex-shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                        Estimated Project Timeline
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                        {timelineOptions.map((opt, idx) => (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setFormData({ ...formData, timeline: opt })}
                            className={`p-2 rounded-lg text-xs text-center border transition-colors cursor-pointer ${
                              formData.timeline === opt
                                ? 'bg-[#111111] text-white font-medium border-[#111111]'
                                : 'bg-zinc-50 border-black/[0.06] text-zinc-600 hover:border-black/[0.15]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                        Project Parameters & Constraints
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe data volume, current infrastructure, target latency SLA, or privacy requirements..."
                        className="w-full px-3.5 py-2 text-xs bg-zinc-50 border border-black/[0.08] rounded-lg focus:outline-none focus:border-black text-zinc-900"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-xs text-rose-600 font-mono">{errorMessage}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      size="lg"
                      variant="primary"
                      className="w-full"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin mr-2" />
                          <span>Processing Scope...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Scoping Request</span>
                          <Send className="w-3.5 h-3.5 ml-1.5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Security Guarantees & Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Security & Confidentiality Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0d0d10] text-white border border-white/[0.08] shadow-sm">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>NDA & SOC-2 Compliant Ingestion</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  Enterprise Data Confidentiality
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  All scoping details, technical parameters, and submitted materials are handled under strict non-disclosure terms and never used to train public models.
                </p>

                <div className="space-y-2 text-xs text-zinc-300 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Zero-retention evaluation pipelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>24-Hour SLA direct architect response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Air-gapped on-premise consultation</span>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="card-minimal p-5 sm:p-6 bg-white space-y-3.5">
                <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-500 pb-2 border-b border-black/[0.04]">
                  ■ Direct Channels
                </div>

                <div className="flex items-start gap-3 text-xs text-zinc-700">
                  <div className="p-1.5 rounded-md bg-zinc-100 text-zinc-900 flex-shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">Enterprise Inquiries</div>
                    <div className="text-[11px] text-zinc-500 font-mono">architects@doxantro.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-zinc-700">
                  <div className="p-1.5 rounded-md bg-zinc-100 text-zinc-900 flex-shrink-0">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">Global Campus</div>
                    <div className="text-[11px] text-zinc-500">Doxantro Systems Technology Group</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-zinc-700">
                  <div className="p-1.5 rounded-md bg-zinc-100 text-zinc-900 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">Operating Availability</div>
                    <div className="text-[11px] text-zinc-500">24/7 Global SRE & Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}