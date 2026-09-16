import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-void-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-electric-500">
            <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl font-bold tracking-wide">
            BRAWL <span className="gradient-text">IDENTITY</span>
          </span>
        </div>
        <span className="hidden text-xs font-medium uppercase tracking-widest text-white/40 sm:block">
          Fan-made community quiz
        </span>
      </div>
    </header>
  );
}
