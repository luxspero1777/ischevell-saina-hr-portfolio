import React, { useState } from 'react';
import { CLIENT_PROFILE, HR_CONSULTING_SERVICES } from '../data/hrData';
import { MessageSquare, Mail, Phone, MapPin, Linkedin, Send, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onSuccessToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessToast }) => {
  const [consultationName, setConsultationName] = useState('');
  const [consultationOrg, setConsultationOrg] = useState('');
  const [consultationTopic, setConsultationTopic] = useState('Penyusunan Kebijakan & SOP Ketenagakerjaan');
  const [consultationMessage, setConsultationMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultationName.trim()) return;

    const waText = `Halo Bu Ischevell Saina,

Saya ingin berkonsultasi mengenai layanan HR:
- Nama: ${consultationName}
- Perusahaan/Instansi: ${consultationOrg || '-'}
- Kebutuhan/Topik: ${consultationTopic}
- Pesan: ${consultationMessage || 'Mohon informasi jadwal diskusi lebih lanjut.'}

Terima kasih!`;

    const url = `https://wa.me/${CLIENT_PROFILE.rawPhone}?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setIsSent(true);
    onSuccessToast('Mengarahkan ke WhatsApp resmi Bu Ischevell Saina...');
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section id="kontak" className="py-20 bg-slate-900/80 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Konsultasi & Kemitraan Strategis
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Hubungi Ischevell Saina
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Terbuka untuk diskusi kebutuhan rekrutmen managerial, perancangan SOP organisasi, konsultasi audit hubungan industrial, maupun penempatan talenta SolusiKerjaKita.
          </p>
        </div>

        {/* 2-Column Split: Contact Information & Interactive Consultation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Official Channels (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
              <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Saluran Komunikasi Resmi</span>
              </h3>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">WhatsApp / Telepon</div>
                  <a
                    href={`https://wa.me/${CLIENT_PROFILE.rawPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors mt-0.5 block"
                  >
                    {CLIENT_PROFILE.phone}
                  </a>
                  <span className="text-[11px] text-slate-400">Respon cepat hari kerja 08.00 - 18.00 WIB</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Alamat Email</div>
                  <a
                    href={`mailto:${CLIENT_PROFILE.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors mt-0.5 block"
                  >
                    {CLIENT_PROFILE.email}
                  </a>
                  <span className="text-[11px] text-slate-400">Proposal kemitraan & pengiriman berkas formal</span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">LinkedIn Resmi</div>
                  <a
                    href={CLIENT_PROFILE.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors mt-0.5 block"
                  >
                    {CLIENT_PROFILE.linkedInDisplay}
                  </a>
                  <span className="text-[11px] text-slate-400">Jejaring profesional eksekutif & sharing industri</span>
                </div>
              </div>

              {/* Domicile */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Domisili & Wilayah Mobilitas</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {CLIENT_PROFILE.domicile}
                  </div>
                  <span className="text-[11px] text-slate-400">Tersedia untuk pertemuan tatap muka di Jabodetabek & Manado</span>
                </div>
              </div>

            </div>

            {/* Consulting Services Highlights */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Layanan Konsultasi Organisasi:
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                {HR_CONSULTING_SERVICES.map((srv, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="font-semibold text-amber-300 block">{srv.title}</span>
                    <span className="text-slate-400 mt-0.5 block text-[11px]">{srv.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Consultation Message Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  Kirim Pesan Diskusi Cepat
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Pesan Anda akan otomatis diformat dan diteruskan langsung ke WhatsApp resmi Ischevell Saina untuk penanganan segera.
                </p>
              </div>

              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                      Nama Lengkap Anda <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda / Jabatan"
                      value={consultationName}
                      onChange={(e) => setConsultationName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                      Perusahaan / Organisasi
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Hotel / PT / Bisnis"
                      value={consultationOrg}
                      onChange={(e) => setConsultationOrg(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                    Kebutuhan / Topik Konsultasi
                  </label>
                  <select
                    value={consultationTopic}
                    onChange={(e) => setConsultationTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Perekrutan Karyawan & Headhunting Manajerial">Perekrutan Karyawan & Headhunting Manajerial</option>
                    <option value="Penyusunan Kebijakan & SOP Ketenagakerjaan">Penyusunan Kebijakan & SOP Ketenagakerjaan</option>
                    <option value="Manpower Planning & Pengendalian Budget HR">Manpower Planning & Pengendalian Budget HR</option>
                    <option value="Audit Hukum Ketenagakerjaan & Mediasi Hubungan Industrial">Audit Hukum Ketenagakerjaan & Mediasi Hubungan Industrial</option>
                    <option value="Kemitraan Talent Pool SolusiKerjaKita">Kemitraan Talent Pool SolusiKerjaKita</option>
                    <option value="Konsultasi Karier Pribadi">Konsultasi Karier Pribadi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                    Rincian Kebutuhan / Pesan
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Jelaskan secara singkat latar belakang dan ekspektasi yang ingin Anda diskusikan..."
                    value={consultationMessage}
                    onChange={(e) => setConsultationMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Koneksi langsung ke WhatsApp +62 821-9446-6846
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-xl shadow-md transition-all whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Mulai Diskusi via WhatsApp</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
