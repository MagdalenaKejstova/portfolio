import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <section className="page-view active pointer-events-auto">
      <div className="max-w-[920px] w-full mx-auto px-6 sm:px-10 pt-14 sm:pt-20 pb-24">
        <header className="pb-10 hairline-b max-w-[740px]">
          <div className="flex items-center justify-between gap-4 mb-5">
            <span
              style={{ color: 'var(--fg-secondary)' }}
              className="font-mono text-[11px] tracking-widest uppercase"
            >
              Production Engineering &amp; Design Systems · 2017 – Present
            </span>
            <Link to="/" className="editorial-link text-xs">
              ← Home
            </Link>
          </div>

          <h1 className="font-serif text-3xl sm:text-[44px] font-light tracking-[-0.02em] leading-[1.15] mb-5">
            Real-Time Work
          </h1>

          <p
            style={{ color: 'var(--fg-secondary)' }}
            className="font-serif text-lg sm:text-[20px] font-light leading-[1.68]"
          >
            Seven years leading frontend engineering and UI architecture at{' '}
            <span style={{ color: 'var(--fg)' }}>Goal Sport Software</span>—building low-latency
            replay, playout, and FIFA-certified video officiating interfaces deployed in live
            broadcasts and international arenas including{' '}
            <span style={{ color: 'var(--fg)' }}>Old Trafford</span> and{' '}
            <span style={{ color: 'var(--fg)' }}>Tottenham Hotspur Stadium</span>.
          </p>
        </header>

        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01: GS Replay */}
          <Link to="/work/replay" className="project-select-card card-dark-console">
            <div className="p-4 border-b border-white/10 bg-[#0B0D12]">
              <div className="flex items-center justify-between font-mono text-[9.5px] text-slate-400 mb-3">
                <span className="inline-flex items-center gap-1.5 text-slate-200">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                  LIVE · 59.94 FPS
                </span>
                <span>TC 01:24:18</span>
              </div>
              <svg viewBox="0 0 220 96" className="w-full h-auto" aria-hidden="true">
                <rect
                  x="2"
                  y="2"
                  width="102"
                  height="44"
                  rx="2"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.16)"
                />
                <text
                  x="8"
                  y="13"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  fill="#94A3B8"
                >
                  CAM 01 · WIDE
                </text>
                <rect
                  x="112"
                  y="2"
                  width="106"
                  height="44"
                  rx="2"
                  style={{ fill: 'var(--accent-soft)', stroke: 'var(--accent)' }}
                  strokeWidth="1.2"
                />
                <text
                  x="118"
                  y="13"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  fill="#93C5FD"
                >
                  CAM 02 · CUED
                </text>
                <rect
                  x="2"
                  y="54"
                  width="216"
                  height="38"
                  rx="2"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.14)"
                />
                <line
                  x1="12"
                  y1="74"
                  x2="208"
                  y2="74"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1"
                />
                <rect
                  x="76"
                  y="64"
                  width="64"
                  height="20"
                  style={{ fill: 'var(--accent-soft)', stroke: 'var(--accent)' }}
                  strokeWidth="1"
                />
                <line x1="114" y1="59" x2="114" y2="88" stroke="#F4F5F7" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  01 · Flagship Broadcast Console
                </div>
                <h2 className="font-serif text-xl font-normal text-white leading-snug">
                  GS Replay: Multi-Angle Live Operator UI
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sub-second frame scrubbing, camera comparison, and high-contrast truck ergonomics
                  bridging C++ and QML/React.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-300">
                <span>C++ · QML · React</span>
                <span className="card-cta-arrow transition-transform duration-200">Inspect →</span>
              </div>
            </div>
          </Link>

          {/* Card 02: GS VAR & VOL */}
          <Link to="/work/var" className="project-select-card">
            <div style={{ backgroundColor: 'var(--card-preview-bg)' }} className="p-4 hairline-b">
              <div
                className="flex items-center justify-between font-mono text-[9.5px] mb-3"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <span>FIFA-CERTIFIED VAR</span>
                <span style={{ color: 'var(--accent)' }}>VOL CALIBRATED</span>
              </div>
              <svg viewBox="0 0 220 96" className="w-full h-auto" aria-hidden="true">
                <polygon
                  points="28,14 192,14 214,86 6,86"
                  style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule-strong)' }}
                  strokeWidth="1"
                />
                <line
                  x1="110"
                  y1="14"
                  x2="110"
                  y2="86"
                  style={{ stroke: 'var(--rule)' }}
                  strokeDasharray="3 2"
                />
                <line
                  x1="142"
                  y1="14"
                  x2="156"
                  y2="86"
                  style={{ stroke: 'var(--accent)' }}
                  strokeWidth="1.5"
                />
                <circle
                  cx="149"
                  cy="50"
                  r="4"
                  fill="none"
                  style={{ stroke: 'var(--accent)' }}
                  strokeWidth="1.2"
                />
                <circle cx="149" cy="50" r="1.5" style={{ fill: 'var(--accent)' }} />
                <text
                  x="14"
                  y="26"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  style={{ fill: 'var(--fg-secondary)' }}
                >
                  SYNC ANGLE 03 · 120HZ
                </text>
              </svg>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <div
                  className="font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--fg-secondary)' }}
                >
                  02 · Video Officiating
                </div>
                <h2 className="font-serif text-xl font-normal leading-snug">
                  GS VAR &amp; Virtual Offside Line
                </h2>
                <p
                  style={{ color: 'var(--fg-secondary)' }}
                  className="text-xs leading-relaxed"
                >
                  Synchronized multi-angle review workflows and calibrated pitch-plane overlays for
                  centralized and pitch-side VAR.
                </p>
              </div>
              <div
                className="pt-3 hairline-t flex items-center justify-between font-mono text-[11px]"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <span>Spatial Overlays · UI</span>
                <span
                  className="card-cta-arrow transition-transform duration-200"
                  style={{ color: 'var(--fg)' }}
                >
                  Inspect →
                </span>
              </div>
            </div>
          </Link>

          {/* Card 03: Design System */}
          <Link to="/work/system" className="project-select-card">
            <div style={{ backgroundColor: 'var(--card-preview-bg)' }} className="p-4 hairline-b">
              <div
                className="flex items-center justify-between font-mono text-[9.5px] mb-3"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <span>DESIGN TOKENS · V3</span>
                <span>4 SUITES</span>
              </div>
              <svg viewBox="0 0 220 96" className="w-full h-auto" aria-hidden="true">
                <rect x="6" y="8" width="64" height="24" rx="2" style={{ fill: 'var(--accent)' }} />
                <text
                  x="12"
                  y="23"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  fill="#FFFFFF"
                >
                  STATE.LIVE
                </text>
                <rect x="78" y="8" width="64" height="24" rx="2" style={{ fill: 'var(--fg)' }} />
                <text
                  x="84"
                  y="23"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  fill="#FFFFFF"
                >
                  STATE.CUE
                </text>
                <rect
                  x="150"
                  y="8"
                  width="64"
                  height="24"
                  rx="2"
                  fill="none"
                  style={{ stroke: 'var(--rule-strong)' }}
                />
                <text
                  x="156"
                  y="23"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  style={{ fill: 'var(--fg)' }}
                >
                  STATE.IDLE
                </text>
                <rect
                  x="6"
                  y="42"
                  width="208"
                  height="18"
                  rx="2"
                  style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule-strong)' }}
                />
                <text
                  x="12"
                  y="54"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  style={{ fill: 'var(--fg-secondary)' }}
                >
                  PRIMITIVES · TIMECODE / TALLY / SCRUBBER
                </text>
                <rect
                  x="6"
                  y="68"
                  width="208"
                  height="20"
                  rx="2"
                  style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule)' }}
                />
                <text
                  x="12"
                  y="81"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  style={{ fill: 'var(--fg-secondary)' }}
                >
                  REPLAY · PLAYOUT · TIMEKEEPER · VENUE
                </text>
              </svg>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <div
                  className="font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--fg-secondary)' }}
                >
                  03 · Cross-Suite Architecture
                </div>
                <h2 className="font-serif text-xl font-normal leading-snug">
                  Unified Multi-Product Design System
                </h2>
                <p
                  style={{ color: 'var(--fg-secondary)' }}
                  className="text-xs leading-relaxed"
                >
                  Shared Figma design tokens, keyboard grammar, and component libraries unifying
                  four live arena production tools.
                </p>
              </div>
              <div
                className="pt-3 hairline-t flex items-center justify-between font-mono text-[11px]"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <span>Figma · Design-to-Code</span>
                <span
                  className="card-cta-arrow transition-transform duration-200"
                  style={{ color: 'var(--fg)' }}
                >
                  Inspect →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
