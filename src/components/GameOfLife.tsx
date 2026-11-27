import { useEffect, useRef, useState } from 'react';
import type { Palette } from '../App';

type PatternName = 'glider' | 'pulsar' | 'bloom';

const CELL_SIZE = 20;
const TICK_INTERVAL_MS = 165;

const PATTERNS: Record<PatternName, ReadonlyArray<readonly [number, number]>> = {
  glider: [
    [0, -1],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ],
  bloom: [
    [0, -2],
    [-1, -1],
    [1, -1],
    [-2, 0],
    [2, 0],
    [-1, 1],
    [1, 1],
    [0, 2],
  ],
  pulsar: [
    [-2, -6], [-3, -6], [-4, -6], [2, -6], [3, -6], [4, -6],
    [-6, -4], [-1, -4], [1, -4], [6, -4],
    [-6, -3], [-1, -3], [1, -3], [6, -3],
    [-6, -2], [-1, -2], [1, -2], [6, -2],
    [-2, -1], [-3, -1], [-4, -1], [2, -1], [3, -1], [4, -1],
    [-2, 1], [-3, 1], [-4, 1], [2, 1], [3, 1], [4, 1],
    [-6, 2], [-1, 2], [1, 2], [6, 2],
    [-6, 3], [-1, 3], [1, 3], [6, 3],
    [-6, 4], [-1, 4], [1, 4], [6, 4],
    [-2, 6], [-3, 6], [-4, 6], [2, 6], [3, 6], [4, 6],
  ],
};

const PALETTES: Record<Palette, { accentHex: string; accentRgb: string; inkRgb: string }> = {
  vellum: { accentHex: '#1D4ED8', accentRgb: '29, 78, 216', inkRgb: '17, 19, 24' },
  stone: { accentHex: '#3730A3', accentRgb: '55, 48, 163', inkRgb: '20, 21, 26' },
};

type Engine = {
  cols: number;
  rows: number;
  grid: Uint8Array;
  next: Uint8Array;
  drawing: boolean;
  hover: { col: number; row: number; active: boolean };
  lastTick: number;
};

function wrapCoord(value: number, max: number) {
  return ((value % max) + max) % max;
}

function stampPattern(engine: Engine, centerCol: number, centerRow: number, pattern: PatternName) {
  if (!engine.cols || !engine.rows) return;
  const offsets = PATTERNS[pattern] ?? PATTERNS.glider;
  for (const [dx, dy] of offsets) {
    const c = wrapCoord(centerCol + dx, engine.cols);
    const r = wrapCoord(centerRow + dy, engine.rows);
    engine.grid[r * engine.cols + c] = 1;
  }
}

function seedInitialPatterns(engine: Engine) {
  if (!engine.cols || !engine.rows) return;
  engine.grid.fill(0);
  stampPattern(engine, Math.floor(engine.cols * 0.78), Math.floor(engine.rows * 0.28), 'pulsar');
  stampPattern(engine, Math.floor(engine.cols * 0.72), Math.floor(engine.rows * 0.68), 'glider');
  stampPattern(engine, Math.floor(engine.cols * 0.86), Math.floor(engine.rows * 0.52), 'bloom');
  stampPattern(engine, Math.floor(engine.cols * 0.14), Math.floor(engine.rows * 0.78), 'glider');
}

function resizeCanvas(
  engine: Engine,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  preserveState: boolean,
) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const newCols = Math.max(12, Math.ceil(width / CELL_SIZE));
  const newRows = Math.max(12, Math.ceil(height / CELL_SIZE));
  const newGrid = new Uint8Array(newCols * newRows);

  if (preserveState && engine.cols > 0 && engine.rows > 0) {
    const copyCols = Math.min(engine.cols, newCols);
    const copyRows = Math.min(engine.rows, newRows);
    for (let r = 0; r < copyRows; r++) {
      for (let c = 0; c < copyCols; c++) {
        newGrid[r * newCols + c] = engine.grid[r * engine.cols + c];
      }
    }
    engine.cols = newCols;
    engine.rows = newRows;
    engine.grid = newGrid;
    engine.next = new Uint8Array(newCols * newRows);
  } else {
    engine.cols = newCols;
    engine.rows = newRows;
    engine.grid = newGrid;
    engine.next = new Uint8Array(newCols * newRows);
    seedInitialPatterns(engine);
  }
}

