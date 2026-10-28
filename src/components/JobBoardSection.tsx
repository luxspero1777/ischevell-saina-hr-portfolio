import React, { useState } from 'react';
import { ACTIVE_JOBS, CLIENT_PROFILE } from '../data/hrData';
import { JobPosting } from '../types';
import { Briefcase, Search, MapPin, Building, DollarSign, Clock, ArrowRight, CheckCircle2, UserPlus, Sparkles } from 'lucide-react';

interface JobBoardSectionProps {
  onSelectJobForDetail: (job: JobPosting) => void;
  onApplyJob: (job: JobPosting) => void;
  onOpenGeneralTalentPool: () => void;
}

export const JobBoardSection: React.FC<JobBoardSectionProps> = ({
  onSelectJobForDetail,
  onApplyJob,
  onOpenGeneralTalentPool,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredJobs = ACTIVE_JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.companyType.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'hr' && job.category === 'HR') ||
      (selectedCategory === 'retail' && job.category === 'Retail') ||
      (selectedCategory === 'hospitality' && job.category === 'Hospitality') ||
      (selectedCategory === 'general' && job.category === 'General');

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="lowongan" className="py-20 bg-slate-950 border-b border-slate-900 relative">
      
      {/* Background ambient accent */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Papan Rekrutmen Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            SolusiKerjaKita - Talent Pool & Lowongan Aktif
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Platform rekrutmen langsung oleh Ischevell Saina. Temukan posisi impian Anda atau daftarkan diri Anda untuk bergabung dalam jaringan profesional kami.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Cari lowongan (e.g. HR Operations, Store Supervisor, Jakarta, Manado)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Semua ({ACTIVE_JOBS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('hr')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'hr'
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              HR & People
            </button>
            <button
              onClick={() => setSelectedCategory('retail')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'retail'
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ritel Modern
            </button>
            <button
              onClick={() => setSelectedCategory('hospitality')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'hospitality'
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Perhotelan / F&B
            </button>
          </div>

        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => {
            const isGeneralPool = job.id === 'job-05';

            return (
              <div
                key={job.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between group ${
                  job.isFeatured
                    ? 'bg-gradient-to-b from-slate-900 to-slate-900/90 border-amber-500/40 shadow-xl'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div>
                  
                  {/* Top unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-medium text-amber-400">{job.department}</span>
                    <span className="text-[11px] font-mono text-slate-400">{job.workType}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {job.title}
                  </h3>

                  {/* Company & Location */}
                  <div className="flex flex-col gap-1 text-xs text-slate-300 mt-2">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{job.companyType}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{job.location}</span>
                    </span>
                  </div>

                  {/* Overview snippet */}
                  <p className="text-xs text-slate-400 mt-3.5 line-clamp-2 leading-relaxed">
                    {job.overview}
                  </p>

                  {/* Key highlight / Salary info */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>{job.salaryRange}</span>
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {job.experienceRequired}
                    </span>
                  </div>

                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => onSelectJobForDetail(job)}
                    className="flex-1 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700/80 rounded-xl transition-colors text-center"
                  >
                    Lihat Detail
                  </button>

                  <button
                    onClick={() => onApplyJob(job)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-xl shadow-sm transition-all"
                  >
                    <span>Lamar Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state if search yields no results */}
        {filteredJobs.length === 0 && (
          <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800 max-w-lg mx-auto">
            <p className="text-sm text-slate-300 font-medium">
              Tidak ada lowongan yang cocok dengan kata kunci "{searchQuery}".
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Anda tetap dapat mendaftarkan profil Anda ke Talent Pool terbuka agar dapat dihubungi saat posisi relevan tersedia.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-amber-400 bg-slate-800 rounded-lg"
            >
              Reset Pencarian
            </button>
          </div>
        )}

        {/* Talent Pool Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              <UserPlus className="w-4 h-4 text-amber-400" />
              <span>Belum Menemukan Posisi yang Sesuai?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Bergabunglah dengan Database Talent Pool SolusiKerjaKita
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Kirimkan resume Anda hari ini. Ischevell Saina secara aktif mengkurasi kandidat potensial untuk kebutuhan mendesak di jaringan mitra perhotelan, ritel modern, dan korporat.
            </p>
          </div>

          <button
            onClick={onOpenGeneralTalentPool}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-xl shadow-lg shadow-amber-400/20 transition-all whitespace-nowrap shrink-0"
          >
            <span>Daftar ke Talent Pool</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
