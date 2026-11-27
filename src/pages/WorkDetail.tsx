import { Link, Navigate, useParams } from 'react-router-dom';

function ReplayDetail() {
  return (
    <article className="max-w-[740px] space-y-10">
      <div className="flex items-center justify-between gap-4 pb-6 hairline-b">
        <Link to="/work" className="editorial-link text-xs">
          ← All Real-Time Work
        </Link>
        <span style={{ color: 'var(--fg-secondary)' }} className="font-mono text-[11px]">
          01 / 03 · Flagship Product
        </span>
      </div>

      <div className="space-y-3">
        <p
          style={{ color: 'var(--accent)' }}
          className="font-mono text-xs tracking-wide uppercase"
        >
          System Architecture &amp; Operator Ergonomics · C++ Engine → QML / React UI
        </p>
        <h1 className="font-serif text-3xl sm:text-[42px] font-light tracking-[-0.02em] leading-[1.15]">
          GS Replay: Multi-Angle Live Broadcast Console
        </h1>
      </div>

      <figure className="space-y-3">
        <div className="gallery-plate w-full aspect-video rounded-md flex flex-col justify-between p-5 sm:p-7 relative overflow-hidden">
          <div
            style={{ color: 'var(--fg-secondary)' }}
            className="flex items-center justify-between font-mono text-[11px] tracking-wider uppercase z-10"
          >
            <span>Plate I · GS Replay Operator Workspace</span>
            <span>Drop-in slot: gs-replay-interface.png</span>
          </div>

          <div className="my-auto py-3 z-10">
            <svg
              viewBox="0 0 640 220"
              className="w-full max-w-[580px] mx-auto h-auto"
              aria-label="Architectural layout schematic of GS Replay multi-angle console"
            >
              <rect
                x="8"
                y="8"
                width="624"
                height="204"
                rx="4"
                fill="none"
                style={{ stroke: 'var(--rule-strong)' }}
                strokeWidth="1"
              />
              <line x1="8" y1="30" x2="632" y2="30" style={{ stroke: 'var(--rule)' }} strokeWidth="1" />
              <circle cx="22" cy="19" r="3.5" style={{ fill: 'var(--accent)' }} />
              <text
                x="32"
                y="22"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8.5"
                style={{ fill: 'var(--fg)' }}
              >
                PROGRAM LIVE · 59.94 FPS
              </text>
              <text
                x="515"
                y="22"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8.5"
                style={{ fill: 'var(--fg-secondary)' }}
              >
                TC 01:24:18:09
              </text>
              <rect
                x="18"
                y="40"
                width="195"
                height="62"
                rx="2"
                style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule-strong)' }}
              />
              <text
                x="26"
                y="54"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                style={{ fill: 'var(--fg-secondary)' }}
              >
                CAM 01 · MAIN WIDE
              </text>
              <rect
                x="221"
                y="40"
                width="195"
                height="62"
                rx="2"
                style={{ fill: 'var(--accent-tint)', stroke: 'var(--accent)' }}
                strokeWidth="1.2"
              />
              <text
                x="229"
                y="54"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                style={{ fill: 'var(--accent)' }}
              >
                CAM 02 · CUED ANGLE [ACTIVE]
              </text>
              <rect
                x="18"
                y="108"
                width="195"
                height="54"
                rx="2"
                style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule-strong)' }}
              />
              <text
                x="26"
                y="122"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                style={{ fill: 'var(--fg-secondary)' }}
              >
                CAM 03 · GOAL LINE
              </text>
              <rect
                x="221"
                y="108"
                width="195"
                height="54"
                rx="2"
                style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule-strong)' }}
              />
              <text
                x="229"
                y="122"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                style={{ fill: 'var(--fg-secondary)' }}
              >
                CAM 04 · HIGH BEHIND
              </text>
              <rect
                x="426"
                y="40"
                width="196"
                height="122"
                rx="2"
                style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule-strong)' }}
              />
              <text
                x="436"
                y="54"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                style={{ fill: 'var(--fg)' }}
              >
                MATCH EVENTS &amp; REPLAY PLAYLIST
              </text>
              <line x1="426" y1="62" x2="622" y2="62" style={{ stroke: 'var(--rule)' }} />
              <text
                x="436"
                y="76"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                style={{ fill: 'var(--accent)' }}
              >
                01 · 38:12 GOAL / 3-CAM PACKAGE
              </text>
              <text
                x="436"
                y="93"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                style={{ fill: 'var(--fg-secondary)' }}
              >
                02 · 34:05 OFFSIDE CHECK
              </text>
              <text
                x="436"
                y="110"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                style={{ fill: 'var(--fg-secondary)' }}
              >
                03 · 29:41 SAVE / SLOW-MO 50%
              </text>
              <text
                x="436"
                y="127"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                style={{ fill: 'var(--fg-secondary)' }}
              >
                04 · 19:14 FOUL / PENALTY BOX
              </text>
              <rect
                x="18"
                y="170"
                width="604"
                height="32"
                rx="2"
                style={{ fill: 'var(--plate-bg)', stroke: 'var(--rule-strong)' }}
              />
              <line
                x1="32"
                y1="186"
                x2="608"
                y2="186"
                style={{ stroke: 'var(--rule-strong)' }}
                strokeWidth="1"
              />
              <rect
                x="210"
                y="177"
                width="145"
                height="18"
                style={{ fill: 'var(--accent-soft)', stroke: 'var(--accent)' }}
                strokeWidth="1"
              />
              <line
                x1="296"
                y1="172"
                x2="296"
                y2="200"
                style={{ stroke: 'var(--accent)' }}
                strokeWidth="1.5"
              />
              <text
                x="32"
                y="182"
                fontFamily="JetBrains Mono, monospace"
                fontSize="7.5"
                style={{ fill: 'var(--fg-secondary)' }}
              >
                IN / OUT CUE RANGE · JOG-SHUTTLE SYNC
              </text>
            </svg>
          </div>

          <div
            style={{ color: 'var(--fg-secondary)' }}
            className="flex items-center justify-between font-mono text-[11px] z-10"
          >
            <span>Sub-second frame scrubbing · Multi-channel ingest</span>
            <span>State model: Live / Preview / Cue</span>
          </div>
        </div>
        <figcaption
          style={{ color: 'var(--fg-secondary)' }}
          className="font-serif italic text-sm"
        >
          Architectural schematic of the GS Replay operator console—designed for rapid multi-camera
          comparison, event tagging, and instant playlist assembly during live broadcasts.
        </figcaption>
      </figure>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2 text-[15px] leading-[1.8]">
        <div className="space-y-2">
          <h3
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: 'var(--fg)' }}
          >
            The Operational Challenge
          </h3>
          <p style={{ color: 'var(--fg-secondary)' }}>
            In live televised sports, replay operators have seconds between a play stopping and the
            broadcast director cutting to replay. Any UI latency, ambiguous button state, or
            cluttered control panel risks an on-air mistake under extreme time pressure.
          </p>
        </div>
        <div className="space-y-2">
          <h3
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: 'var(--fg)' }}
          >
            Architecture &amp; UI Solution
          </h3>
          <p style={{ color: 'var(--fg-secondary)' }}>
            I bridged the high-concurrency <span style={{ color: 'var(--fg)' }}>C++ video engine</span>{' '}
            with reactive <span style={{ color: 'var(--fg)' }}>QML and React/TypeScript</span>{' '}
            interfaces, enforcing strict chromatic separation between <em>Live</em>, <em>Preview</em>,
            and <em>Cue</em> states alongside low-glare dark ergonomics tuned for broadcast trucks.
          </p>
        </div>
      </div>

      <div className="pt-8 hairline-t flex items-center justify-between text-xs font-mono">
        <Link to="/work" className="editorial-link">
          ← Index
        </Link>
        <Link to="/work/var" className="editorial-link">
          Next: GS VAR &amp; VOL →
        </Link>
      </div>
    </article>
  );
}

