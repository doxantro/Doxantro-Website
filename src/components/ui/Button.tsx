'use client';

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonBaseProps {
  variant?: 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-dark' | 'outline-white';
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
    'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none select-none cursor-pointer tracking-tight';

  const sizeStyles = {
    sm: 'text-xs h-8 px-3.5 rounded-full gap-1.5',
    md: 'text-sm h-10 px-5 rounded-full gap-2',
    lg: 'text-sm sm:text-base h-12 px-6 rounded-full gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#111111] hover:bg-black text-white border border-[#222222] shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]',
    accent:
      'bg-orange-600 hover:bg-orange-700 text-white border border-orange-500 shadow-sm hover:shadow-md',
    secondary:
      'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 border border-zinc-200/80',
    outline:
      'border border-zinc-300 hover:border-zinc-900 text-zinc-900 bg-white hover:bg-zinc-50 shadow-sm',
    'outline-white':
      'border border-zinc-700 hover:border-white text-white hover:bg-zinc-900 bg-transparent',
    ghost:
      'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80',
    glass:
      'backdrop-blur-md bg-white/90 hover:bg-white text-zinc-900 border border-zinc-200/80 shadow-sm hover:shadow hover:border-zinc-400',
    'glass-dark':
      'backdrop-blur-md bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700 shadow-sm',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const defaultArrow = (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const renderedIcon = icon || (variant === 'primary' || variant === 'accent' ? defaultArrow : null);

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {renderedIcon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{renderedIcon}</span>
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
