import React, { useState } from 'react';
import { generateStandaloneHtml } from '../data/standaloneHtmlCode';
import { X, Copy, Check, Download, FileCode, CheckCircle2 } from 'lucide-react';

interface StandaloneHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const StandaloneHtmlModal: React.FC<StandaloneHtmlModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast,
}) => {
  const [copied, setCopied] = useState(false);
  const standaloneHtml = generateStandaloneHtml();

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtml);
    setCopied(true);
    onSuccessToast('Seluruh kode HTML standalone berhasil disalin ke clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ischevell-saina-hr-landing-page.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onSuccessToast('File HTML standalone berhasil diunduh!');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <FileCode className="w-4 h-4 text-amber-400" />
              <span>Kode Standalone HTML5 + Tailwind CSS + Vanilla JS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              File HTML Mandiri (Siap Pakai)
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl">
              Seluruh kode landing page disatukan ke dalam satu file HTML mandiri yang dapat langsung dibuka di browser apa saja tanpa build tools tambahan.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors shrink-0"
            aria-label="Tutup modal kode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-6 py-3 bg-slate-950/90 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Format: Dokumen HTML5 Lengkap (~18 KB)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold transition-all active:scale-95 shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin!' : 'Salin Seluruh Kode HTML'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh .html</span>
            </button>
          </div>
        </div>

        {/* Code Content Box */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-950 font-mono text-xs text-slate-300 custom-scrollbar">
          <pre className="whitespace-pre overflow-x-auto leading-relaxed select-all">
            {standaloneHtml}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Dapat diunggah langsung ke web hosting, GitHub Pages, cPanel, atau dibuka secara lokal.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-slate-300 hover:text-white bg-slate-800 rounded-lg"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
