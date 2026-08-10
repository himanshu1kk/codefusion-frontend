import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-cyan-200/40 bg-cyan-300 text-slate-950 shadow-[0_14px_40px_rgba(34,211,238,0.18)] hover:bg-cyan-200 active:bg-cyan-100 focus-visible:ring-cyan-200',
  secondary:
    'border border-white/12 bg-white/[0.045] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-white/20 hover:bg-white/[0.075] active:bg-white/[0.1] focus-visible:ring-cyan-200',
  ghost:
    'border border-transparent bg-transparent text-muted hover:bg-white/[0.045] hover:text-ink active:bg-white/[0.075] focus-visible:ring-cyan-200',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-sm sm:h-12 sm:px-6',
};

interface SharedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonProps = SharedButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = SharedButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

function buttonClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-semibold leading-none transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:pointer-events-none disabled:opacity-55',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} type={type} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonLinkProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
