'use client';

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'orange' | 'inverted' | 'outline' | 'ghost' | 'glass' | 'glass-dark' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

interface ButtonAsButtonProps extends ButtonBaseProps, Omit<HTMLMotionProps<'button'>, keyof ButtonBaseProps> {
  href?: undefined;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-normal tracking-tight transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer rounded-full';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-6 py-3 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#111111] text-white hover:bg-black border border-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.08)]',
    orange:
      'bg-orange-600 text-white hover:bg-orange-700 border border-orange-600 shadow-[0_1px_2px_rgba(234,88,12,0.12)]',
    secondary:
      'bg-white text-zinc-900 border border-zinc-200/90 hover:bg-zinc-50 hover:border-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)]',
    inverted:
      'bg-white text-[#111111] hover:bg-zinc-100 border border-white font-medium shadow-sm',
    outline:
      'border border-zinc-200/90 hover:border-zinc-300 hover:text-zinc-900 text-zinc-700 bg-white/50 backdrop-blur-sm',
    'outline-white':
      'border border-white/20 hover:border-white/40 text-white hover:bg-white/5 bg-transparent',
    ghost:
      'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80',
    glass:
      'backdrop-blur-md bg-white/90 hover:bg-white text-zinc-900 border border-zinc-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]',
    'glass-dark':
      'backdrop-blur-md bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-800 shadow-sm',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if ('href' in props && props.href) {
    const { href, target, rel, onClick } = props as ButtonAsLinkProps;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`group ${combinedClasses}`}
      {...buttonProps}
    >
      {content}
    </motion.button>
  );
}
