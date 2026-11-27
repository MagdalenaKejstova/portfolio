import { Link } from 'react-router-dom';
import GameOfLife from '../components/GameOfLife';
import type { Palette } from '../App';

type Props = {
  palette: Palette;
  onPaletteChange: (palette: Palette) => void;
};

export default function Home({ palette, onPaletteChange }: Props) {
  return (
    <section className="page-view active flex-1 flex flex-col justify-between">
      <div className="max-w-[980px] w-full mx-auto px-6 sm:px-10 pt-14 sm:pt-24 pb-12">
        <div className="editorial-paper-sheet pointer-events-auto max-w-[650px] p-6 sm:p-9 rounded-md space-y-7">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div
              style={{ color: 'var(--fg-secondary)' }}
              className="font-mono text-[11px] tracking-widest uppercase"
            >
              Frontend Engineering Lead · UI Architect · HCI Researcher (RNDr.)
            </div>

            <div className="flex sm:hidden items-center gap-1 font-mono text-[10px]">
              <button
                type="button"
                onClick={() => onPaletteChange('vellum')}
                className={palette === 'vellum' ? 'palette-btn active' : 'palette-btn'}
              >
                01 Vellum
              </button>
              <button
                type="button"
                onClick={() => onPaletteChange('stone')}
                className={palette === 'stone' ? 'palette-btn active' : 'palette-btn'}
              >
                03 Stone
              </button>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-[46px] font-light tracking-[-0.02em] leading-[1.14]">
            Designing clear, low-latency interfaces for live broadcasts and human perception.
          </h1>

          <p
            style={{ color: 'var(--fg-secondary)' }}
            className="font-serif text-lg sm:text-[20px] font-light leading-[1.68]"
          >
            I lead frontend architecture and multi-product design systems at{' '}
            <span style={{ color: 'var(--fg)' }}>Goal Sport Software</span>—crafting real-time
            replay and FIFA-certified video officiating tools used in international stadiums. At{' '}
            <span style={{ color: 'var(--fg)' }}>FI MUNI</span>, my doctoral research explores
            visual literacy and cognitive load through playable browser games such as{' '}
            <a
              href="https://misleading-vis.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
              style={{ color: 'var(--accent)' }}
            >
              <span>Misleading Visualizations</span>
              <span>↗</span>
            </a>
            .
          </p>

          <div className="pt-4 hairline-t hairline-divide">
            <Link
              to="/work"
              className="index-row py-4 flex items-center justify-between gap-4 group"
            >
              <div>
                <div
                  className="font-mono text-[10px] uppercase tracking-wider mb-1"
                  style={{ color: 'var(--fg-secondary)' }}
                >
                  01 · Production Systems
                </div>
                <div className="index-title font-serif text-xl sm:text-2xl font-normal transition-colors">
                  Real-Time Work
                </div>
              </div>
              <span
                className="index-arrow font-mono text-sm transition-transform duration-200"
                style={{ color: 'var(--fg-secondary)' }}
              >
                Explore →
              </span>
            </Link>

            <Link
              to="/research"
              className="index-row py-4 flex items-center justify-between gap-4 group"
            >
              <div>
                <div
                  className="font-mono text-[10px] uppercase tracking-wider mb-1"
                  style={{ color: 'var(--fg-secondary)' }}
                >
                  02 · PhD &amp; Playable Experiments
                </div>
                <div className="index-title font-serif text-xl sm:text-2xl font-normal transition-colors">
                  Research &amp; Games
                </div>
              </div>
              <span
                className="index-arrow font-mono text-sm transition-transform duration-200"
                style={{ color: 'var(--fg-secondary)' }}
              >
                Explore →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <GameOfLife palette={palette} />
    </section>
  );
}
