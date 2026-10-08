import type { Service } from '../../content/site';

const toneClass = {
  muted: 'text-night-muted',
  accent: 'text-accent',
  ok: 'text-[#9fd8a8]',
} as const;

// A small terminal window showing what a finished piece of work reports back.
// Lines replay their entrance whenever the service changes (keyed by id).
export default function CodePreview({ service, className = '' }: { service: Service; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-night text-night-ink shadow-[0_30px_60px_-30px_rgba(20,20,18,0.55)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-night-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-night-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-night-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-night-ink/15" />
        <span className="ml-3 font-mono text-xs text-night-muted">{service.preview.file}</span>
      </div>
      <div key={service.id} className="space-y-2 px-5 py-6 font-mono text-[0.8125rem] leading-relaxed sm:text-sm">
        {service.preview.lines.map((line, i) => (
          <div
            key={i}
            className={`animate-[fade-up-sm_0.3s_var(--ease-out)_both] whitespace-pre-wrap ${line.tone ? toneClass[line.tone] : ''}`}
            style={{ animationDelay: `${i * 35}ms` }}
          >
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