function stepGameOfLife(engine: Engine) {
  const { cols, rows, grid, next } = engine;
  if (!cols || !rows) return;
  let liveCount = 0;

  for (let r = 0; r < rows; r++) {
    const rUp = r === 0 ? rows - 1 : r - 1;
    const rDown = r === rows - 1 ? 0 : r + 1;

    for (let c = 0; c < cols; c++) {
      const cLeft = c === 0 ? cols - 1 : c - 1;
      const cRight = c === cols - 1 ? 0 : c + 1;

      const neighbors =
        (grid[rUp * cols + cLeft] > 0 ? 1 : 0) +
        (grid[rUp * cols + c] > 0 ? 1 : 0) +
        (grid[rUp * cols + cRight] > 0 ? 1 : 0) +
        (grid[r * cols + cLeft] > 0 ? 1 : 0) +
        (grid[r * cols + cRight] > 0 ? 1 : 0) +
        (grid[rDown * cols + cLeft] > 0 ? 1 : 0) +
        (grid[rDown * cols + c] > 0 ? 1 : 0) +
        (grid[rDown * cols + cRight] > 0 ? 1 : 0);

      const idx = r * cols + c;
      const currentAge = grid[idx];

      if (currentAge > 0) {
        if (neighbors === 2 || neighbors === 3) {
          next[idx] = Math.min(currentAge + 1, 255);
          liveCount++;
        } else {
          next[idx] = 0;
        }
      } else if (neighbors === 3) {
        next[idx] = 1;
        liveCount++;
      } else {
        next[idx] = 0;
      }
    }
  }

  engine.grid = next;
  engine.next = grid;

  if (liveCount === 0) {
    stampPattern(engine, Math.floor(cols * 0.76), Math.floor(rows * 0.34), 'glider');
  }
}

