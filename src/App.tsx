/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { JobBoardSection } from './components/JobBoardSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { JobDetailModal } from './components/JobDetailModal';
import { ApplicationModal } from './components/ApplicationModal';
import { StandaloneHtmlModal } from './components/StandaloneHtmlModal';
import { JobPosting } from './types';
import { ACTIVE_JOBS } from './data/hrData';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [selectedJobForDetail, setSelectedJobForDetail] = useState<JobPosting | null>(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState<JobPosting | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isStandaloneModalOpen, setIsStandaloneModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4000);
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedJobForDetail(null);
        setIsApplyModalOpen(false);
        setIsStandaloneModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenGeneralTalentPool = () => {
    const generalJob = ACTIVE_JOBS.find((j) => j.id === 'job-05') || ACTIVE_JOBS[0];
    setSelectedJobForApply(generalJob);
    setIsApplyModalOpen(true);
  };

  const handleApplyFromJobCard = (job: JobPosting) => {
    setSelectedJobForApply(job);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 border border-amber-400/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl flex items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1 rounded-md"
            aria-label="Tutup notifikasi"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenStandaloneModal={() => setIsStandaloneModalOpen(true)}
        onOpenJobPoolModal={handleOpenGeneralTalentPool}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero onOpenJobPoolModal={handleOpenGeneralTalentPool} />

        {/* 2. Tentang Saya & Filosofi SDM */}
        <AboutSection />

        {/* 3. Timeline Pengalaman Karier (2013 - 2026) */}
        <ExperienceTimeline />

        {/* 4. Matriks Keahlian & Sertifikasi */}
        <SkillsSection />

        {/* 5. BAGIAN UTAMA: Papan Lowongan Kerja SolusiKerjaKita */}
        <JobBoardSection
          onSelectJobForDetail={(job) => setSelectedJobForDetail(job)}
          onApplyJob={handleApplyFromJobCard}
          onOpenGeneralTalentPool={handleOpenGeneralTalentPool}
        />

        {/* 6. Kontak & Konsultasi Organisasi */}
        <ContactSection onSuccessToast={showToast} />

      </main>

      {/* Footer */}
      <Footer onOpenStandaloneModal={() => setIsStandaloneModalOpen(true)} />

      {/* Interactive Modals */}
      <JobDetailModal
        job={selectedJobForDetail}
        onClose={() => setSelectedJobForDetail(null)}
        onApply={(job) => {
          setSelectedJobForApply(job);
          setIsApplyModalOpen(true);
        }}
      />

      <ApplicationModal
        isOpen={isApplyModalOpen}
        selectedJob={selectedJobForApply}
        onClose={() => setIsApplyModalOpen(false)}
        onSuccessToast={showToast}
      />

      <StandaloneHtmlModal
        isOpen={isStandaloneModalOpen}
        onClose={() => setIsStandaloneModalOpen(false)}
        onSuccessToast={showToast}
      />

    </div>
  );
}
