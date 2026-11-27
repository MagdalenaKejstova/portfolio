import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom';
import TabletStage from '../components/TabletStage';

function MisleadingDetail() {
  const [searchParams] = useSearchParams();
  const autoLaunch = searchParams.get('launch') === '1';

  return (
    <article className="max-w-[820px] space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 hairline-b">
        <Link to="/research" className="editorial-link text-xs">
          ← All Research &amp; Games
        </Link>
        <div className="flex items-center gap-5">
          <a
            href="https://misleading-vis.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link text-xs"
            style={{ color: 'var(--accent)' }}
          >
            ▶ Launch in Tablet
          </a>
          <a
            href="https://misleading-vis.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link text-xs"
            style={{ color: 'var(--fg-secondary)' }}
          >
            <span>Open in New Tab</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="space-y-3 max-w-[740px]">
        <p
          style={{ color: 'var(--accent)' }}
          className="font-mono text-xs tracking-wide uppercase"
        >
          Tablet-First Browser Game · End-to-End Design &amp; Engineering (React, TypeScript, SVG)
        </p>
        <h1 className="font-serif text-3xl sm:text-[42px] font-light tracking-[-0.02em] leading-[1.15]">
          Misleading Visualizations
        </h1>
      </div>

      <TabletStage autoLaunch={autoLaunch} />

      <div
        style={{ color: 'var(--fg-secondary)' }}
        className="space-y-4 text-[15.5px] leading-[1.82] max-w-[740px]"
      >
        <p>
          Built to translate visualization literacy research into an accessible, self-guided tablet
          and browser experience. Players diagnose and repair deceptive charts across progressive
          levels—experiencing firsthand how truncated baselines, area-versus-radius scaling, and
          cherry-picked intervals skew human judgment.
        </p>
      </div>

      <div className="pt-8 hairline-t flex items-center justify-between text-xs font-mono max-w-[740px]">
        <Link to="/research" className="editorial-link">
          ← Index
        </Link>
        <Link to="/research/vis4school" className="editorial-link">
          Next: Vis4School →
        </Link>
      </div>
    </article>
  );
}

function Vis4SchoolDetail() {
  return (
    <article className="max-w-[740px] space-y-10">
      <div className="flex items-center justify-between gap-4 pb-6 hairline-b">
        <Link to="/research" className="editorial-link text-xs">
          ← All Research &amp; Games
        </Link>
        <span style={{ color: 'var(--fg-secondary)' }} className="font-mono text-[11px]">
          02 / 03 · FI MUNI · IEEE VIS
        </span>
      </div>

      <div className="space-y-3">
        <p
          style={{ color: 'var(--accent)' }}
          className="font-mono text-xs tracking-wide uppercase"
        >
          Principal Researcher &amp; Lead Developer · Unity, C#, Python Telemetry (pandas, NumPy,
          SciPy)
        </p>
        <h1 className="font-serif text-3xl sm:text-[42px] font-light tracking-[-0.02em] leading-[1.15]">
          Vis4School: Adaptive 3D Visualization Literacy
        </h1>
      </div>

      <figure className="space-y-3">
        <div className="gallery-plate w-full aspect-video rounded-md flex flex-col justify-between p-5 sm:p-7">
          <div
            style={{ color: 'var(--fg-secondary)' }}
            className="flex items-center justify-between font-mono text-[11px] tracking-wider uppercase"
          >
            <span>Plate IV · Vis4School 3D Interactive Environment</span>
            <span>Drop-in slot: vis4school-ieee-vis.png</span>
          </div>

          <div className="my-auto text-center space-y-2 py-6">
            <p className="font-serif text-base sm:text-lg font-normal">
              Spatial Data Exploration &amp; Real-Time Interaction Telemetry
            </p>
            <p style={{ color: 'var(--fg-secondary)' }} className="font-mono text-xs">
              Unity / C# Rendering Engine · Python Clickstream &amp; Cognitive Load Pipeline
            </p>
          </div>

          <div
            style={{ color: 'var(--fg-secondary)' }}
            className="flex items-center justify-between font-mono text-[11px]"
          >
            <span>Empirical User Studies</span>
            <span>Progressive Disclosure Model</span>
          </div>
        </div>
        <figcaption
          style={{ color: 'var(--fg-secondary)' }}
          className="font-serif italic text-sm"
        >
          Interactive 3D data visualization workspace instrumented with fine-grained event logging to
          evaluate how interface complexity affects comprehension.
        </figcaption>
      </figure>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2 text-[15px] leading-[1.8]">
        <div className="space-y-2">
          <h3
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: 'var(--fg)' }}
          >
            Instrumentation &amp; Telemetry
          </h3>
          <p style={{ color: 'var(--fg-secondary)' }}>
            Architected the interactive 3D platform in{' '}
            <span style={{ color: 'var(--fg)' }}>Unity/C#</span> and built{' '}
            <span style={{ color: 'var(--fg)' }}>Python</span> analytics pipelines (pandas, NumPy,
            SciPy) to process real-time clickstreams, camera trajectories, and dwell times across
            student cohorts.
          </p>
        </div>
        <div className="space-y-2">
          <h3
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: 'var(--fg)' }}
          >
            Key Empirical Finding
          </h3>
          <p style={{ color: 'var(--fg-secondary)' }}>
            Exposing dense analytical controls simultaneously triggered measurable cognitive overload
            and hesitation. Introducing staged{' '}
            <span style={{ color: 'var(--fg)' }}>progressive disclosure</span> significantly improved
            task accuracy and speed of visual insight.
          </p>
        </div>
      </div>

      <div className="pt-8 hairline-t flex items-center justify-between text-xs font-mono">
        <Link to="/research/misleading" className="editorial-link">
          ← Previous: Misleading Visualizations
        </Link>
        <Link to="/research/papers" className="editorial-link">
          Next: Publications →
        </Link>
      </div>
    </article>
  );
}

