import React from 'react';
import { JobPosting } from '../types';
import { X, MapPin, Building, Calendar, DollarSign, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface JobDetailModalProps {
  job: JobPosting | null;
  onClose: () => void;
  onApply: (job: JobPosting) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose, onApply }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
              <span>{job.department}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{job.workType}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-2">
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-slate-500" />
                <span>{job.companyType}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{job.location}</span>
              </span>
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <DollarSign className="w-3.5 h-3.5" />
                <span>{job.salaryRange}</span>
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors shrink-0"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Deskripsi Singkat Posisi
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {job.overview}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              Tanggung Jawab Utama (Job Responsibilities)
            </h4>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              Kualifikasi & Persyaratan (Job Requirements)
            </h4>
            <ul className="space-y-2">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Kompensasi & Keuntungan Kerja
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {job.benefits.map((ben, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                  {ben}
                </div>
              ))}
            </div>
          </div>

          {/* Direct verification assurance */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              Proses rekrutmen diverifikasi langsung oleh <strong>Ischevell Saina</strong>. Tidak ada biaya pendaftaran apapun (100% Bebas Biaya).
            </span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/60 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 rounded-xl transition-colors"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(job);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-xl shadow-md transition-all"
          >
            <span>Lamar Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