function renderGameOfLife(
  ctx: CanvasRenderingContext2D,
  engine: Engine,
  palette: Palette,
  pattern: PatternName,
) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const colors = PALETTES[palette] ?? PALETTES.vellum;
  const { cols, rows, grid, hover } = engine;

  ctx.clearRect(0, 0, width, height);

  // 1. Subtle architectural lattice intersection dots
  ctx.fillStyle = `rgba(${colors.inkRgb}, 0.09)`;
  for (let r = 0; r <= rows; r++) {
    const y = r * CELL_SIZE;
    for (let c = 0; c <= cols; c++) {
      ctx.fillRect(c * CELL_SIZE - 0.5, y - 0.5, 1, 1);
    }
  }

  // 2. Render live cells as crisp ink glyphs
  for (let r = 0; r < rows; r++) {
    const cy = r * CELL_SIZE + CELL_SIZE * 0.5;
    for (let c = 0; c < cols; c++) {
      const age = grid[r * cols + c];
      if (age === 0) continue;

      const cx = c * CELL_SIZE + CELL_SIZE * 0.5;

      if (age === 1) {
        ctx.strokeStyle = `rgba(${colors.accentRgb}, 0.45)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, CELL_SIZE * 0.34, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = colors.accentHex;
        ctx.beginPath();
        ctx.arc(cx, cy, CELL_SIZE * 0.16, 0, Math.PI * 2);
        ctx.fill();
      } else {
        const size = age <= 4 ? CELL_SIZE * 0.56 : CELL_SIZE * 0.46;
        const alpha = age <= 4 ? 0.68 : 0.42;
        ctx.fillStyle = `rgba(${colors.inkRgb}, ${alpha})`;
        ctx.fillRect(cx - size * 0.5, cy - size * 0.5, size, size);
      }
    }
  }

  // 3. Hover ghost preview of the selected stamp pattern
  if (hover.active && !engine.drawing) {
    const offsets = PATTERNS[pattern] ?? PATTERNS.glider;
    ctx.strokeStyle = `rgba(${colors.accentRgb}, 0.42)`;
    ctx.lineWidth = 1;
    for (const [dx, dy] of offsets) {
      const c = wrapCoord(hover.col + dx, cols);
      const r = wrapCoord(hover.row + dy, rows);
      ctx.strokeRect(c * CELL_SIZE + 3, r * CELL_SIZE + 3, CELL_SIZE - 6, CELL_SIZE - 6);
    }
  }
}

export default function GameOfLife({ palette }: { palette: Palette }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<Engine>({
    cols: 0,
    rows: 0,
    grid: new Uint8Array(0),
    next: new Uint8Array(0),
    drawing: false,
    hover: { col: -1, row: -1, active: false },
    lastTick: 0,
  });
  const [playing, setPlaying] = useState(true);
  const [pattern, setPattern] = useState<PatternName>('glider');
  const playingRef = useRef(playing);
  const paletteRef = useRef(palette);
  const patternRef = useRef(pattern);

  playingRef.current = playing;
  paletteRef.current = palette;
  patternRef.current = pattern;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const engine = engineRef.current;
    resizeCanvas(engine, canvas, ctx, false);

    let frame = 0;
    const loop = (timestamp: number) => {
      if (playingRef.current && !engine.drawing) {
        if (timestamp - engine.lastTick >= TICK_INTERVAL_MS) {
          stepGameOfLife(engine);
          engine.lastTick = timestamp;
        }
      }
      renderGameOfLife(ctx, engine, paletteRef.current, patternRef.current);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const onResize = () => resizeCanvas(engine, canvas, ctx, true);
    const onPointerUp = () => {
      engine.drawing = false;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const engine = engineRef.current;
    const col = Math.floor(event.clientX / CELL_SIZE);
    const row = Math.floor(event.clientY / CELL_SIZE);
    engine.hover = { col, row, active: true };

    if (engine.drawing && col >= 0 && col < engine.cols && row >= 0 && row < engine.rows) {
      engine.grid[row * engine.cols + col] = 1;
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const engine = engineRef.current;
    engine.drawing = true;
    stampPattern(
      engine,
      Math.floor(event.clientX / CELL_SIZE),
      Math.floor(event.clientY / CELL_SIZE),
      pattern,
    );
  };

  const handlePointerLeave = () => {
    const engine = engineRef.current;
    engine.hover.active = false;
    engine.drawing = false;
  };

  const clearGrid = () => {
    const engine = engineRef.current;
    engine.grid.fill(0);
    engine.next.fill(0);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 w-full h-full z-0 transition-opacity duration-700"
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerLeave={handlePointerLeave}
      />

      <div className="max-w-[980px] w-full mx-auto px-6 sm:px-10 pb-6 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono">
        <div
          style={{ color: 'var(--fg-secondary)' }}
          className="editorial-paper-sheet pointer-events-auto px-3 py-1.5 rounded"
        >
          Click or drag on the canvas to seed Conway's Game of Life
        </div>

        <div className="editorial-paper-sheet pointer-events-auto px-3.5 py-1.5 rounded flex items-center gap-4">
          {(['glider', 'pulsar', 'bloom'] as const).map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setPattern(name)}
              className={pattern === name ? 'life-control-link active' : 'life-control-link'}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          ))}
          <span style={{ color: 'var(--rule-strong)' }}>|</span>
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            className="life-control-link"
          >
            {playing ? 'Pause' : 'Play'}
          </button>
          <button type="button" onClick={clearGrid} className="life-control-link">
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
