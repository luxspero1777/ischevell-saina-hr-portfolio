import React, { useState, useEffect } from 'react';
import { ACTIVE_JOBS, CLIENT_PROFILE } from '../data/hrData';
import { JobPosting, ApplicationFormData } from '../types';
import { X, CheckCircle2, Send, MessageSquare, Copy, Check, ExternalLink, ShieldCheck, FileText, User, Phone, Mail, Link as LinkIcon } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  selectedJob: JobPosting | null;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  selectedJob,
  onClose,
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    positionId: '',
    positionTitle: '',
    cvLink: '',
    recentExperience: '',
    coverNote: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedJob) {
      setFormData((prev) => ({
        ...prev,
        positionId: selectedJob.id,
        positionTitle: selectedJob.title,
      }));
    } else {
      // Default to general pool
      const defaultJob = ACTIVE_JOBS[0];
      setFormData((prev) => ({
        ...prev,
        positionId: defaultJob.id,
        positionTitle: defaultJob.title,
      }));
    }
    setIsSubmitted(false);
    setErrors({});
  }, [selectedJob, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Format email tidak valid.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Nomor WhatsApp / telepon wajib diisi minimal 8 digit.';
    }
    if (!formData.cvLink.trim()) {
      errs.cvLink = 'Tautan CV / LinkedIn / Google Drive wajib dicantumkan.';
    } else if (!formData.cvLink.startsWith('http')) {
      errs.cvLink = 'Mohon sertakan tautan lengkap yang diawali http:// atau https://';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccessToast(`Lamaran untuk posisi "${formData.positionTitle}" berhasil dikirim!`);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = `Halo Bu Ischevell Saina,

Saya baru saja mengirimkan formulir lamaran kerja melalui portal SolusiKerjaKita:
- Nama Lengkap: ${formData.fullName}
- Posisi yang Dilamar: ${formData.positionTitle}
- Nomor Kontak: ${formData.phone}
- Email: ${formData.email}
- Tautan CV/LinkedIn: ${formData.cvLink}
${formData.recentExperience ? `- Pengalaman Terakhir: ${formData.recentExperience}` : ''}
${formData.coverNote ? `- Catatan Singkat: ${formData.coverNote}` : ''}

Saya berharap dapat diberikan kesempatan untuk proses wawancara. Terima kasih banyak atas waktu dan perhatian Ibu.`;

    return `https://wa.me/${CLIENT_PROFILE.rawPhone}?text=${encodeURIComponent(text)}`;
  };

  const copyToClipboard = () => {
    const text = `Lamaran SolusiKerjaKita - Ischevell Saina
Posisi: ${formData.positionTitle}
Nama: ${formData.fullName}
Kontak: ${formData.phone} | ${formData.email}
Tautan CV: ${formData.cvLink}
Catatan: ${formData.coverNote || '-'}`;

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
              <span>SolusiKerjaKita · Rekrutmen Langsung</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {isSubmitted ? 'Lamaran Terkirim Berhasil' : 'Formulir Lamaran Cepat'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isSubmitted
                ? 'Data Anda telah tersimpan ke dalam database rekrutmen Ischevell Saina.'
                : 'Lengkapi formulir di bawah ini untuk proses seleksi dan wawancara kompetensi.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors shrink-0"
            aria-label="Tutup formulir"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Posisi yang Dilamar (Dropdown Otomatis) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                  Posisi yang Dilamar <span className="text-amber-400">*</span>
                </label>
                <select
                  value={formData.positionId}
                  onChange={(e) => {
                    const sel = ACTIVE_JOBS.find((j) => j.id === e.target.value);
                    setFormData({
                      ...formData,
                      positionId: e.target.value,
                      positionTitle: sel ? sel.title : e.target.value,
                    });
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                >
                  {ACTIVE_JOBS.map((job) => (
                    <option key={job.id} value={job.id} className="bg-slate-900 text-slate-100">
                      {job.title} — {job.location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                  Nama Lengkap Sesuai KTP <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rian Pratama Putra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
              </div>

              {/* Grid: Email & Telepon/WA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                    Alamat Email Aktif <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Tautan CV / LinkedIn (Google Drive / PDF Link) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                  Tautan CV / LinkedIn (Google Drive / PDF Link) <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <LinkIcon className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="url"
                    required
                    placeholder="https://drive.google.com/... atau https://linkedin.com/in/..."
                    value={formData.cvLink}
                    onChange={(e) => setFormData({ ...formData, cvLink: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Pastikan akses Google Drive diatur ke <em>"Anyone with the link can view"</em>.
                </p>
                {errors.cvLink && <p className="text-xs text-rose-400 mt-1">{errors.cvLink}</p>}
              </div>

              {/* Pengalaman Terakhir / Pendidikan Terakhir */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                  Pengalaman Terakhir / Perusahaan & Kota Saat Ini
                </label>
                <input
                  type="text"
                  placeholder="Contoh: HR Assistant di PT ABC (1 tahun) - Jakarta"
                  value={formData.recentExperience}
                  onChange={(e) => setFormData({ ...formData, recentExperience: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              {/* Catatan Singkat */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                  Pesan Singkat / Ringkasan Keunggulan Diri (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan secara singkat keahlian utama Anda yang relevan dengan posisi ini..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                />
              </div>

              {/* Privacy Notice */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Kerahasiaan data pelamar terjamin. Informasi Anda hanya digunakan untuk keperluan rekrutmen profesional SolusiKerjaKita dan tidak disebarluaskan.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-750 rounded-xl transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 disabled:opacity-70 rounded-xl shadow-md transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Memproses Lamaran...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Lamaran Sekarang</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Submission Success State */
            <div className="space-y-6 text-center py-2">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">
                  Lamaran Berhasil Diterima!
                </h4>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Terima kasih, <strong>{formData.fullName}</strong>. Berkas lamaran Anda untuk posisi <span className="text-amber-400 font-semibold">{formData.positionTitle}</span> telah masuk ke sistem screening SolusiKerjaKita.
                </p>
              </div>

              {/* Candidate Quick Action Options */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Tingkatkan Prioritas Review:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Untuk mempercepat proses seleksi, Anda dapat langsung mengonfirmasi pengiriman lamaran ini ke nomor WhatsApp resmi Ibu Ischevell Saina:
                </p>
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-950"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konfirmasi via WhatsApp ke Bu Ischevell</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Tersalin ke Clipboard' : 'Salin Ringkasan'}</span>
                </button>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200"
                >
                  Lamar Posisi Lain
                </button>

                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
                >
                  Selesai
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
