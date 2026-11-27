import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MiniTabletPreview() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="max-w-[136px] mx-auto rounded-[11px] bg-[#151821] px-1.5 py-2 shadow-sm border border-black/15">
      <div className="relative aspect-[3/4] w-full rounded-[6px] overflow-hidden bg-white">
        {!imageFailed && (
          <img
            src="/misleading-vis-screenshot.png"
            alt="Misleading Visualizations portrait tablet game interface"
            className="w-full h-full object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
        {imageFailed && (
          <div className="w-full h-full flex flex-col justify-between p-2 bg-[#F8FAFC] text-[#111318]">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1 font-mono text-[6.5px] text-slate-500">
              <span className="font-medium text-slate-800">LVL 01</span>
              <span style={{ color: 'var(--accent)' }}>AXIS</span>
            </div>
            <svg viewBox="0 0 110 105" className="w-full h-auto my-auto" aria-hidden="true">
              <line x1="20" y1="8" x2="20" y2="86" stroke="#334155" strokeWidth="1.2" />
              <line x1="20" y1="86" x2="102" y2="86" stroke="#334155" strokeWidth="1.2" />
              <polyline
                points="16,74 24,70 16,66 24,62"
                fill="none"
                style={{ stroke: 'var(--accent)' }}
                strokeWidth="1.3"
              />
              <text
                x="2"
                y="87"
                fontFamily="JetBrains Mono, monospace"
                fontSize="6.5"
                style={{ fill: 'var(--accent)' }}
              >
                94%
              </text>
              <text
                x="2"
                y="14"
                fontFamily="JetBrains Mono, monospace"
                fontSize="6.5"
                fill="#64748B"
              >
                98%
              </text>
              <rect x="34" y="60" width="22" height="26" rx="1.5" fill="#94A3B8" />
              <rect
                x="68"
                y="16"
                width="22"
                height="70"
                rx="1.5"
                style={{ fill: 'var(--accent)' }}
                className="distorted-bar-anim"
              />
            </svg>
            <div className="space-y-1">
              <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full w-2/3 rounded-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              </div>
              <div
                className="text-center py-0.5 rounded font-mono text-[6.5px] text-white"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                PLAY ▶
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Research() {
  const navigate = useNavigate();

  return (
    <section className="page-view active pointer-events-auto">
      <div className="max-w-[920px] w-full mx-auto px-6 sm:px-10 pt-14 sm:pt-20 pb-24">
        <header className="pb-10 hairline-b max-w-[740px]">
          <div className="flex items-center justify-between gap-4 mb-5">
            <span
              style={{ color: 'var(--fg-secondary)' }}
              className="font-mono text-[11px] tracking-widest uppercase"
            >
              PhD Research &amp; Playable Systems · 2020 – Present
            </span>
            <Link to="/" className="editorial-link text-xs">
              ← Home
            </Link>
          </div>

          <h1 className="font-serif text-3xl sm:text-[44px] font-light tracking-[-0.02em] leading-[1.15] mb-5">
            Research &amp; Games
          </h1>

          <p
            style={{ color: 'var(--fg-secondary)' }}
            className="font-serif text-lg sm:text-[20px] font-light leading-[1.68]"
          >
            Doctoral research at the{' '}
            <span style={{ color: 'var(--fg)' }}>
              Faculty of Informatics, Masaryk University (FI MUNI)
            </span>{' '}
            exploring how people read, misinterpret, and learn from interactive data
            visualizations—translating empirical HCI findings into playable browser games and 3D
            learning environments.
          </p>
        </header>

        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01: Misleading Visualizations */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => navigate('/research/misleading')}
            onKeyDown={(event) => {
              if (event.key === 'Enter') navigate('/research/misleading');
            }}
            className="project-select-card card-game-playful"
          >
            <div style={{ backgroundColor: 'var(--card-preview-bg)' }} className="p-3.5 hairline-b">
              <div className="flex items-center justify-between font-mono text-[9.5px] mb-2.5">
                <span
                  className="px-1.5 py-0.5 rounded font-medium"
                  style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  PORTRAIT TABLET
                </span>
                <span style={{ color: 'var(--fg-secondary)' }}>3:4 · TOUCH</span>
              </div>

              <MiniTabletPreview />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <div
                  className="font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--accent)' }}
                >
                  01 · Interactive Visual Literacy
                </div>
                <h2 className="font-serif text-xl font-normal leading-snug">
                  Misleading Visualizations
                </h2>
                <p
                  style={{ color: 'var(--fg-secondary)' }}
                  className="text-xs leading-relaxed"
                >
                  A tablet-first browser game where players diagnose and repair truncated axes, area
                  distortions, and deceptive encodings.
                </p>
              </div>
              <div className="pt-3 hairline-t flex items-center justify-between font-mono text-[11px]">
                <Link
                  to="/research/misleading?launch=1"
                  onClick={(event) => event.stopPropagation()}
                  className="editorial-link cursor-pointer"
                  style={{ color: 'var(--accent)' }}
                >
                  <span>Play in Tablet</span>
                  <span>▶</span>
                </Link>
                <span
                  className="card-cta-arrow transition-transform duration-200"
                  style={{ color: 'var(--fg)' }}
                >
                  Case Study →
                </span>
              </div>
            </div>
          </div>

          {/* Card 02: Vis4School */}
          <Link to="/research/vis4school" className="project-select-card">
            <div style={{ backgroundColor: 'var(--card-preview-bg)' }} className="p-4 hairline-b">
              <div
                className="flex items-center justify-between font-mono text-[9.5px] mb-3"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <span>UNITY / C# · 3D</span>
                <span>PYTHON TELEMETRY</span>
              </div>
              <svg viewBox="0 0 220 96" className="w-full h-auto" aria-hidden="true">
                <polygon
                  points="64,18 106,36 106,76 64,58"
                  style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule-strong)' }}
                  strokeWidth="1"
                />
                <polygon
                  points="106,36 148,18 148,58 106,76"
                  style={{ fill: 'var(--accent-tint)', stroke: 'var(--accent)' }}
                  strokeWidth="1"
                />
                <polygon
                  points="64,18 106,2 148,18 106,36"
                  style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule-strong)' }}
                  strokeWidth="1"
                />
                <circle cx="94" cy="36" r="2.5" style={{ fill: 'var(--fg)' }} />
                <circle cx="116" cy="44" r="2.5" style={{ fill: 'var(--accent)' }} />
                <circle cx="104" cy="54" r="2" style={{ fill: 'var(--fg)' }} />
                <text
                  x="14"
                  y="88"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="6.5"
                  style={{ fill: 'var(--fg-secondary)' }}
                >
                  COGNITIVE LOAD · PROGRESSIVE DISCLOSURE
                </text>
              </svg>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <div
                  className="font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--fg-secondary)' }}
                >
                  02 · Adaptive 3D Platform
                </div>
                <h2 className="font-serif text-xl font-normal leading-snug">
                  Vis4School: Spatial Data Literacy
                </h2>
                <p
                  style={{ color: 'var(--fg-secondary)' }}
                  className="text-xs leading-relaxed"
                >
                  Interactive 3D visualization workspace in Unity/C# paired with Python clickstream
                  pipelines measuring cognitive load.
                </p>
              </div>
              <div
                className="pt-3 hairline-t flex items-center justify-between font-mono text-[11px]"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <span>FI MUNI · IEEE VIS</span>
                <span
                  className="card-cta-arrow transition-transform duration-200"
                  style={{ color: 'var(--fg)' }}
                >
                  Inspect →
                </span>
              </div>
            </div>
          </Link>

          {/* Card 03: Publications */}
          <Link to="/research/papers" className="project-select-card">
            <div style={{ backgroundColor: 'var(--card-preview-bg)' }} className="p-4 hairline-b">
              <div
                className="flex items-center justify-between font-mono text-[9.5px] mb-3"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <span>PEER-REVIEWED</span>
                <span style={{ color: 'var(--accent)' }}>6 PAPERS</span>
              </div>
              <svg viewBox="0 0 220 96" className="w-full h-auto" aria-hidden="true">
                <rect
                  x="16"
                  y="10"
                  width="188"
                  height="76"
                  rx="2"
                  style={{ fill: 'var(--bg)', stroke: 'var(--rule-strong)' }}
                />
                <line
                  x1="28"
                  y1="24"
                  x2="92"
                  y2="24"
                  style={{ stroke: 'var(--accent)' }}
                  strokeWidth="1.5"
                />
                <line
                  x1="28"
                  y1="36"
                  x2="186"
                  y2="36"
                  style={{ stroke: 'var(--rule-strong)' }}
                  strokeWidth="1"
                />
                <line
                  x1="28"
                  y1="46"
                  x2="164"
                  y2="46"
                  style={{ stroke: 'var(--rule)' }}
                  strokeWidth="1"
                />
                <line
                  x1="28"
                  y1="60"
                  x2="178"
                  y2="60"
                  style={{ stroke: 'var(--rule-strong)' }}
                  strokeWidth="1"
                />
                <line
                  x1="28"
                  y1="70"
                  x2="148"
                  y2="70"
                  style={{ stroke: 'var(--rule)' }}
                  strokeWidth="1"
                />
              </svg>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <div
                  className="font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--fg-secondary)' }}
                >
                  03 · Academic Bibliography
                </div>
                <h2 className="font-serif text-xl font-normal leading-snug">
                  IEEE VIS &amp; ACM SIGCHI / TEI Papers
                </h2>
                <p
                  style={{ color: 'var(--fg-secondary)' }}
                  className="text-xs leading-relaxed"
                >
                  Peer-reviewed studies on interaction feedback models, visual perception, and
                  tangible data representations.
                </p>
              </div>
              <div
                className="pt-3 hairline-t flex items-center justify-between font-mono text-[11px]"
                style={{ color: 'var(--fg-secondary)' }}
              >
                <span>IEEE VIS 2026 · ACM</span>
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
