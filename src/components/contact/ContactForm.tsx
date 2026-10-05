'use client';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { company, contactPage } from '../../content/site';

type Fields = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const MAX_MAILTO = 1800;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Enter your name so we know who to reply to.';
  if (!f.email.trim()) e.email = 'Enter an email address for our reply.';
  else if (!EMAIL_RE.test(f.email.trim())) e.email = 'This email address looks incomplete. Check for a missing @ or domain.';
  if (f.details.trim().length < 10) e.details = 'Add a sentence or two so we know where to start.';
  return e;
}

// Delivery is not wired to a backend yet. Until it is, the form drafts the email in the
// visitor's own mail app, so nothing is silently lost behind a fake success message.
function buildMailto(f: Fields, subject: string) {
  const optional: [string, string][] = [
    ['Company', f.company],
    ['Service', f.service],
    ['Budget', f.budget],
    ['Timeline', f.timeline],
  ];
  const lines = [
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    ...optional.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    '',
    f.details,
  ];
  // RFC 6068 wants CRLF line breaks. Mail apps reject very long mailto URLs, so the
  // message is trimmed to fit and says so; the visitor can paste the rest.
  const head = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=`;
  const body = lines.join('\r\n');
  const full = head + encodeURIComponent(body);
  if (full.length <= MAX_MAILTO) return { href: full, truncated: false };
  const note = '\r\n\r\n[Message shortened to fit your email app. Paste the rest here.]';
  let cut = body.length;
  while (cut > 0 && (head + encodeURIComponent(body.slice(0, cut) + note)).length > MAX_MAILTO) cut -= 50;
  return { href: head + encodeURIComponent(body.slice(0, Math.max(cut, 0)) + note), truncated: true };
}

const inputClass =
  'block w-full rounded-xl border border-field-border bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-faint transition-[border-color,box-shadow] duration-200 hover:border-ink/60 focus:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] forced-colors:border-[CanvasText] aria-[invalid=true]:border-[#b42318]';

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-[0.9375rem] font-medium text-ink">
        {label}
        {optional && <span className="text-sm font-normal text-ink-faint">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  );
}

function Choice({
  name,
  options,
  value,
  onChange,
  legend,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  legend: string;
}) {
  return (
    <fieldset>
      <legend className="mb-3 flex w-full items-baseline justify-between text-[0.9375rem] font-medium text-ink">
        {legend}
        <span className="text-sm font-normal text-ink-faint">Optional</span>
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const checked = value === opt;
          return (
            <label
              key={opt}
              className={`cursor-pointer rounded-full border px-4 py-2 text-[0.9375rem] transition-[background-color,border-color,color,transform] duration-200 inline-flex items-center gap-1.5 active:scale-[0.97] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--focus-ring)] forced-colors:border-[CanvasText] ${
                checked ? 'border-ink bg-ink text-paper' : 'border-field-border bg-surface text-ink hover:border-ink/60'
              }`}
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={checked}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              {/* A visible tick, not just the fill, marks the choice (also survives forced colours). */}
              {checked && <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />}
              {opt}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function ContactForm() {
  const params = useSearchParams();
  // Cap what a link can inject into the banner and the email subject.
  const subjectParam = params.get('subject')?.slice(0, 120) || null;
  const isApplication = params.get('type') === 'application';
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    details: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [truncated, setTruncated] = useState(false);
  const [copied, setCopied] = useState(false);
  const successHeading = useRef<HTMLHeadingElement>(null);
  const submitButton = useRef<HTMLButtonElement>(null);
  const returning = useRef(false);

  // The form and the success card replace each other, so move focus with them
  // rather than letting it fall back to the page.
  useEffect(() => {
    if (sent) successHeading.current?.focus();
    else if (returning.current) submitButton.current?.focus();
  }, [sent]);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const first = (Object.keys(found) as (keyof Fields)[])[0];
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }
    const subject = subjectParam || `New project enquiry from ${fields.name}${fields.company ? `, ${fields.company}` : ''}`;
    const { href, truncated: cut } = buildMailto(fields, subject);
    setTruncated(cut);
    window.location.href = href;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 ref={successHeading} tabIndex={-1} className="mt-6 text-2xl font-medium tracking-[-0.02em] text-ink">
          Your email is ready to send.
        </h2>
        <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-ink-muted">
          We opened your email app with your message filled in. Press send there and we will reply within 24 hours. If
          nothing opened, write to{' '}
          <a href={`mailto:${company.email}`} className="font-medium text-ink underline decoration-line-strong">
            {company.email}
          </a>
          .
        </p>
        {truncated && (
          <div className="mt-6 rounded-xl bg-accent-soft p-4 text-[0.9375rem] text-ink">
            <p>Your message was long, so the email was shortened to fit your email app.</p>
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(fields.details);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
              className="mt-2 font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              {copied ? 'Full message copied. Paste it into the email.' : 'Copy the full message'}
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            returning.current = true;
            setCopied(false);
            setSent(false);
          }}
          className="mt-8 text-[0.9375rem] font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
        >
          Edit your message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7 rounded-2xl border border-line bg-surface p-6 sm:p-9">
      {subjectParam && (
        <p className="break-words rounded-xl bg-accent-soft px-4 py-3 text-[0.9375rem] text-ink">
          Subject: <span className="font-medium">{subjectParam}</span>
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id('name')} label="Name" error={errors.name}>
          <input
            id={id('name')}
            autoComplete="name"
            aria-required="true"
            value={fields.name}
            onChange={(e) => set('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${id('name')}-error` : undefined}
            className={inputClass}
          />
        </Field>
        <Field id={id('email')} label="Work email" error={errors.email}>
          <input
            id={id('email')}
            type="email"
            autoComplete="email"
            aria-required="true"
            inputMode="email"
            value={fields.email}
            onChange={(e) => set('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${id('email')}-error` : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <Field id={id('company')} label={isApplication ? 'Current company' : 'Company or organisation'} optional>
        <input
          id={id('company')}
          autoComplete="organization"
          value={fields.company}
          onChange={(e) => set('company', e.target.value)}
          className={inputClass}
        />
      </Field>

      {!isApplication && (
        <>
          <Choice
            name="service"
            legend="What do you need?"
            options={contactPage.serviceOptions}
            value={fields.service}
            onChange={(v) => set('service', v)}
          />
          <Choice
            name="timeline"
            legend="Timeline"
            options={contactPage.timelineOptions}
            value={fields.timeline}
            onChange={(v) => set('timeline', v)}
          />
          <Choice
            name="budget"
            legend="Budget range"
            options={contactPage.budgetOptions}
            value={fields.budget}
            onChange={(v) => set('budget', v)}
          />
        </>
      )}

      <Field
        id={id('details')}
        label={isApplication ? 'Tell us about yourself' : 'What are you trying to build or fix?'}
        error={errors.details}
      >
        <textarea
          id={id('details')}
          rows={5}
          aria-required="true"
          value={fields.details}
          onChange={(e) => set('details', e.target.value)}
          aria-invalid={!!errors.details}
          aria-describedby={errors.details ? `${id('details')}-error` : undefined}
          placeholder={
            isApplication
              ? 'What you do best, the work you are proudest of, and a link to your CV or portfolio.'
              : 'A few lines is enough: the problem, who it affects and anything you have tried.'
          }
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div className="flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-sm leading-relaxed text-ink-faint">
          Opens your email app with this message ready to send to {company.email}.
        </p>
        <button
          ref={submitButton}
          type="submit"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-base font-medium text-paper transition-[transform,background-color] duration-200 hover:bg-black active:scale-[0.97]"
        >
          Prepare email
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-px group-hover:translate-x-px"
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  );
}
