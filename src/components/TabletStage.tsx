import { useState } from 'react';

const GAME_URL = 'https://misleading-vis.vercel.app/';

export default function TabletStage({ autoLaunch = false }: { autoLaunch?: boolean }) {
  const [launched, setLaunched] = useState(autoLaunch);
  const [expanded, setExpanded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <figure className="space-y-3">
      <div
        className={expanded ? 'tablet-chassis tablet-expanded' : 'tablet-chassis'}
        id="misleadingTabletChassis"
      >
        <div className="flex items-center justify-between gap-3 pb-2.5 px-1 font-mono text-[10px] text-slate-400">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-slate-700 border border-slate-600 inline-block"
              title="Tablet Front Camera"
            />
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: launched ? '#22C55E' : '#64748B' }}
            />
            <span className="tracking-wider uppercase text-slate-300">
              {launched ? 'PORTRAIT TABLET · LIVE' : 'PORTRAIT TABLET · READY'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {launched && (
              <button
                type="button"
                onClick={() => setReloadKey((key) => key + 1)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Reload
              </button>
            )}
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {expanded ? 'Exit Expand' : 'Expand'}
            </button>
            <a
              href={GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              New Tab ↗
            </a>
          </div>
        </div>

        <div className="tablet-screen">
          {!launched && (
            <div className="w-full h-full relative flex flex-col justify-between bg-[#F8FAFC] text-[#111318]">
              {!imageFailed && (
                <img
                  src="/misleading-vis-screenshot.png"
                  alt="Misleading Visualizations portrait gameplay screenshot"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => setImageFailed(true)}
                />
              )}

              {imageFailed && (
                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7 bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F6]">
                  <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 border-b border-slate-200 pb-2.5">
                    <span>MISLEADING VIS · FI MUNI</span>
                    <span>3:4 PORTRAIT</span>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 my-auto py-2">
                    <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <div
                        className="flex items-center justify-between font-mono text-[9.5px] mb-1.5"
                        style={{ color: 'var(--accent)' }}
                      >
                        <span>TRUNCATED BASELINE</span>
                        <span>+320% ILLUSION</span>
                      </div>
                      <svg viewBox="0 0 240 84" className="w-full h-auto" aria-hidden="true">
                        <line x1="24" y1="8" x2="24" y2="70" stroke="#334155" strokeWidth="1.2" />
                        <line x1="24" y1="70" x2="225" y2="70" stroke="#334155" strokeWidth="1.2" />
                        <polyline
                          points="20,60 28,56 20,52 28,48"
                          fill="none"
                          style={{ stroke: 'var(--accent)' }}
                          strokeWidth="1.4"
                        />
                        <text
                          x="4"
                          y="71"
                          fontFamily="JetBrains Mono, monospace"
                          fontSize="8"
                          style={{ fill: 'var(--accent)' }}
                        >
                          94%
                        </text>
                        <text
                          x="4"
                          y="16"
                          fontFamily="JetBrains Mono, monospace"
                          fontSize="8"
                          fill="#64748B"
                        >
                          98%
                        </text>
                        <rect x="56" y="50" width="38" height="20" rx="2" fill="#94A3B8" />
                        <rect
                          x="136"
                          y="14"
                          width="38"
                          height="56"
                          rx="2"
                          style={{ fill: 'var(--accent)' }}
                        />
                      </svg>
                    </div>
                    <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between font-mono text-[9.5px] mb-1.5 text-slate-500">
                        <span>CALIBRATED SCALE</span>
                        <span>+3.1% ACTUAL</span>
                      </div>
                      <svg viewBox="0 0 240 84" className="w-full h-auto" aria-hidden="true">
                        <line x1="24" y1="8" x2="24" y2="70" stroke="#334155" strokeWidth="1.2" />
                        <line x1="24" y1="70" x2="225" y2="70" stroke="#334155" strokeWidth="1.2" />
                        <text
                          x="8"
                          y="71"
                          fontFamily="JetBrains Mono, monospace"
                          fontSize="8"
                          fill="#64748B"
                        >
                          0%
                        </text>
                        <text
                          x="2"
                          y="16"
                          fontFamily="JetBrains Mono, monospace"
                          fontSize="8"
                          fill="#64748B"
                        >
                          100%
                        </text>
                        <rect x="56" y="18" width="38" height="52" rx="2" fill="#94A3B8" />
                        <rect x="136" y="16" width="38" height="54" rx="2" fill="#1E293B" />
                      </svg>
                    </div>
                  </div>

                  <div className="font-mono text-[9.5px] text-slate-400 flex items-center justify-between">
                    <span>Slot: misleading-vis-screenshot.png</span>
                    <span>misleading-vis.vercel.app</span>
                  </div>
                </div>
              )}

              <div className="relative z-10 mt-auto p-4 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-t from-slate-950/85 via-slate-950/55 to-transparent">
                <div className="text-white">
                  <div className="font-mono text-[9.5px] uppercase tracking-wider text-slate-300">
                    Live Interactive Build
                  </div>
                  <div className="font-serif text-base sm:text-lg font-normal leading-snug">
                    Play on this tablet
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setLaunched(true)}
                  style={{ backgroundColor: 'var(--accent)' }}
                  className="px-4 py-2 rounded-md text-white font-mono text-xs tracking-wide shadow-md hover:opacity-95 transition-opacity cursor-pointer inline-flex items-center gap-2 shrink-0"
                >
                  <span>▶</span>
                  <span>Launch Game</span>
                </button>
              </div>
            </div>
          )}

          {launched && (
            <iframe
              key={reloadKey}
              src={GAME_URL}
              title="Misleading Visualizations — Interactive Portrait Tablet Game"
              className="w-full h-full border-0 bg-white"
              allow="fullscreen"
            />
          )}
        </div>

        <div className="pt-2.5 flex justify-center">
          <span className="w-20 h-1 rounded-full bg-white/20" />
        </div>
      </div>
      <figcaption
        style={{ color: 'var(--fg-secondary)' }}
        className="font-serif italic text-sm max-w-[500px] mx-auto"
      >
        Rather than lecturing players with static rules, the game lets them directly manipulate axes,
        aspect ratios, and encodings on a portrait touch tablet to feel how visual distortion alters
        perception.
      </figcaption>
    </figure>
  );
}
