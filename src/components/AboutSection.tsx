import React from 'react';
import { CLIENT_PROFILE, CLIENT_TESTIMONIALS, HR_CONSULTING_SERVICES } from '../data/hrData';
import { GraduationCap, ShieldCheck, TrendingUp, Users, Scale, FileText, ArrowRight, Quote } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-slate-900/60 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Profil & Filosofi Kepemimpinan SDM
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            Menyelaraskan Pertumbuhan Bisnis dengan Kesejahteraan Insan Kerja
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Dengan latar belakang akademik berpredikat <span className="text-amber-300 font-medium">Cum Laude</span> di bidang Manajemen Sumber Daya Manusia dari Universitas Sam Ratulangi, saya mendedikasikan lebih dari satu dekade karier untuk membangun tata kelola HR yang kokoh, adaptif, dan patuh regulasi di berbagai lanskap industri.
          </p>
        </div>

        {/* 2-Column Grid: Education & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Education & Academic Prestige (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                    Fondasi Akademik Unggulan
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Universitas Sam Ratulangi (UNSRAT)
                  </h3>
                  <p className="text-sm text-slate-300 font-medium mt-1">
                    Bachelor Degree in Business Administration (S.AB.)
                  </p>
                  <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                    Konsentrasi: Human Resources Management · Predikat: Cum Laude
                  </p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    Mendalami teori perilaku organisasi, hukum ketenagakerjaan, psikologi industri, dan manajemen remunerasi secara komprehensif, menjadi landasan ilmiah dalam setiap pengambilan keputusan strategis HR.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>3 Komitmen Praktik Profesional</span>
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span><strong>Zero Industrial Dispute:</strong> Mengedepankan musyawarah bipartit dan empati dalam merespons setiap aspirasi karyawan dan serikat pekerja.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span><strong>Efisiensi Anggaran Berbasis Data:</strong> Pengendalian rasio beban gaji terhadap pendapatan melalui model Manpower Planning terukur.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span><strong>Pemberdayaan Talenta Lokal:</strong> Membuka akses kesempatan kerja yang adil dan pelatihan berkesinambungan bagi komunitas kerja.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars of Expertise (Col 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Strategic Manpower & Budgeting
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Perhitungan kebutuhan tenaga kerja objektif untuk 8 properti hotel serentak dan proyeksi pengeluaran payroll tahunan yang presisi.
                </p>
              </div>
              <div className="text-[11px] text-sky-400 font-medium mt-4 pt-3 border-t border-slate-800/80">
                Optimalisasi Cost per Hire
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Industrial Relations & Law
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Penegakan hukum ketenagakerjaan, drafting perjanjian kerja PKWT/PKWTT, kepatuhan Disnaker, serta negosiasi serikat pekerja yang aman.
                </p>
              </div>
              <div className="text-[11px] text-emerald-400 font-medium mt-4 pt-3 border-t border-slate-800/80">
                Harmonisasi Manajemen & Karyawan
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  End-to-End Talent Acquisition
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Perekrutan lintas level mulai dari mass hiring gerai ritel modern hingga perburuan tertutup manajer unit perhotelan dan staf operasional.
                </p>
              </div>
              <div className="text-[11px] text-amber-400 font-medium mt-4 pt-3 border-t border-slate-800/80">
                Retensi & Kesesuaian Kompetensi 95%
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Corporate Policies & SOP
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Penyusunan Peraturan Perusahaan (PP), Employee Handbook, alur persetujuan lembur, sistem KPI, serta standardisasi audit perhotelan.
                </p>
              </div>
              <div className="text-[11px] text-purple-400 font-medium mt-4 pt-3 border-t border-slate-800/80">
                Tata Kelola Operasional Standar
              </div>
            </div>

          </div>
        </div>

        {/* Executive Testimonials / Endorsement Cards */}
        <div className="border-t border-slate-800/80 pt-10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Testimoni & Pengakuan Profesional Rekanan Industri
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800/90 relative">
                <Quote className="w-8 h-8 text-slate-700/60 absolute top-5 right-5" />
                <p className="text-sm text-slate-300 italic leading-relaxed pr-6">
                  "{item.quote}"
                </p>
                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-200 block">{item.author}</span>
                    <span className="text-slate-400">{item.company}</span>
                  </div>
                  <span className="text-slate-500 font-medium">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
