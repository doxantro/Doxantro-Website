'use client';

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-dark' | 'outline-white';
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
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-4 py-2 rounded-full gap-1.5',
    md: 'text-sm sm:text-base px-6 py-2.5 rounded-full gap-2',
    lg: 'text-base sm:text-lg px-8 py-3.5 rounded-full gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:brightness-105 border border-orange-400/30',
    secondary:
      'bg-zinc-900 text-white hover:bg-zinc-800 shadow-md border border-zinc-800',
    outline:
      'border-2 border-zinc-200 hover:border-orange-500 hover:text-orange-600 text-zinc-700 bg-transparent',
    'outline-white':
      'border-2 border-zinc-700 hover:border-orange-500 text-white hover:text-orange-400 bg-transparent',
    ghost:
      'text-zinc-700 hover:text-orange-600 hover:bg-orange-50/50',
    glass:
      'backdrop-blur-md bg-white/80 hover:bg-white text-zinc-900 border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-orange-200',
    'glass-dark':
      'backdrop-blur-md bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-orange-500/60 shadow-sm hover:shadow-md',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
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
      whileHover={{ y: -1 }}
      className={`group ${combinedClasses}`}
      {...buttonProps}
    >
      {content}
    </motion.button>
  );
}
