import { Code2 } from 'lucide-react';
import { memo } from 'react';
import type { NavItem } from '../../types/navigation';
import { legacyRoutes } from '../../services/config';
import { ButtonLink } from '../ui/Button';

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
];

export const PublicHeader = memo(function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-void/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-2.5 font-display text-base font-bold text-ink" href="/">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-cyan-200/25 bg-cyan-300/10 text-cyan-200">
            <Code2 aria-hidden="true" size={18} strokeWidth={2} />
          </span>
          CFF Explorer
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-ink" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink className="hidden sm:inline-flex" href={legacyRoutes.login} variant="ghost" size="sm">
            Login
          </ButtonLink>
          <ButtonLink href={legacyRoutes.register} size="sm">
            Get Started
          </ButtonLink>
        </div>
      </div>
    </header>
  );
});