function PapersDetail() {
  return (
    <article className="max-w-[740px] space-y-10">
      <div className="flex items-center justify-between gap-4 pb-6 hairline-b">
        <Link to="/research" className="editorial-link text-xs">
          ← All Research &amp; Games
        </Link>
        <a
          href="https://scholar.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-link text-xs"
        >
          <span>Google Scholar</span>
          <span>↗</span>
        </a>
      </div>

      <div className="space-y-3">
        <p
          style={{ color: 'var(--accent)' }}
          className="font-mono text-xs tracking-wide uppercase"
        >
          Selected Peer-Reviewed Publications (6 Total)
        </p>
        <h1 className="font-serif text-3xl sm:text-[42px] font-light tracking-[-0.02em] leading-[1.15]">
          IEEE VIS &amp; ACM SIGCHI / TEI Papers
        </h1>
      </div>

      <div className="space-y-8 pt-2">
        <div className="hairline-l pl-6 space-y-2">
          <div style={{ color: 'var(--accent)' }} className="font-mono text-xs">
            IEEE VIS · Lead Author (2026)
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
            Interaction Feedback Models, Visual Perception &amp; Interactive Data Comprehension
          </h3>
          <p
            style={{ color: 'var(--fg-secondary)' }}
            className="text-sm leading-[1.7]"
          >
            <span style={{ color: 'var(--fg)' }}>Design takeaway:</span> Tight, continuous visual
            feedback during direct manipulation builds accurate mental models faster than static
            legends or modal controls.
          </p>
        </div>

        <div className="hairline-l pl-6 space-y-2">
          <div style={{ color: 'var(--accent)' }} className="font-mono text-xs">
            IEEE VIS / EuroVis · Empirical HCI Evaluation
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
            Scaffolding Visual Literacy and Measuring Cognitive Load in Interactive Visualizations
          </h3>
          <p
            style={{ color: 'var(--fg-secondary)' }}
            className="text-sm leading-[1.7]"
          >
            <span style={{ color: 'var(--fg)' }}>Design takeaway:</span> Pairing telemetry analysis
            with progressive disclosure reduces onboarding friction in data-dense analytical
            interfaces.
          </p>
        </div>

        <div className="hairline-l pl-6 space-y-2">
          <div style={{ color: 'var(--accent)' }} className="font-mono text-xs">
            ACM SIGCHI / TEI · Tangible &amp; Spatial Interaction
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
            Tangible Data Representations and Interactive UI Feedback Loops
          </h3>
          <p
            style={{ color: 'var(--fg-secondary)' }}
            className="text-sm leading-[1.7]"
          >
            <span style={{ color: 'var(--fg)' }}>Design takeaway:</span> Spatial and tactile
            metaphors lower the barrier to exploring multi-dimensional datasets for non-expert users.
          </p>
        </div>
      </div>

      <div className="pt-8 hairline-t flex items-center justify-between text-xs font-mono">
        <Link to="/research/vis4school" className="editorial-link">
          ← Previous: Vis4School
        </Link>
        <Link to="/research" className="editorial-link">
          All Research &amp; Games →
        </Link>
      </div>
    </article>
  );
}

export default function ResearchDetail() {
  const { slug } = useParams();

  return (
    <section className="page-view active pointer-events-auto">
      <div className="max-w-[920px] w-full mx-auto px-6 sm:px-10 pt-14 sm:pt-20 pb-24">
        {slug === 'misleading' && <MisleadingDetail />}
        {slug === 'vis4school' && <Vis4SchoolDetail />}
        {slug === 'papers' && <PapersDetail />}
        {slug !== 'misleading' && slug !== 'vis4school' && slug !== 'papers' && (
          <Navigate to="/research" replace />
        )}
      </div>
    </section>
  );
}