function VarDetail() {
  return (
    <article className="max-w-[740px] space-y-10">
      <div className="flex items-center justify-between gap-4 pb-6 hairline-b">
        <Link to="/work" className="editorial-link text-xs">
          ← All Real-Time Work
        </Link>
        <span style={{ color: 'var(--fg-secondary)' }} className="font-mono text-[11px]">
          02 / 03 · Stadium &amp; Centralized VAR
        </span>
      </div>

      <div className="space-y-3">
        <p
          style={{ color: 'var(--accent)' }}
          className="font-mono text-xs tracking-wide uppercase"
        >
          Precision Spatial Overlays &amp; Synchronized Review Workflows
        </p>
        <h1 className="font-serif text-3xl sm:text-[42px] font-light tracking-[-0.02em] leading-[1.15]">
          FIFA-Certified Video Officiating (GS VAR &amp; VOL)
        </h1>
      </div>

      <div
        style={{ color: 'var(--fg-secondary)' }}
        className="space-y-5 text-[16px] leading-[1.82]"
      >
        <p>
          Contributed UI architecture and interaction design for{' '}
          <span style={{ color: 'var(--fg)' }}>GS VAR</span>,{' '}
          <span style={{ color: 'var(--fg)' }}>GS VAR Light</span>, and{' '}
          <span style={{ color: 'var(--fg)' }}>Virtual Offside Line (VOL)</span> calibration
          workflows—enabling video match officials and replay operators to scrub synchronized angles
          frame-by-frame, place calibrated pitch-plane overlays, and review critical decisions across
          centralized VAR centers and portable pitch-side setups.
        </p>
        <p>
          Every interaction step was streamlined to eliminate superfluous modal dialogs during active
          match checks, keeping spatial zoom, frame-step controls, and angle switching accessible
          within consistent peripheral reach.
        </p>
      </div>

      <div className="pt-8 hairline-t flex items-center justify-between text-xs font-mono">
        <Link to="/work/replay" className="editorial-link">
          ← Previous: GS Replay
        </Link>
        <Link to="/work/system" className="editorial-link">
          Next: Design System →
        </Link>
      </div>
    </article>
  );
}

