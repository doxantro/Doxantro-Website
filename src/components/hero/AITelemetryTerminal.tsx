'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Activity, Zap, CheckCircle2, Shield, Play, RefreshCw } from 'lucide-react';
import Badge from '../ui/Badge';

const initialLogs = [
  { id: 1, time: '10:42:01.104', type: 'info', text: 'Initializing Doxantro v3.4 Enterprise Cluster...' },
  { id: 2, time: '10:42:01.420', type: 'success', text: 'Neural weights mounted across 64 TPU nodes (Latency: 4.8ms)' },
  { id: 3, time: '10:42:02.012', type: 'info', text: 'Inference streaming active: Ingesting 18,400 events/sec' },
  { id: 4, time: '10:42:02.890', type: 'success', text: '[FINANCE] Real-time fraud anomaly intercepted & neutralized ($42,800 saved)' },
  { id: 5, time: '10:42:03.510', type: 'warning', text: '[HEALTHCARE] DICOM CT Scan processed: Anomaly confidence 99.4%' },
  { id: 6, time: '10:42:04.112', type: 'info', text: '[SUPPLY] Route matrix re-computed: -14.2% delivery latency' },
];

const mockNewEvents = [
  { type: 'success', text: '[SECURITY] Zero-day exfiltration attempt quarantined in 3.1ms' },
  { type: 'info', text: '[AGRI] Satellite multispectral NDVI map indexed: 12,000 acres' },
  { type: 'success', text: '[ENERGY] Smart grid load rebalanced: +18.4% efficiency' },
  { type: 'info', text: '[FINANCE] Automated credit risk score calculated: 782 (Tier 1)' },
  { type: 'warning', text: '[DIAGNOSTICS] High-resolution MRI segment completed (0.42s)' },
];

export default function AITelemetryTerminal() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'metrics' | 'nodes'>('terminal');
  const [logs, setLogs] = useState(initialLogs);
  const [isSimulating, setIsSimulating] = useState(false);
  const [inferenceCount, setInferenceCount] = useState(842910);
  const [avgLatency, setAvgLatency] = useState(8.4);

  // Periodic log streamer
  useEffect(() => {
    const interval = setInterval(() => {
      const randomEvent = mockNewEvents[Math.floor(Math.random() * mockNewEvents.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');

      setLogs((prev) => [
        ...prev.slice(-7),
        {
          id: Date.now(),
          time: timeStr,
          type: randomEvent.type,
          text: randomEvent.text,
        },
      ]);
      setInferenceCount((prev) => prev + Math.floor(Math.random() * 24) + 8);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  const handleSimulateInference = () => {
    setIsSimulating(true);
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');

    setTimeout(() => {
      setLogs((prev) => [
        ...prev.slice(-6),
        {
          id: Date.now(),
          time: timeStr,
          type: 'success',
          text: `⚡ [SIMULATED BURST] Processed 100,000 concurrent tokens across 6 verticals in 14.8ms`,
        },
      ]);
      setAvgLatency(6.2);
      setInferenceCount((prev) => prev + 100000);
      setIsSimulating(false);
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      className="relative rounded-3xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl shadow-orange-950/20 overflow-hidden"
    >
      {/* Top Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Header */}
      <div className="relative z-10 flex items-center justify-between px-5 py-3.5 bg-zinc-900/90 border-b border-zinc-800 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
          <span className="ml-2 font-mono text-xs text-zinc-400 font-medium hidden sm:inline">
            doxantro-core@v3.4-inference
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center bg-zinc-950 rounded-xl p-1 border border-zinc-800 text-xs">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              activeTab === 'terminal'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Live Logs
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              activeTab === 'metrics'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Telemetry
          </button>
          <button
            onClick={() => setActiveTab('nodes')}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              activeTab === 'nodes'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Cluster
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="relative z-10 p-5 min-h-[320px] flex flex-col justify-between">
        {activeTab === 'terminal' && (
          <div>
            <div className="flex items-center justify-between mb-3 text-xs text-zinc-400 pb-2 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-emerald-400 font-semibold">STREAM ACTIVE</span>
              </div>
              <span className="font-mono">{inferenceCount.toLocaleString()} total ops</span>
            </div>

            <div className="font-mono text-xs sm:text-[13px] space-y-2.5 overflow-hidden">
              {logs.slice(-5).map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2 leading-relaxed"
                >
                  <span className="text-zinc-500 select-none text-[11px] whitespace-nowrap mt-0.5">
                    {log.time}
                  </span>
                  <span
                    className={
                      log.type === 'success'
                        ? 'text-emerald-400'
                        : log.type === 'warning'
                        ? 'text-amber-400'
                        : 'text-zinc-300'
                    }
                  >
                    {log.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-900/80 rounded-2xl p-3.5 border border-zinc-800">
                <div className="text-xs text-zinc-400 mb-1">Average Response Latency</div>
                <div className="text-2xl font-bold font-mono text-orange-400">{avgLatency}ms</div>
                <div className="text-[11px] text-emerald-400 mt-1">✓ Sub-10ms target met</div>
              </div>
              <div className="bg-zinc-900/80 rounded-2xl p-3.5 border border-zinc-800">
                <div className="text-xs text-zinc-400 mb-1">Model Accuracy (AUC)</div>
                <div className="text-2xl font-bold font-mono text-emerald-400">99.84%</div>
                <div className="text-[11px] text-zinc-400 mt-1">Cross-validated across 6 datasets</div>
              </div>
            </div>

            <div className="bg-zinc-900/80 rounded-2xl p-3.5 border border-zinc-800">
              <div className="flex justify-between text-xs text-zinc-400 mb-2">
                <span>GPU Inference Memory Load</span>
                <span className="font-mono text-orange-400">76% Allocated</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full rounded-full w-[76%]" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nodes' && (
          <div className="space-y-3">
            <div className="text-xs text-zinc-400 mb-2">Distributed Inference Mesh (6 Available Regions)</div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: 'US-East (Finance)', status: 'Healthy', ping: '3.8ms' },
                { name: 'EU-Central (Health)', status: 'Healthy', ping: '7.1ms' },
                { name: 'APAC-South (Agri)', status: 'Healthy', ping: '11.4ms' },
                { name: 'US-West (Energy)', status: 'Healthy', ping: '5.2ms' },
                { name: 'LATAM-East (Supply)', status: 'Healthy', ping: '14.1ms' },
                { name: 'Cyber-Vault (Sec)', status: 'Protected', ping: '2.1ms' },
              ].map((node, i) => (
                <div key={i} className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-2.5 text-center">
                  <div className="text-xs font-semibold text-zinc-200 truncate">{node.name}</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">{node.status}</div>
                  <div className="text-[10px] font-mono text-zinc-500">{node.ping}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action / Trigger Footer */}
        <div className="mt-5 pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Zap className="w-3.5 h-3.5 text-orange-500" />
            <span>Encrypted zero-retention enterprise tunnel</span>
          </div>

          <button
            onClick={handleSimulateInference}
            disabled={isSimulating}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-orange-400 border border-orange-500/30 transition-colors cursor-pointer disabled:opacity-50"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Running Inference...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-orange-400" />
                <span>Simulate AI Spike</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
