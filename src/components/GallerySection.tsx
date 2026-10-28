import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hrData';
import { GalleryItem } from '../types';
import { Image, MapPin, Calendar, Sparkles, X, ZoomIn, Info, CheckCircle2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => {
        if (selectedCategory === 'hotel') return item.categoryKey === 'hotel';
        if (selectedCategory === 'training') return item.categoryKey === 'training';
        if (selectedCategory === 'retail') return item.categoryKey === 'retail';
        if (selectedCategory === 'award') return item.categoryKey === 'award';
        return true;
      });

  return (
    <section id="galeri" className="py-20 bg-slate-900/60 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Dokumentasi Kegiatan & Rekam Jejak</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Galeri Kegiatan & Momen Berkesan
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Kumpulan dokumentasi kepemimpinan HR di lapangan, rapat koordinasi multi-properti, pelatihan tim, dan momen penghargaan mutu.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Semua ({GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('hotel')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'hotel'
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Multi-Properti
            </button>
            <button
              onClick={() => setSelectedCategory('training')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'training'
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Pelatihan & Workshop
            </button>
            <button
              onClick={() => setSelectedCategory('retail')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'retail'
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ritel & Store
            </button>
            <button
              onClick={() => setSelectedCategory('award')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === 'award'
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Penghargaan QA
            </button>
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group cursor-pointer rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[11px] font-semibold text-amber-300 bg-slate-950/80 backdrop-blur-md border border-amber-400/30 px-2.5 py-1 rounded-md shadow">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom indicator hover */}
                  <div className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Highlight */}
              <div className="px-6 py-3.5 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium truncate">
                  {item.highlight}
                </span>
                <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform whitespace-nowrap ml-2">
                  Buka Foto →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Note for Client Customization */}
        <div className="mt-12 p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-200">Catatan Personalisasi untuk Klien:</strong> Foto di atas merupakan visualisasi ilustratif kegiatan operasional HR. Anda dapat menggantinya dengan mudah menggunakan dokumentasi foto pribadi Anda dengan memperbarui berkas di <code className="text-amber-300 font-mono bg-slate-900 px-1.5 py-0.5 rounded">src/data/hrData.ts</code> kapan saja.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  {activeLightboxItem.category} · {activeLightboxItem.date}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {activeLightboxItem.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Tutup foto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large Image View */}
            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden">
              <img
                src={activeLightboxItem.imageSrc}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Description Footer */}
            <div className="p-6 bg-slate-950 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeLightboxItem.location}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeLightboxItem.description}
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
                <span className="text-amber-400 font-medium">
                  {activeLightboxItem.highlight}
                </span>
                <button
                  onClick={() => setActiveLightboxItem(null)}
                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  Tutup Tampilan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
