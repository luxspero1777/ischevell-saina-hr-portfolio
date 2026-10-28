import React, { useState } from 'react';
import { CAREER_EXPERIENCES } from '../data/hrData';
import { Briefcase, Building2, MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle, Sparkles, ZoomIn, X, Camera } from 'lucide-react';
import { ExperienceItem } from '../types';

export const ExperienceTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string>('exp-1'); // Default expand the latest Head HR position
  const [activePhoto, setActivePhoto] = useState<{ src: string; caption: string; role: string; company: string } | null>(null);

  const filteredExperiences = selectedCategory === 'all'
    ? CAREER_EXPERIENCES
    : CAREER_EXPERIENCES.filter((item) => {
        if (selectedCategory === 'hospitality') return item.category === 'Hospitality';
        if (selectedCategory === 'retail') return item.category === 'Retail';
        if (selectedCategory === 'manufacture') return item.category === 'Manufacture';
        if (selectedCategory === 'business_data') return item.category === 'Business' || item.category === 'Data';
        return true;
      });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="pengalaman" className="py-20 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
              Rekam Jejak Profesional (2013 - 2026)
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Perjalanan Karier & Kontribusi Strategis
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Evolusi kepemimpinan dari lini operasional perhotelan hingga Head of HR yang mengomandoi kebijakan multi-properti hotel, ritel nasional, dan industri manufaktur.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Semua ({CAREER_EXPERIENCES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('hospitality')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'hospitality'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Perhotelan
            </button>
            <button
              onClick={() => setSelectedCategory('retail')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'retail'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Ritel Modern
            </button>
            <button
              onClick={() => setSelectedCategory('manufacture')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'manufacture'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Manufaktur
            </button>
            <button
              onClick={() => setSelectedCategory('business_data')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'business_data'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Wirausaha & Data
            </button>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 md:ml-8 pl-6 sm:pl-8 space-y-8">
          
          {filteredExperiences.map((exp: ExperienceItem, index: number) => {
            const isExpanded = expandedId === exp.id;
            const isHeadRole = exp.id === 'exp-1';

            return (
              <div 
                key={exp.id}
                className="relative group transition-all"
              >
                {/* Timeline node icon */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] md:-left-[41px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isHeadRole 
                      ? 'bg-amber-400 border-amber-300 text-slate-950 shadow-md shadow-amber-400/30' 
                      : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-amber-400 group-hover:text-amber-400'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div 
                  className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                    isHeadRole
                      ? 'bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900/90 border-amber-500/40 shadow-xl'
                      : 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      {/* Unboxed Metadata: Period & Location */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-1.5 font-medium">
                        <span className="flex items-center gap-1 text-amber-400 font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-slate-300 font-semibold">
                          {exp.category}
                        </span>
                      </div>

                      {/* Role & Company Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-0.5">
                        <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Tutup Rincian' : 'Lihat Rincian'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Tagline Summary */}
                  <p className="text-xs sm:text-sm text-slate-400 mt-3 font-normal">
                    {exp.tagline}
                  </p>

                  {/* Expandable Achievement Section */}
                  {isExpanded && (
                    <div className="mt-5 pt-4 border-t border-slate-800 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Tanggung Jawab & Pencapaian Terukur:</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.keyAchievements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Activity Photo / Moment Documentation Slot */}
                      {exp.photo ? (
                        <div className="pt-3">
                          <div 
                            onClick={() => setActivePhoto({
                              src: exp.photo!,
                              caption: exp.photoCaption || `Dokumentasi Momen ${exp.role} di ${exp.company}`,
                              role: exp.role,
                              company: exp.company
                            })}
                            className="group/photo cursor-pointer rounded-xl overflow-hidden border border-slate-700/80 hover:border-amber-400/50 bg-slate-950 transition-all shadow-md"
                          >
                            <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative overflow-hidden bg-slate-900">
                              <img
                                src={exp.photo}
                                alt={exp.photoCaption || exp.role}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-slate-950/20 group-hover/photo:bg-slate-950/40 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover/photo:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-700 text-xs text-white font-medium flex items-center gap-1.5 shadow-lg">
                                  <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                                  <span>Buka Foto Penuh</span>
                                </span>
                              </div>
                            </div>
                            <div className="p-3 bg-slate-950/95 flex flex-wrap items-center justify-between gap-2 text-xs">
                              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                                <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span>{exp.photoCaption || `Dokumentasi Kegiatan: ${exp.role}`}</span>
                              </span>
                              <span className="text-[11px] text-amber-400/90 font-mono shrink-0">
                                Klik untuk Perbesar
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="pt-3">
                          <div className="p-5 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 border border-slate-800">
                                <Camera className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-slate-300 font-semibold block">Tempat Foto Dokumentasi Karier</span>
                                <span className="text-[11px] text-slate-400">Foto momen untuk {exp.role} siap diisi di src/data/hrData.ts</span>
                              </div>
                            </div>
                            <span className="text-[11px] text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/20 font-mono">
                              Slot Foto Tersedia
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Skills Applied Unboxed */}
                      <div className="pt-2">
                        <span className="text-xs text-slate-400 font-medium mr-2">Kompetensi yang Diterapkan:</span>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300 mt-1.5">
                          {exp.skillsApplied.map((skill, sIdx) => (
                            <span key={sIdx} className="bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 rounded text-[11px] text-amber-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* Lightbox Modal for Career Photos */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  {activePhoto.company}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {activePhoto.role}
                </h4>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Tutup foto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 bg-slate-950 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-300 font-medium">
                {activePhoto.caption}
              </span>
              <button
                onClick={() => setActivePhoto(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
