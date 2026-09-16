import RevealSection from './RevealSection.jsx';
import { BRAWLERS, CLASS_ORDER } from '../data/brawlers.js';

export default function ClassesOverview({ onStart }) {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <RevealSection className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            18 Real Brawlers. <span className="gradient-text">5 Classes.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/50 sm:text-base">
            Every result is a real Brawl Stars Brawler, grouped by the role they play
            on the battlefield.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLASS_ORDER.map((className, index) => {
            const members = BRAWLERS.filter((b) => b.class === className);
            return (
              <RevealSection key={className} delay={index * 0.08}>
                <div className="glass-card h-full p-6">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {className}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-white/30">
                    {members.length} Brawlers
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {members.map((brawler) => (
                      <li
                        key={brawler.id}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                      >
                        {brawler.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            );
          })}
        </div>

        <RevealSection className="mt-14 text-center" delay={0.15}>
          <button onClick={onStart} className="btn-primary">
            Find My Brawler
          </button>
        </RevealSection>
      </div>
    </section>
  );
}
