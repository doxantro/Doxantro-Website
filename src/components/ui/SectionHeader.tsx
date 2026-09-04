'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

interface SectionHeaderProps {
  eyebrow?: string;
  badge?: string;
  badgeVariant?: 'neutral' | 'orange' | 'green' | 'amber' | 'blue' | 'purple' | 'slate' | 'dark';
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  badge,
  badgeVariant = 'neutral',
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
          {eyebrow}
        </p>
      )}

      {badge && !eyebrow && (
        <div className={`mb-3.5 ${isCenter ? 'flex justify-center' : ''}`}>
          <Badge variant={badgeVariant} dot size="sm">
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-semibold tracking-[-0.025em] text-[#111111] leading-[1.15]">
        {title}{' '}
        {highlightText && (
          <span className="text-zinc-900 font-medium">{highlightText}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
