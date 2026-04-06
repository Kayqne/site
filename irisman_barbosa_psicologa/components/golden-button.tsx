'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GoldenButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'outline';
}

export function GoldenButton({
  children,
  variant = 'primary',
  className,
  ...props
}: GoldenButtonProps) {
  const baseStyles = 'font-["Jost"] text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#c9a84c] text-[#0c0b09] px-8 py-4 hover:bg-[#e2c97e] hover:-translate-y-0.5 glow-gold',
    ghost: 'text-[#a89f8c] hover:text-[#f2ead8] flex items-center gap-2',
    outline: 'border border-[#8a6e2f] text-[#c9a84c] px-6 py-3 hover:bg-[#c9a84c] hover:text-[#0c0b09]',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
