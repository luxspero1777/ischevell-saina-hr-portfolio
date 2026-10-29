import React from 'react';
import { CLIENT_PROFILE } from '../data/hrData';
import { Briefcase, MessageSquare, Mail, Award, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';
import { SmartImage } from './SmartImage';

interface HeroProps {
  onOpenJobPoolModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJobPoolModal }) => {
  const whatsappUrl = `https://wa.me/${CLIENT_PROFILE.rawPhone}?text=${encodeURIComponent(
    'Halo Bu Ischevell Saina, saya melihat profil profesional dan portofolio HR Anda. Saya ingin berdiskusi mengenai peluang kerja sama/rekrutmen.'
  )}`;

  return (
    <section id="beranda" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950">
      
      {/* Subtle background ambient lights (disciplined cool navy with faint amber glow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-900/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-12 right-10 w-96 h-96 bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split: Text & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & CTA (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-400 font-medium tracking-wide">
              <span className="text-amber-400 font-semibold">{CLIENT_PROFILE.fullName}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Head of Human Resources</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400/80" />
                <span>{CLIENT_PROFILE.domicile}</span>
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              Strategic HR Leadership, Talent Acquisition &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Industrial Relations
              </span>{' '}
              Excellence
            </h1>

            {/* Core Narrative / Tagline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {CLIENT_PROFILE.tagline}
            </p>

            {/* Credentials Trust Indicator */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Latar Belakang Pendidikan & Pencapaian Utama</span>
              </div>
              <p className="text-sm text-slate-200 font-medium">
                {CLIENT_PROFILE.degree}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Head HR Multi-Properti (8 Hotel)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Praktisi Hubungan Industrial & Bipartit</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Manpower Planning & HR Budgeting</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#lowongan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-xl shadow-lg shadow-amber-400/20 transition-all whitespace-nowrap"
              >
                <Briefcase className="w-4 h-4" />
                <span>Lihat Lowongan Kerja</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Hubungi via WhatsApp</span>
              </a>

              <button
                onClick={onOpenJobPoolModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Daftar Talent Pool</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Direct Quick Contact Information */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400/80" />
                <a href={`mailto:${CLIENT_PROFILE.email}`} className="hover:text-amber-300 transition-colors">
                  {CLIENT_PROFILE.email}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400/80" />
                <span>{CLIENT_PROFILE.phone}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <a
                  href={CLIENT_PROFILE.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>{CLIENT_PROFILE.linkedInDisplay}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Portrait Frame (Col 5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-amber-400/20 via-sky-500/10 to-transparent blur-sm" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                
                {/* Photo Element */}
                <div className="aspect-[3/4] w-full relative overflow-hidden bg-slate-800">
                  <SmartImage
                    src={CLIENT_PROFILE.profilePhoto}
                    filename="ischevell_hr_profile_1793098562708.jpg"
                    alt="Ischevell Vialara Saina - Senior HR Professional"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Subtle lower gradient overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Floating Identity Card on Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800/90 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-white tracking-wide">
                          {CLIENT_PROFILE.fullName}
                        </p>
                        <p className="text-xs text-amber-400 font-medium">
                          Head of HR & Recruitment Lead
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                          Aktif Rekrutmen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Proof Metrics Strip below Hero Split */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-100 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {stat.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
