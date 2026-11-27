export default function PaperGrain() {
  return (
    <svg className="paper-grain" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <filter id="archivalNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#archivalNoise)" />
    </svg>
  );
}
