import { useState } from 'react';

const EMAIL = 'magdalena.kejstova@email.cz';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = EMAIL;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="relative z-10 hairline-t pointer-events-none">
      <div
        style={{ color: 'var(--fg-secondary)' }}
        className="max-w-[980px] mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
      >
        <div className="pointer-events-auto flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="https://github.com/mkejstova"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Google Scholar
          </a>
          <a
            href="https://linkedin.com/in/mkejstova"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <button type="button" onClick={copyEmail} className="cursor-pointer footer-link">
            {copied ? `Copied (${EMAIL})` : 'Email'}
          </button>
        </div>
        <div className="font-mono text-[11px] opacity-75">Brno, Czechia</div>
      </div>
    </footer>
  );
}
