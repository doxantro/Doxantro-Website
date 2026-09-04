'use client';

import React from 'react';
import {
  BadgeDollarSign,
  Activity,
  Sprout,
  Boxes,
  ShieldAlert,
  Zap,
  Cpu,
  Brain,
  Layers,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Terminal,
} from 'lucide-react';

interface SolutionIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function SolutionIcon({ name, className = 'w-5 h-5', size }: SolutionIconProps) {
  const iconProps = { className, size };

  switch (name) {
    case 'BadgeDollarSign':
    case 'finance':
      return <BadgeDollarSign {...iconProps} />;
    case 'Activity':
    case 'healthcare':
      return <Activity {...iconProps} />;
    case 'Sprout':
    case 'agriculture':
      return <Sprout {...iconProps} />;
    case 'Boxes':
    case 'supply-chain':
      return <Boxes {...iconProps} />;
    case 'ShieldAlert':
    case 'security':
      return <ShieldAlert {...iconProps} />;
    case 'Zap':
    case 'energy':
      return <Zap {...iconProps} />;
    case 'Cpu':
      return <Cpu {...iconProps} />;
    case 'Brain':
      return <Brain {...iconProps} />;
    case 'Layers':
      return <Layers {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'TrendingUp':
      return <TrendingUp {...iconProps} />;
    case 'Sparkles':
      return <Sparkles {...iconProps} />;
    case 'Terminal':
      return <Terminal {...iconProps} />;
    case 'ArrowRight':
      return <ArrowRight {...iconProps} />;
    case 'ChevronRight':
      return <ChevronRight {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}
