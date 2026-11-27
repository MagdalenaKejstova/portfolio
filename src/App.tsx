import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PaperGrain from './components/PaperGrain';
import Home from './pages/Home';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import Research from './pages/Research';
import ResearchDetail from './pages/ResearchDetail';

export type Palette = 'vellum' | 'stone';

export default function App() {
  const [palette, setPalette] = useState<Palette>('vellum');
  const location = useLocation();

  useEffect(() => {
    if (palette === 'stone') {
      document.documentElement.setAttribute('data-theme', 'stone');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [palette]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <PaperGrain />
      <Header palette={palette} onPaletteChange={setPalette} />
      <main className="relative z-10 flex-1 flex flex-col pointer-events-none">
        <Routes>
          <Route path="/" element={<Home palette={palette} onPaletteChange={setPalette} />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ResearchDetail />} />
          <Route path="*" element={<Home palette={palette} onPaletteChange={setPalette} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
