import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/hrData';
import { CheckCircle2, Layers, Cpu, Globe2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [
    <Layers key="1" className="w-4 h-4 text-amber-400" />,
    <Cpu key="2" className="w-4 h-4 text-sky-400" />,
    <CheckCircle2 key="3" className="w-4 h-4 text-emerald-400" />,
    <Globe2 key="4" className="w-4 h-4 text-purple-400" />
  ];

  return (
    <section id="keahlian" className="py-20 bg-slate-900/40 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Matriks Kompetensi & Standar Mutu
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Keahlian Strategis, HRIS & Sertifikasi Teruji
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Perpaduan presisi hukum ketenagakerjaan, kepiawaian sistem digital personalia, dan seni kepemimpinan relasional lintas divisi.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeTab === idx
                  ? 'bg-slate-800 text-white border border-amber-400/50 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              {icons[idx]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SKILL_CATEGORIES[activeTab].items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-medium text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 whitespace-nowrap">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
