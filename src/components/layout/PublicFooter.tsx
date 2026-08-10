import { Code2 } from 'lucide-react';

export function PublicFooter() {
  return (
    <footer className="border-t border-white/10 bg-void/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-2 font-semibold text-ink">
          <Code2 aria-hidden="true" size={18} />
          CFF Explorer
        </div>
        <p>Purpose-built analytics and practice planning for Codeforces users.</p>
      </div>
    </footer>
  );
}
