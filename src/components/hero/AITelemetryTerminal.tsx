'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RefreshCw, Activity, Layers, Terminal } from 'lucide-react';

const initialLogs = [
  { id: 1, time: '10:42:01.104', type: 'info', text: 'Initializing Doxantro v3.4 Enterprise Cluster...' },
  { id: 2, time: '10:42:01.420', type: 'success', text: 'Neural weights mounted across 64 TPU nodes (Latency: 4.8ms)' },
  { id: 3, time: '10:42:02.012', type: 'info', text: 'Inference streaming active: Ingesting 18,400 events/sec' },
  { id: 4, time: '10:42:02.890', type: 'success', text: '[FINANCE] Real-time fraud anomaly intercepted ($42,800 saved)' },
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
        ...prev.slice(-6),
        {
          id: Date.now(),
          time: timeStr,
          type: randomEvent.type,
          text: randomEvent.text,
        },
      ]);
      setInferenceCount((prev) => prev + Math.floor(Math.random() * 24) + 8);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  const handleSimulateInference = () => {
    setIsSimulating(true);
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');

    setTimeout(() => {
      setLogs((prev) => [
        ...prev.slice(-5),
        {
          id: Date.now(),
          time: timeStr,
          type: 'success',
          text: `⚡ [BURST] 100,000 concurrent tokens processed across 6 verticals in 14.8ms`,
        },
      ]);
      setAvgLatency(6.2);
      setInferenceCount((prev) => prev + 100000);
      setIsSimulating(false);
    }, 500);
  };

  return (
    <div className="relative rounded-2xl border border-black/[0.12] bg-[#0d0d10] text-zinc-200 shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden font-mono text-xs">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131317] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-[11px] text-zinc-400 font-mono hidden sm:inline">
            doxantro-node-01 · telemetry
          </span>
        </div>

        {/* Minimalist Switcher */}
        <div className="flex items-center bg-[#0d0d10] rounded-lg p-0.5 border border-white/[0.08]">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
              activeTab === 'terminal'
                ? 'bg-[#222228] text-white font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Logs
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
              activeTab === 'metrics'
                ? 'bg-[#222228] text-white font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Telemetry
          </button>
          <button
            onClick={() => setActiveTab('nodes')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
              activeTab === 'nodes'
                ? 'bg-[#222228] text-white font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Cluster
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 min-h-[300px] flex flex-col justify-between">
        {activeTab === 'terminal' && (
          <div>
            <div className="flex items-center justify-between mb-3 text-[11px] text-zinc-400 pb-2 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400">STREAMING</span>
              </div>
              <span className="font-mono tabular-nums">{inferenceCount.toLocaleString()} events</span>
            </div>

            <div className="space-y-2 text-[12px] leading-relaxed">
              {logs.slice(-5).map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-start gap-2.5"
                >
                  <span className="text-zinc-500 text-[10px] whitespace-nowrap mt-0.5">
                    {log.time}
                  </span>
                  <span
                    className={
                      log.type === 'success'
                        ? 'text-emerald-300'
                        : log.type === 'warning'
                        ? 'text-amber-300'
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
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#141418] rounded-xl p-3 border border-white/[0.06]">
                <div className="text-[11px] text-zinc-400 mb-1">Latency (p99)</div>
                <div className="text-2xl font-bold font-mono text-zinc-100 tabular-nums">{avgLatency}ms</div>
                <div className="text-[10px] text-emerald-400 mt-1">✓ SLA Guarantee &lt; 10ms</div>
              </div>
              <div className="bg-[#141418] rounded-xl p-3 border border-white/[0.06]">
                <div className="text-[11px] text-zinc-400 mb-1">Model Accuracy</div>
                <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">99.84%</div>
                <div className="text-[10px] text-zinc-400 mt-1">Across 6 enterprise benchmarks</div>
              </div>
            </div>

            <div className="bg-[#141418] rounded-xl p-3 border border-white/[0.06]">
              <div className="flex justify-between text-[11px] text-zinc-400 mb-1.5">
                <span>Inference Memory Load</span>
                <span className="font-mono text-zinc-200">76% / 128 TPU cores</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full rounded-full w-[76%]" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nodes' && (
          <div className="space-y-2">
            <div className="text-[11px] text-zinc-400 mb-2">Distributed Low-Latency Regional Mesh</div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: 'US-East (Fin)', ping: '3.8ms' },
                { name: 'EU-Central (Med)', ping: '7.1ms' },
                { name: 'APAC-South (Agri)', ping: '11.4ms' },
                { name: 'US-West (Energy)', ping: '5.2ms' },
                { name: 'LATAM-East (Supply)', ping: '14.1ms' },
                { name: 'Cyber-Vault (Sec)', ping: '2.1ms' },
              ].map((node, i) => (
                <div key={i} className="bg-[#141418] border border-white/[0.06] rounded-lg p-2 text-center">
                  <div className="text-[11px] font-medium text-zinc-200 truncate">{node.name}</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">● Online</div>
                  <div className="text-[10px] text-zinc-500 tabular-nums">{node.ping}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Bar */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
          <span>Zero-retention enterprise tunnel</span>
          <button
            onClick={handleSimulateInference}
            disabled={isSimulating}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1f1f26] hover:bg-[#282832] text-zinc-200 border border-white/[0.1] transition-colors cursor-pointer disabled:opacity-50"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin text-orange-400" />
                <span>Simulating...</span>
              </>
            ) : (
              <>
                <Play className="w-2.5 h-2.5 fill-current text-orange-400" />
                <span>Simulate Burst</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
