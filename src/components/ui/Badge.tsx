import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'blue' | 'cyan' | 'green' | 'amber' | 'violet';
}

const toneClasses: Record<NonNullable<BadgeProps['tone']>, string> = {
  blue: 'border-blue-300/25 bg-blue-400/10 text-blue-200',
  cyan: 'border-cyan-300/25 bg-cyan-400/10 text-cyan-200',
  green: 'border-emerald-300/25 bg-emerald-400/10 text-emerald-200',
  amber: 'border-amber-300/25 bg-amber-400/10 text-amber-200',
  violet: 'border-violet-300/25 bg-violet-400/10 text-violet-200',
};

export function Badge({ className, tone = 'blue', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-1 text-[0.72rem] font-semibold leading-none tracking-normal',
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
