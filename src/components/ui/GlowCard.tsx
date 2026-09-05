'use client';

import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function GlowCard({
  children,
  className = '',
  onClick,
}: GlowCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl border border-zinc-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.03)] hover:border-zinc-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-200 overflow-hidden ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
