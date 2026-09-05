'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'green' | 'amber' | 'blue' | 'purple' | 'slate' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  pulse?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = 'orange',
  size = 'md',
  dot = false,
  pulse = false,
  className = '',
}: BadgeProps) {
  const variantStyles = {
    orange: 'bg-orange-50/80 text-orange-800 border-orange-200/80',
    green: 'bg-emerald-50/80 text-emerald-800 border-emerald-200/80',
    amber: 'bg-amber-50/80 text-amber-800 border-amber-200/80',
    blue: 'bg-blue-50/80 text-blue-800 border-blue-200/80',
    purple: 'bg-purple-50/80 text-purple-800 border-purple-200/80',
    slate: 'bg-zinc-100 text-zinc-700 border-zinc-200',
    neutral: 'bg-zinc-50 text-zinc-600 border-zinc-200/80',
  };

  const dotColors = {
    orange: 'bg-orange-600',
    green: 'bg-emerald-600',
    amber: 'bg-amber-600',
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    slate: 'bg-zinc-500',
    neutral: 'bg-zinc-400',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-0.5',
    lg: 'text-xs px-3 py-1 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono tracking-tight transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
          {pulse && (
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dotColors[variant]}`}
            />
          )}
          <span
            className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotColors[variant]}`}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