function SystemDetail() {
  return (
    <article className="max-w-[740px] space-y-10">
      <div className="flex items-center justify-between gap-4 pb-6 hairline-b">
        <Link to="/work" className="editorial-link text-xs">
          ← All Real-Time Work
        </Link>
        <span style={{ color: 'var(--fg-secondary)' }} className="font-mono text-[11px]">
          03 / 03 · Cross-Suite Standardization
        </span>
      </div>

      <div className="space-y-3">
        <p
          style={{ color: 'var(--accent)' }}
          className="font-mono text-xs tracking-wide uppercase"
        >
          Figma Design Tokens &amp; Component Libraries → QML / Qt &amp; React
        </p>
        <h1 className="font-serif text-3xl sm:text-[42px] font-light tracking-[-0.02em] leading-[1.15]">
          Unified Multi-Product Design System
        </h1>
      </div>

      <figure className="space-y-3">
        <div className="gallery-plate w-full aspect-video rounded-md flex flex-col justify-between p-5 sm:p-7">
          <div
            style={{ color: 'var(--fg-secondary)' }}
            className="flex items-center justify-between font-mono text-[11px] tracking-wider uppercase"
          >
            <span>Plate II · Cross-Product Component Architecture</span>
            <span>Drop-in slot: gs-design-system.png</span>
          </div>

          <div className="my-auto py-4">
            <div className="max-w-[540px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div
                style={{ backgroundColor: 'var(--sheet-bg)' }}
                className="p-3.5 rounded hairline-box space-y-1.5"
              >
                <div
                  className="font-mono text-[10px] uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  01 · Tokens
                </div>
                <div className="font-serif text-sm font-normal">Semantic Color &amp; Density</div>
                <p
                  style={{ color: 'var(--fg-secondary)' }}
                  className="text-[11px] leading-relaxed"
                >
                  Broadcast-room contrast scales, focus rings, and status semantics.
                </p>
              </div>
              <div
                style={{ backgroundColor: 'var(--sheet-bg)' }}
                className="p-3.5 rounded hairline-box space-y-1.5"
              >
                <div
                  className="font-mono text-[10px] uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  02 · Primitives
                </div>
                <div className="font-serif text-sm font-normal">Shared UI Controls</div>
                <p
                  style={{ color: 'var(--fg-secondary)' }}
                  className="text-[11px] leading-relaxed"
                >
                  Timecode inputs, scrubbers, playlists, and tally indicators.
                </p>
              </div>
              <div
                style={{ backgroundColor: 'var(--sheet-bg)' }}
                className="p-3.5 rounded hairline-box space-y-1.5"
              >
                <div
                  className="font-mono text-[10px] uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  03 · Suites
                </div>
                <div className="font-serif text-sm font-normal">4 Live Products</div>
                <p
                  style={{ color: 'var(--fg-secondary)' }}
                  className="text-[11px] leading-relaxed"
                >
                  GS Replay, GS Playout, GS Timekeeper &amp; Venue Control.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ color: 'var(--fg-secondary)' }}
            className="flex items-center justify-between font-mono text-[11px]"
          >
            <span>Design-to-Code Governance</span>
            <span>Figma · QML · React / TypeScript</span>
          </div>
        </div>
        <figcaption
          style={{ color: 'var(--fg-secondary)' }}
          className="font-serif italic text-sm"
        >
          Unified design tokens and reusable interaction primitives allowing arena operators to
          transition seamlessly between replay, timing, and LED perimeter control.
        </figcaption>
      </figure>

      <div
        style={{ color: 'var(--fg-secondary)' }}
        className="space-y-4 text-[15.5px] leading-[1.82]"
      >
        <p>
          As Goal Sport Software expanded from individual tools into an integrated game-day
          production ecosystem, separate product UIs risked diverging in layout and keyboard
          behavior. I authored a shared Figma design system and led frontend standards across
          teams—accelerating feature delivery while making multi-operator training noticeably faster.
        </p>
      </div>

      <div className="pt-8 hairline-t flex items-center justify-between text-xs font-mono">
        <Link to="/work/var" className="editorial-link">
          ← Previous: GS VAR &amp; VOL
        </Link>
        <Link to="/work" className="editorial-link">
          All Real-Time Work →
        </Link>
      </div>
    </article>
  );
}

export default function WorkDetail() {
  const { slug } = useParams();

  return (
    <section className="page-view active pointer-events-auto">
      <div className="max-w-[920px] w-full mx-auto px-6 sm:px-10 pt-14 sm:pt-20 pb-24">
        {slug === 'replay' && <ReplayDetail />}
        {slug === 'var' && <VarDetail />}
        {slug === 'system' && <SystemDetail />}
        {slug !== 'replay' && slug !== 'var' && slug !== 'system' && (
          <Navigate to="/work" replace />
        )}
      </div>
    </section>
  );
}
