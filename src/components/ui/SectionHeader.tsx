'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'orange' | 'green' | 'amber' | 'blue' | 'purple' | 'slate';
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  badge,
  badgeVariant = 'orange',
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`mb-4 ${isCenter ? 'flex justify-center' : ''}`}>
          <Badge variant={badgeVariant} dot pulse size="md">
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
        {title}{' '}
        {highlightText && (
          <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
