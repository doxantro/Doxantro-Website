'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Building2,
  Clock,
  ShieldCheck,
  Sparkles,
  Send,
  Loader2,
  Phone,
  Globe,
  MapPin,
  Lock,
} from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import GlowCard from '../../components/ui/GlowCard';
import SectionHeader from '../../components/ui/SectionHeader';

const verticalsList = [
  'Finance & Banking',
  'Healthcare & Diagnostics',
  'Precision Agriculture',
  'Supply Chain & Logistics',
  'Cybersecurity & Defense',
  'Smart Grid & Energy',
  'Custom Enterprise AI',
];

const timelineOptions = ['Immediate (< 1 month)', '1 - 3 months', '3 - 6 months', 'Exploratory / R&D'];

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
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-white border-b border-zinc-200/60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-20 right-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex mb-5">
              <Badge variant="orange" dot pulse size="md">
                Direct Engineering & Architecture Consultation
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
              Start Your Enterprise{' '}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                AI Initiative
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
              Connect directly with our Principal AI Architects to evaluate your data pipelines, establish performance SLAs, and map project ROI under standard non-disclosure agreements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Scoping Form & Details */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Scoping Form (7 cols) */}
            <div className="lg:col-span-7">
              <GlowCard className="p-8 sm:p-10 bg-white border border-zinc-200/90 shadow-xl">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-zinc-900">
                      Inquiry Received & Scoped!
                    </h3>

                    <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-zinc-900">{formData.firstName}</span>. An AI Principal Architect from our <span className="font-semibold text-orange-600">{formData.vertical}</span> division has received your parameters and will respond within 24 hours.
                    </p>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 max-w-md mx-auto text-left space-y-1.5 font-mono">
                      <div>● Target Vertical: {formData.vertical}</div>
                      <div>● Est. Timeline: {formData.timeline}</div>
                      <div>● Model Scope: {formData.selectedScopes.join(', ')}</div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setStatus('idle')}
                        className="px-6 py-2 rounded-full border border-zinc-300 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-1">
                        Enterprise Scoping Questionnaire
                      </h3>
                      <p className="text-xs text-zinc-600">
                        Fields marked with * are required for architectural evaluation.
                      </p>
                    </div>

                    {/* Name inputs */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="e.g. Sarah"
                          className="w-full px-4 py-3 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="e.g. Connor"
                          className="w-full px-4 py-3 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900"
                        />
                      </div>
                    </div>

                    {/* Email & Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@enterprise.com"
                          className="w-full px-4 py-3 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                          Company / Institution
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Global Financial Corp"
                          className="w-full px-4 py-3 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900"
                        />
                      </div>
                    </div>

                    {/* Vertical Selector */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                        Industry Vertical
                      </label>
                      <select
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 cursor-pointer"
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
                      <label className="block text-xs font-bold text-zinc-700 mb-2 uppercase tracking-wider">
                        Target AI Capabilities (Select all that apply)
                      </label>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {modelScopes.map((scope, idx) => {
                          const isSelected = formData.selectedScopes.includes(scope);
                          return (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => handleScopeToggle(scope)}
                              className={`p-3 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? 'bg-orange-50 border-orange-400 text-orange-800 font-semibold shadow-sm'
                                  : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300'
                              }`}
                            >
                              <span>{scope}</span>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                        Estimated Project Timeline
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timelineOptions.map((opt, idx) => (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setFormData({ ...formData, timeline: opt })}
                            className={`p-2.5 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                              formData.timeline === opt
                                ? 'bg-orange-600 text-white font-semibold border-orange-600 shadow-sm'
                                : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5 uppercase tracking-wider">
                        Project Details & Performance Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your data volume, current architecture, target accuracy, or deployment constraints..."
                        className="w-full px-4 py-3 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-xs text-rose-500 font-medium">{errorMessage}</p>
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
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          <span>Processing Architectural Scope...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Scoping Request</span>
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </GlowCard>
            </div>

            {/* Right: Security Guarantees & Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Security & Confidentiality Box */}
              <div className="p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>NDA & SOC-2 Compliant Ingestion</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  Enterprise Data Confidentiality
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  All scoping details, technical parameters, and submitted materials are handled under strict non-disclosure terms and never used to train public models.
                </p>

                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span>Zero-retention evaluation pipelines</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span>24-Hour SLA direct architect response</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span>Air-gapped on-premise consultation available</span>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <GlowCard className="p-8 bg-zinc-50/70 border border-zinc-200/80 space-y-5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900">
                  Global Direct Channels
                </h4>

                <div className="flex items-start gap-3.5 text-sm text-zinc-700">
                  <div className="p-2 rounded-xl bg-orange-100 text-orange-600 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900">Enterprise Inquiries</div>
                    <div className="text-xs text-zinc-600 font-mono">architects@doxantro.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-zinc-700">
                  <div className="p-2 rounded-xl bg-orange-100 text-orange-600 flex-shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900">Global Headquarters</div>
                    <div className="text-xs text-zinc-600">Doxantro Systems Technology Campus</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-zinc-700">
                  <div className="p-2 rounded-xl bg-orange-100 text-orange-600 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900">Operating Hours</div>
                    <div className="text-xs text-zinc-600">24/7 Global SRE & Executive Support</div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}