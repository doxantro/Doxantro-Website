'use client';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Enter your name so we know who to reply to.';
  if (!f.email.trim()) e.email = 'Enter an email address for our reply.';
  else if (!EMAIL_RE.test(f.email.trim())) e.email = 'This email address looks incomplete. Check for a missing @ or domain.';
  if (f.details.trim().length < 10) e.details = 'Add a sentence or two so we know where to start.';
  return e;
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
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [website, setWebsite] = useState('');
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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const found = validate(fields);
    setErrors(found);
    const first = (Object.keys(found) as (keyof Fields)[])[0];
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }

    const subject =
      subjectParam ||
      `${isApplication ? 'New application' : 'New project enquiry'} from ${fields.name}${fields.company ? `, ${fields.company}` : ''}`;
    setSubmitError('');
    setSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          subject,
          kind: isApplication ? 'application' : 'enquiry',
          website,
        }),
      });
      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || 'We could not send your message. Please try again.');
      }

      setSent(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'We could not send your message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 ref={successHeading} tabIndex={-1} className="mt-6 text-2xl font-medium tracking-[-0.02em] text-ink">
          Your message has been sent.
        </h2>
        <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-ink-muted">
          Thanks for reaching out. Your message is now with the Doxantro team, and we will reply within 24 hours. You
          can also write to{' '}
          <a href={`mailto:${company.email}`} className="font-medium text-ink underline decoration-line-strong">
            {company.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            returning.current = true;
            setFields({ name: '', email: '', company: '', service: '', budget: '', timeline: '', details: '' });
            setErrors({});
            setSubmitError('');
            setWebsite('');
            setSent(false);
          }}
          className="mt-8 text-[0.9375rem] font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={sending}
      className="relative space-y-7 rounded-2xl border border-line bg-surface p-6 sm:p-9"
    >
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={id('website')}>Website</label>
        <input
          id={id('website')}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

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
            maxLength={100}
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
            maxLength={254}
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
          maxLength={160}
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
          maxLength={5000}
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

      {submitError && (
        <div role="alert" className="rounded-xl border border-[#b42318]/25 bg-[#fef3f2] px-4 py-3 text-sm text-[#b42318]">
          {submitError}{' '}
          <a href={`mailto:${company.email}`} className="font-medium underline underline-offset-2">
            Email us directly
          </a>
          .
        </div>
      )}

      <div className="flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-sm leading-relaxed text-ink-faint">
          Sent securely to {company.email}. We usually reply within 24 hours.
        </p>
        <button
          ref={submitButton}
          type="submit"
          disabled={sending}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-base font-medium text-paper transition-[transform,background-color,opacity] duration-200 hover:bg-black active:scale-[0.97] disabled:cursor-wait disabled:opacity-70 disabled:active:scale-100"
        >
          {sending ? 'Sending…' : isApplication ? 'Send application' : 'Send enquiry'}
          {sending ? (
            <LoaderCircle className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
          ) : (
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-px group-hover:translate-x-px"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
    </form>
  );
}
