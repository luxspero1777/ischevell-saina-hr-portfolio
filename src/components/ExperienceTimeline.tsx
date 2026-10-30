import React, { useState } from 'react';
import { CAREER_EXPERIENCES } from '../data/hrData';
import { Briefcase, Building2, MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle, Sparkles } from 'lucide-react';
import { ExperienceItem } from '../types';

export const ExperienceTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string>('exp-1'); // Default expand the latest Head HR position

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
    </section>
  );
};
