'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'orange' | 'green' | 'amber' | 'blue' | 'purple' | 'slate' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  pulse?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  pulse = false,
  className = '',
}: BadgeProps) {
  const variantStyles = {
    neutral: 'bg-zinc-50 text-zinc-800 border-zinc-200/90',
    orange: 'bg-orange-50/80 text-orange-800 border-orange-200/90',
    green: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    amber: 'bg-amber-50 text-amber-800 border-amber-200/80',
    blue: 'bg-blue-50 text-blue-800 border-blue-200/80',
    purple: 'bg-purple-50 text-purple-800 border-purple-200/80',
    slate: 'bg-zinc-100 text-zinc-700 border-zinc-200',
    dark: 'bg-zinc-900 text-zinc-100 border-zinc-800',
  };

  const dotColors = {
    neutral: 'bg-zinc-600',
    orange: 'bg-orange-600',
    green: 'bg-emerald-600',
    amber: 'bg-amber-600',
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    slate: 'bg-zinc-600',
    dark: 'bg-emerald-400',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-tight font-medium',
    md: 'text-xs px-3 py-1 tracking-tight font-medium',
    lg: 'text-sm px-3.5 py-1.5 tracking-tight font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {pulse && (
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotColors[variant]}`}
            />
          )}
          <span
            className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotColors[variant]}`}
          />
        </span>
      )}
      {children}
    </span>
  );
}
