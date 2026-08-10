interface PageLoaderProps {
  label?: string;
}

export function PageLoader({ label = 'Loading' }: PageLoaderProps) {
  return (
    <main className="grid min-h-screen place-items-center bg-void text-ink">
      <div className="flex items-center gap-3 text-sm text-muted">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/15 border-t-cyan-300" />
        <span>{label}</span>
      </div>
    </main>
  );
}
