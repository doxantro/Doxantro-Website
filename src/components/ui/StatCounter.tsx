'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: string | number;
  duration?: number;
  label?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function StatCounter({
  value,
  duration = 1.8,
  label,
  prefix = '',
  suffix = '',
  className = '',
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState<string | number>('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric value if given as string like "500" or "40" or "3.5"
    const strVal = String(value);
    const numericMatch = strVal.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const isDecimal = numericMatch[0].includes('.');
    const decimalPlaces = isDecimal ? numericMatch[0].split('.')[1].length : 0;
    const extractedPrefix = strVal.slice(0, numericMatch.index);
    const extractedSuffix = strVal.slice((numericMatch.index ?? 0) + numericMatch[0].length);

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = (targetNum * easeProgress).toFixed(decimalPlaces);

      setDisplayValue(
        `${prefix || extractedPrefix}${currentVal}${suffix || extractedSuffix}`
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(`${prefix || extractedPrefix}${numericMatch[0]}${suffix || extractedSuffix}`);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration, prefix, suffix]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-orange-600 mb-2">
        {displayValue}
      </div>
      {label && <p className="text-sm md:text-base text-zinc-600 font-medium">{label}</p>}
    </div>
  );
}
