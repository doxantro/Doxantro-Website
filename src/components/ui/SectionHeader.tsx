'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'orange' | 'green' | 'amber' | 'blue' | 'purple' | 'slate' | 'neutral';
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  badge,
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
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`mb-3.5 ${isCenter ? 'flex justify-center' : ''}`}>
          <span className="subheading">
            {badge}
          </span>
        </div>
      )}

      <h2 className="display-2">
        {title}{' '}
        {highlightText && (
          <span className="text-[#111111]">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3.5 body-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
