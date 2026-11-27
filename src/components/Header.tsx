import { Link, NavLink } from 'react-router-dom';
import type { Palette } from '../App';

type Props = {
  palette: Palette;
  onPaletteChange: (palette: Palette) => void;
};

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-item active' : 'nav-item';

export default function Header({ palette, onPaletteChange }: Props) {
  return (
    <header
      style={{ backgroundColor: 'var(--header-bg)' }}
      className="sticky top-0 z-30 backdrop-blur-md hairline-b pointer-events-none"
    >
      <div className="max-w-[980px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="pointer-events-auto font-serif text-lg sm:text-[20px] font-normal tracking-[-0.01em] hover:opacity-75 transition-opacity"
        >
          Magdaléna Kejstová
        </Link>

        <div className="pointer-events-auto flex items-center gap-4 sm:gap-7">
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-4 sm:gap-7 text-xs sm:text-[13px] font-normal tracking-wide"
          >
            <NavLink to="/" end className={navClass}>
              <span className="nav-dot" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/work" className={navClass}>
              <span className="nav-dot" />
              <span>Real-Time Work</span>
            </NavLink>
            <NavLink to="/research" className={navClass}>
              <span className="nav-dot" />
              <span>Research &amp; Games</span>
            </NavLink>
          </nav>

          <div
            aria-label="Color palette switcher"
            className="hidden sm:flex items-center gap-1 pl-4 hairline-l font-mono text-[10.5px]"
          >
            <button
              type="button"
              onClick={() => onPaletteChange('vellum')}
              className={palette === 'vellum' ? 'palette-btn active' : 'palette-btn'}
              title="01 · Drafting Vellum & Cobalt"
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: '#1D4ED8' }}
              />
              <span>01 Vellum</span>
            </button>
            <button
              type="button"
              onClick={() => onPaletteChange('stone')}
              className={palette === 'stone' ? 'palette-btn active' : 'palette-btn'}
              title="03 · Cool Mineral Stone & Ultramarine"
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: '#3730A3' }}
              />
              <span>03 Stone</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
