import React from 'react';
import { CLIENT_PROFILE } from '../data/hrData';
import { Mail, Phone, Linkedin, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onOpenStandaloneModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStandaloneModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-900">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight">
                {CLIENT_PROFILE.fullName}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-amber-400 font-semibold">SolusiKerjaKita</span>
            </div>
            <p className="text-slate-400 max-w-md">
              {CLIENT_PROFILE.tagline}
            </p>
          </div>

          {/* Social Links & Utilities */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CLIENT_PROFILE.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{CLIENT_PROFILE.email}</span>
            </a>

            <a
              href={`https://wa.me/${CLIENT_PROFILE.rawPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Resmi</span>
            </a>

            <a
              href={CLIENT_PROFILE.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onOpenStandaloneModal}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-amber-400 hover:text-amber-300 border border-slate-800 transition-colors"
            >
              Kode HTML Utuh
            </button>
          </div>

        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 {CLIENT_PROFILE.fullName}. Didukung oleh{' '}
            <strong className="text-slate-300">SolusiKerjaKita</strong>. Seluruh hak cipta dilindungi undang-undang.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3 h-3 text-slate-400" />
              <span>Privasi & Perlindungan Berkas Pelamar Terjamin</span>
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="Kembali ke atas"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
