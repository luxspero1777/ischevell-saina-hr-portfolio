import React, { useState } from 'react';
import { CLIENT_PROFILE } from '../data/hrData';
import { Briefcase, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenStandaloneModal: () => void;
  onOpenJobPoolModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStandaloneModal, onOpenJobPoolModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Pengalaman', href: '#pengalaman' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Lowongan Kerja', href: '#lowongan' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#beranda" 
            className="flex items-center gap-3 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-extrabold shadow-sm group-hover:scale-105 transition-transform">
              IS
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                {CLIENT_PROFILE.shortName}
              </span>
              <span className="text-xs text-slate-400 font-normal">
                HR Professional & Recruiter
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + helper utilities */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenStandaloneModal}
              title="Lihat / Unduh Kode HTML Standalone"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-750 rounded-lg transition-colors whitespace-nowrap"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Kode HTML</span>
            </button>

            <a
              href="#lowongan"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow-amber-400/20 transition-all whitespace-nowrap shrink-0 active:scale-95"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Cari Lowongan</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#lowongan"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg text-center"
            >
              <Briefcase className="w-4 h-4" />
              <span>Lihat Lowongan Aktif</span>
            </a>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJobPoolModal();
                }}
                className="flex-1 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg text-center"
              >
                Daftar Talent Pool
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStandaloneModal();
                }}
                className="px-3 py-2 text-xs font-medium text-amber-400 bg-slate-900 border border-slate-800 rounded-lg"
              >
                HTML Standalone
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
