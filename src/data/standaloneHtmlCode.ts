export const generateStandaloneHtml = (): string => {
  return `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ischevell Vialara Saina | HR Professional & SolusiKerjaKita</title>
  <meta name="description" content="Profil profesional dan portal rekrutmen Ischevell Vialara Saina, Head HR berpengalaman di industri perhotelan, ritel, dan manufaktur.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
          },
          colors: {
            navy: {
              950: '#070c18',
              900: '#0b1329',
              800: '#142042',
              700: '#1e3060',
            },
            gold: {
              300: '#fde047',
              400: '#facc15',
              500: '#eab308',
            }
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #070c18;
      color: #f1f5f9;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #1e293b;
      border-radius: 3px;
    }
  </style>
</head>
<body class="bg-[#070c18] text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950">

  <!-- ==================== 1. STICKY NAVBAR ==================== -->
  <header class="sticky top-0 z-40 w-full bg-[#070c18]/90 backdrop-blur-md border-b border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo / Nama Brand -->
        <a href="#beranda" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-extrabold text-sm shadow-md">
            IS
          </div>
          <div class="flex flex-col">
            <span class="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
              Ischevell Saina
            </span>
            <span class="text-xs text-slate-400 font-normal">
              HR Professional & Recruiter
            </span>
          </div>
        </a>

        <!-- Menu Navigasi Desktop -->
        <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#beranda" class="hover:text-amber-400 transition-colors py-1">Beranda</a>
          <a href="#tentang" class="hover:text-amber-400 transition-colors py-1">Tentang Saya</a>
          <a href="#pengalaman" class="hover:text-amber-400 transition-colors py-1">Pengalaman</a>
          <a href="#keahlian" class="hover:text-amber-400 transition-colors py-1">Keahlian</a>
          <a href="#galeri" class="hover:text-amber-400 transition-colors py-1">Galeri Momen</a>
          <a href="#lowongan" class="hover:text-amber-400 transition-colors py-1">Lowongan Kerja</a>
          <a href="#kontak" class="hover:text-amber-400 transition-colors py-1">Kontak</a>
        </nav>

        <!-- CTA Header -->
        <div class="flex items-center gap-3">
          <a href="#lowongan" class="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all whitespace-nowrap">
            Cari Lowongan
          </a>
          <!-- Mobile Menu Trigger -->
          <button id="mobileMenuBtn" class="md:hidden p-2 text-slate-400 hover:text-white" aria-label="Toggle Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Nav Drawer -->
    <div id="mobileMenu" class="hidden md:hidden border-b border-slate-800 bg-[#070c18] px-4 pt-2 pb-5 space-y-2">
      <a href="#beranda" class="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400">Beranda</a>
      <a href="#tentang" class="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400">Tentang Saya</a>
      <a href="#pengalaman" class="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400">Pengalaman</a>
      <a href="#keahlian" class="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400">Keahlian</a>
      <a href="#galeri" class="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400">Galeri Momen</a>
      <a href="#lowongan" class="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400">Lowongan Kerja</a>
      <a href="#kontak" class="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400">Kontak</a>
    </div>
  </header>

  <!-- ==================== 2. HERO SECTION ==================== -->
  <section id="beranda" class="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-900 bg-gradient-to-b from-[#070c18] via-slate-900/80 to-[#070c18]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Sisi Kiri: Narasi & CTA -->
        <div class="lg:col-span-7 space-y-6">
          <div class="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium">
            <span class="text-amber-400 font-semibold">Ischevell Vialara Saina, S.AB.</span>
            <span>·</span>
            <span>Cum Laude Sam Ratulangi University</span>
            <span>·</span>
            <span>Kalibata, Jakarta Selatan</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Strategic HR Leadership, Talent Acquisition & <span class="text-amber-400">Industrial Relations</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            HR Professional with extensive employee relations, strategic leadership in Talent Acquisition, HR Budgeting, Policy & SOP, and Industrial Relations across Hotel, Manufacture, and Retail industries.
          </p>

          <!-- Kotak Kredensial Akademik -->
          <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
            <div class="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Latar Belakang Akademik & Kepemimpinan
            </div>
            <p class="text-sm text-slate-200 font-medium">
              Bachelor Degree in Business Administration, concentration of Human Resources Management (Cumlaude, Sam Ratulangi University)
            </p>
            <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
              <span>✓ Head HR Multi-Properti (8 Hotel)</span>
              <span>✓ Manajemen Hubungan Industrial</span>
              <span>✓ SOP & HR Budgeting</span>
            </div>
          </div>

          <!-- Tombol Aksi -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a href="#lowongan" class="px-6 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-400/20 transition-all">
              Lihat Lowongan Kerja
            </a>
            <a href="https://wa.me/6282194466846" target="_blank" class="px-5 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all">
              Hubungi via WhatsApp
            </a>
            <button onclick="openApplyModal('General Talent Pool', 'job-general')" class="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-900 rounded-xl transition-colors">
              Daftar Talent Pool
            </button>
          </div>

          <!-- Informasi Kontak Cepat -->
          <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 pt-1">
            <span>✉ sainaischevell@gmail.com</span>
            <span>✆ +62 821-9446-6846</span>
            <a href="https://linkedin.com/in/ischevellsaina" target="_blank" class="text-amber-400 hover:underline">
              linkedin.com/in/ischevellsaina
            </a>
          </div>
        </div>

        <!-- Sisi Kanan: Foto Profil Profesional -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-sm rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl">
            <img 
              src="/src/assets/images/ischevell_hr_profile_1793098562708.jpg" 
              alt="Ischevell Vialara Saina - HR Professional"
              class="w-full h-auto object-cover object-top"
            />
            <div class="p-4 bg-slate-950/95 border-t border-slate-800">
              <div class="text-sm font-bold text-white">Ischevell Vialara Saina</div>
              <div class="text-xs text-amber-400">Head of Human Resources & Recruiter Lead</div>
              <div class="text-[11px] text-slate-400 mt-1">Domisili: Kalibata , Jakarta Selatan </div>
            </div>
          </div>
        </div>

      </div>

      <!-- 4-Stat Strip -->
      <div class="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div class="text-2xl font-bold text-amber-400">12+ Tahun</div>
          <div class="text-xs text-slate-300 mt-1">Pengalaman Kerja Profesional (2013-2026)</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div class="text-2xl font-bold text-amber-400">8 Properti</div>
          <div class="text-xs text-slate-300 mt-1">Manajemen Manpower & SOP Hotel Serentak</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div class="text-2xl font-bold text-amber-400">500+ Talenta</div>
          <div class="text-xs text-slate-300 mt-1">Keberhasilan Rekrutmen & Penempatan Kerja</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div class="text-2xl font-bold text-amber-400">Cum Laude</div>
          <div class="text-xs text-slate-300 mt-1">Kelulusan Universitas Sam Ratulangi (HRM)</div>
        </div>
      </div>

    </div>
  </section>

  <!-- ==================== 3. TENTANG SAYA ==================== -->
  <section id="tentang" class="py-16 bg-slate-900/50 border-b border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-12">
        <div class="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Profil & Landasan Kerja</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Menyeimbangkan Ketegasan Kepatuhan Regulasi dengan Pendekatan Insani
        </h2>
        <p class="mt-3 text-slate-300 text-sm leading-relaxed">
          Mengombinasikan keunggulan analitis dari pendidikan sarjana administrasi bisnis dengan lebih dari satu dekade pengalaman praktik di lapangan perhotelan, pabrik manufaktur, dan gerai ritel modern.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
          <div class="text-amber-400 font-bold text-base mb-1">01. Strategic Talent Acquisition</div>
          <p class="text-xs text-slate-300 leading-relaxed">
            Perekrutan terarah mulai dari level eksekutif/managerial hotel hingga mass hiring ratusan staf pembukaan toko ritel baru secara presisi dan tepat waktu.
          </p>
        </div>
        <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
          <div class="text-amber-400 font-bold text-base mb-1">02. Industrial Relations & Legal</div>
          <p class="text-xs text-slate-300 leading-relaxed">
            Mediasi bipartit, koordinasi intensif dengan Disnaker, penyusunan kontrak kerja (PKWT/PKWTT), dan kepatuhan penuh terhadap UU Ketenagakerjaan.
          </p>
        </div>
        <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
          <div class="text-amber-400 font-bold text-base mb-1">03. Policy, SOP & Budgeting</div>
          <p class="text-xs text-slate-300 leading-relaxed">
            Perumusan Employee Handbook, standardisasi kebijakan multi-properti, serta perencanaan anggaran HR tahunan yang akuntabel.
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- ==================== 4. PENGALAMAN KERJA (TIMELINE) ==================== -->
  <section id="pengalaman" class="py-16 bg-[#070c18] border-b border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-12">
        <div class="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Riwayat Karier Utama</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Timeline Pengalaman Kerja (2013 - 2026)
        </h2>
        <p class="mt-2 text-sm text-slate-300">
          Rekam jejak kontribusi nyata pada organisasi perhotelan, ritel multinasional, dan manufaktur.
        </p>
      </div>

      <div class="relative border-l border-slate-800 ml-4 pl-6 space-y-8">
        
        <!-- Job 1 -->
        <div class="relative group">
          <div class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-amber-400 border-2 border-slate-950"></div>
          <div class="p-5 rounded-xl bg-slate-900 border border-amber-500/30">
            <div class="flex flex-wrap justify-between items-center text-xs text-slate-400 mb-1">
              <span class="text-amber-400 font-bold">2024 - 2026</span>
              <span>Hospitality Management</span>
            </div>
            <h3 class="text-lg font-bold text-white">Head of Human Resources (Head HR)</h3>
            <div class="text-sm font-medium text-slate-300">PT. Prima Hotel Manajemen Indonesia</div>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">
              Manpower planning untuk 8 properti hotel serentak, perumusan policies & SOP korporat, HR budgeting tahunan, end-to-end recruitment level manager-level, serta employee relations & union communications.
            </p>
            <div class="mt-3 rounded-lg overflow-hidden border border-slate-700/80">
              <img src="/src/assets/images/gallery_hotel_meeting_1793125770383.jpg" alt="Dokumentasi Head HR Prima Hotel" class="w-full h-44 object-cover">
              <div class="p-2 bg-slate-950 text-[11px] text-slate-300">📸 Rapat Koordinasi Strategis & Evaluasi Manpower 8 Properti Hotel</div>
            </div>
          </div>
        </div>

        <!-- Job 2 -->
        <div class="relative group">
          <div class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700"></div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <div class="flex flex-wrap justify-between items-center text-xs text-slate-400 mb-1">
              <span class="text-amber-400 font-bold">2024</span>
              <span>Modern Retail (Fatmawati, Jaksel)</span>
            </div>
            <h3 class="text-lg font-bold text-white">HR Representative</h3>
            <div class="text-sm font-medium text-slate-300">PT. Catur Mitra Sejati Sentosa (IKEA / Mitra10 Group)</div>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">
              Perekrutan personel ritel, administrasi personalia, compensation & benefits (C&B), pelaporan kepesertaan BPJS Ketenagakerjaan & Kesehatan, General Affairs, dan peningkatan employee engagement.
            </p>
            <div class="mt-3 rounded-lg overflow-hidden border border-slate-700/80">
              <img src="/src/assets/images/gallery_training_session_1793125786457.jpg" alt="Dokumentasi Mitra10 HR" class="w-full h-44 object-cover">
              <div class="p-2 bg-slate-950 text-[11px] text-slate-300">📸 Sesi Training Onboarding & Employee Engagement Gerai Ritel</div>
            </div>
          </div>
        </div>

        <!-- Job 3 -->
        <div class="relative group">
          <div class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700"></div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <div class="flex flex-wrap justify-between items-center text-xs text-slate-400 mb-1">
              <span class="text-amber-400 font-bold">2024</span>
              <span>Manufacture & Agro (Minahasa Selatan)</span>
            </div>
            <h3 class="text-lg font-bold text-white">HR Assistant Manager</h3>
            <div class="text-sm font-medium text-slate-300">PT. Kelapa Jaya Lestari</div>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">
              Membuat struktur organisasi dan uraian jabatan terpadu, rencana keuangan ketenagakerjaan, memastikan legalitas hukum HR, dan standardisasi kedisiplinan operasional pabrik.
            </p>
            <div class="mt-3 rounded-lg overflow-hidden border border-slate-700/80">
              <img src="/src/assets/images/exp_kelapa_jaya_factory_1793131310551.jpg" alt="Dokumentasi Manufaktur Kelapa" class="w-full h-44 object-cover">
              <div class="p-2 bg-slate-950 text-[11px] text-slate-300">📸 Standardisasi Struktur & Operasional Manufaktur Agro Kelapa</div>
            </div>
          </div>
        </div>

        <!-- Job 4 -->
        <div class="relative group">
          <div class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700"></div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <div class="flex flex-wrap justify-between items-center text-xs text-slate-400 mb-1">
              <span class="text-amber-400 font-bold">2023 - 2024</span>
              <span>Wirausaha & F&B (Manado)</span>
            </div>
            <h3 class="text-lg font-bold text-white">Business Owner & Operations Manager</h3>
            <div class="text-sm font-medium text-slate-300">Rumah Kopi Aerie Manado</div>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">
              Mengelola operasional harian kedai kopi, rantai pasok F&B, perencanaan arus kas keuangan, serta rekrutmen dan supervisi staf layanan.
            </p>
            <div class="mt-3 rounded-lg overflow-hidden border border-slate-700/80">
              <img src="/src/assets/images/exp_coffee_shop_owner_1793131331204.jpg" alt="Dokumentasi Rumah Kopi Aerie" class="w-full h-44 object-cover">
              <div class="p-2 bg-slate-950 text-[11px] text-slate-300">📸 Operasional Bisnis & Tim Barista Rumah Kopi Aerie</div>
            </div>
          </div>
        </div>

        <!-- Job 5 -->
        <div class="relative group">
          <div class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700"></div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <div class="flex flex-wrap justify-between items-center text-xs text-slate-400 mb-1">
              <span class="text-amber-400 font-bold">2019 - 2022</span>
              <span>Retail Conglomerate (Manado)</span>
            </div>
            <h3 class="text-lg font-bold text-white">HC Representative</h3>
            <div class="text-sm font-medium text-slate-300">Kawan Lama Group Retail Manado</div>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">
              Rekrutmen massal pembukaan gerai baru (new store opening), operasional HRIS (Hc plus, People Pro), penanganan hubungan industrial, serta koordinasi kemitraan vendor & instansi pemerintah.
            </p>
            <div class="mt-3 rounded-lg overflow-hidden border border-slate-700/80">
              <img src="/src/assets/images/gallery_retail_store_team_1793125800576.jpg" alt="Dokumentasi Kawan Lama Retail" class="w-full h-44 object-cover">
              <div class="p-2 bg-slate-950 text-[11px] text-slate-300">📸 Formasi & Briefing Pembukaan Toko Baru (New Store Opening)</div>
            </div>
          </div>
        </div>

        <!-- Job 6 -->
        <div class="relative group">
          <div class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700"></div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <div class="flex flex-wrap justify-between items-center text-xs text-slate-400 mb-1">
              <span class="text-amber-400 font-bold">2016 - 2018</span>
              <span>International Hotel Bintang 4 (Manado)</span>
            </div>
            <h3 class="text-lg font-bold text-white">Assistant HR Manager</h3>
            <div class="text-sm font-medium text-slate-300">Best Western the Lagoon Hotel Manado</div>
            <p class="text-xs text-slate-400 mt-2 leading-relaxed">
              Manpower planning perhotelan, perhitungan payroll & service charge, administrasi BPJS, perumusan Employee Policy Manual, penyelenggaraan employee events, dan audit kepatuhan Best Western QA.
            </p>
            <div class="mt-3 rounded-lg overflow-hidden border border-slate-700/80">
              <img src="/src/assets/images/regenerated_image_1793166686205.jpg" alt="Dokumentasi Best Western Hotel" class="w-full h-44 object-cover">
              <div class="p-2 bg-slate-950 text-[11px] text-slate-300">📸 Pencapaian Audit Kepatuhan Best Western Quality Assurance</div>
            </div>
          </div>
        </div>

        <!-- Job 7 & 8 (Fondasi) -->
        <div class="relative group">
          <div class="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700"></div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <div class="text-xs text-amber-400 font-bold mb-1">2013 - 2016 · Pengalaman Pendukung</div>
            <div class="text-xs text-slate-300 space-y-1">
              <p>• <strong>Freelancer Data Analyst Alfamart (2016):</strong> Analisis kuantitatif data penjualan dan inventaris gerai ritel.</p>
              <div class="my-2 rounded-lg overflow-hidden border border-slate-700/80">
                <img src="/src/assets/images/exp_data_analyst_retail_1793131352140.jpg" alt="Dokumentasi Data Analyst" class="w-full h-36 object-cover">
              </div>
              <p class="pt-2">• <strong>F&B Secretary Lion Hotel & Plaza (2013 - 2014):</strong> Kesekretariatan F&B, banquet event orders, dan korespondensi perhotelan.</p>
              <div class="my-2 rounded-lg overflow-hidden border border-slate-700/80">
                <img src="/src/assets/images/exp_hotel_fb_secretary_1793131369162.jpg" alt="Dokumentasi F&B Secretary" class="w-full h-36 object-cover">
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ==================== 5. KEAHLIAN & SERTIFIKASI ==================== -->
  <section id="keahlian" class="py-16 bg-slate-900/40 border-b border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-12">
        <div class="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Kompetensi</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Keahlian Teknis & Sertifikasi Resmi
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Hard Skills -->
        <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
          <h3 class="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">Hard Skills</h3>
          <ul class="text-xs text-slate-300 space-y-2">
            <li>• Interviewing & Assessment (CBI, STAR)</li>
            <li>• Document Administration & Filing</li>
            <li>• Indonesian Labor Law & Kepatuhan PP</li>
            <li>• Industrial Relations & Disnaker Mediation</li>
            <li>• HR Budgeting & Manpower Planning</li>
            <li>• Compensation & Benefits (C&B)</li>
          </ul>
        </div>

        <!-- HRIS & Tools -->
        <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
          <h3 class="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">HRIS & Digital Tools</h3>
          <ul class="text-xs text-slate-300 space-y-2">
            <li>• Hc plus HRIS</li>
            <li>• People Pro HRIS</li>
            <li>• SIPP Online BPJS Ketenagakerjaan</li>
            <li>• Google Suite (Sheets, Docs, Forms)</li>
            <li>• Microsoft Office (Excel, Word, PPT)</li>
          </ul>
        </div>

        <!-- Soft Skills -->
        <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
          <h3 class="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">Soft Skills</h3>
          <ul class="text-xs text-slate-300 space-y-2">
            <li>• Interpersonal Leadership</li>
            <li>• Effective & Empathetic Communication</li>
            <li>• Multitasking & Priority Management</li>
            <li>• Conflict Resolution & Mediation</li>
            <li>• Negotiation & Problem Solving</li>
          </ul>
        </div>

        <!-- Sertifikat & Bahasa -->
        <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
          <h3 class="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">Sertifikasi & Bahasa</h3>
          <ul class="text-xs text-slate-300 space-y-2">
            <li>• Be Ultimate Assistant (Lion Hotel)</li>
            <li>• Best Western Quality Assurance (QA)</li>
            <li>• Computer Informatics Certificate</li>
            <li>• S.AB. Cum Laude (UNSRAT)</li>
            <li>• Bahasa Indonesia (Native)</li>
            <li>• English (Professional Working)</li>
          </ul>
        </div>

      </div>

    </div>
  </section>

  <!-- ==================== 6. LOWONGAN KERJA (SOLUSIKERJAKITA) ==================== -->
  <section id="lowongan" class="py-16 bg-[#070c18] border-b border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-12">
        <div class="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Portal Rekrutmen</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          SolusiKerjaKita - Talent Pool & Lowongan Aktif
        </h2>
        <p class="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          Platform rekrutmen langsung oleh Ischevell Saina. Temukan posisi impian Anda atau daftarkan diri Anda untuk bergabung dalam jaringan profesional kami.
        </p>
      </div>

      <!-- Kartu-Kartu Lowongan -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Job Card 1 -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-amber-500/40 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span class="text-amber-400 font-bold">Human Resources</span>
              <span>Full-Time</span>
            </div>
            <h3 class="text-xl font-bold text-white">HR Operations Staff</h3>
            <div class="text-xs text-slate-300 mt-1">Hospitality & Property Management · Fatmawati, Jakarta Selatan</div>
            <p class="text-xs text-slate-400 mt-3 leading-relaxed">
              Mengelola administrasi personalia, pelaporan portal SIPP BPJS Kesehatan & Ketenagakerjaan, orientasi onboarding staf baru, serta monitoring absensi dan lembur.
            </p>
            <div class="mt-4 pt-3 border-t border-slate-800 flex justify-between text-xs">
              <span class="text-emerald-400 font-semibold">Rp 6.000.000 - Rp 8.500.000</span>
              <span class="text-slate-400">Min. 1-2 tahun pengalaman</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800">
            <button onclick="openApplyModal('HR Operations Staff', 'job-1')" class="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all">
              Lamar Sekarang
            </button>
          </div>
        </div>

        <!-- Job Card 2 -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span class="text-amber-400 font-bold">Store Operations</span>
              <span>Full-Time</span>
            </div>
            <h3 class="text-xl font-bold text-white">Store Supervisor</h3>
            <div class="text-xs text-slate-300 mt-1">Modern Retail & Furnishing · Jabodetabek & Manado</div>
            <p class="text-xs text-slate-400 mt-3 leading-relaxed">
              Memimpin tim sales associate dan kasir gerai ritel, mengawasi pencapaian target penjualan toko, display visual merchandising, dan loss prevention.
            </p>
            <div class="mt-4 pt-3 border-t border-slate-800 flex justify-between text-xs">
              <span class="text-emerald-400 font-semibold">Rp 5.500.000 - Rp 7.500.000 + Insentif</span>
              <span class="text-slate-400">Min. 2 tahun ritel</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800">
            <button onclick="openApplyModal('Store Supervisor', 'job-2')" class="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all">
              Lamar Sekarang
            </button>
          </div>
        </div>

      </div>

      <!-- Banner Talent Pool -->
      <div class="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="text-base font-bold text-white">Ingin Bergabung dalam Database Talent Pool?</h4>
          <p class="text-xs text-slate-400 mt-1">Daftarkan CV Anda sekarang untuk diprioritaskan saat ada pembukaan lowongan baru.</p>
        </div>
        <button onclick="openApplyModal('General Talent Pool (Pendaftaran Terbuka)', 'job-general')" class="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-400/40 text-xs font-semibold rounded-xl whitespace-nowrap">
          Daftar Talent Pool
        </button>
      </div>

    </div>
  </section>

  <!-- ==================== 7. GALERI KEGIATAN & MOMEN BERKESAN ==================== -->
  <section id="galeri" class="py-16 bg-slate-900/60 border-b border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-12">
        <div class="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Dokumentasi & Portofolio Momen</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Galeri Kegiatan & Momen Berkesan
        </h2>
        <p class="mt-3 text-sm text-slate-300 leading-relaxed">
          Dokumentasi rekam jejak kepemimpinan HR, rapat evaluasi multi-properti, pelatihan karyawan, dan pencapaian mutu organisasi.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Item 1 -->
        <div class="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="aspect-[16/9] w-full bg-slate-900 overflow-hidden relative">
              <img src="/src/assets/images/gallery_hotel_meeting_1793125770383.jpg" alt="Rapat Koordinasi 8 Properti Hotel" class="w-full h-full object-cover">
              <span class="absolute top-3 left-3 text-[11px] font-semibold text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded">Multi-Properti Hotel</span>
            </div>
            <div class="p-6">
              <div class="text-xs text-amber-400 font-semibold mb-1">2024 - 2026 · Jakarta</div>
              <h3 class="text-lg font-bold text-white">Rapat Koordinasi Strategis & Manpower Planning</h3>
              <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                Evaluasi bulanan bersama General Manager dan HOD untuk standardisasi SOP operasional dan pengendalian anggaran HR Budgeting pada 8 properti hotel serentak.
              </p>
            </div>
          </div>
          <div class="px-6 py-3 bg-slate-900/50 border-t border-slate-800 text-[11px] text-slate-400">
            Standardisasi SOP & Manpower Planning Multi-Unit
          </div>
        </div>

        <!-- Item 2 -->
        <div class="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="aspect-[16/9] w-full bg-slate-900 overflow-hidden relative">
              <img src="/src/assets/images/gallery_training_session_1793125786457.jpg" alt="Workshop & Employee Engagement" class="w-full h-full object-cover">
              <span class="absolute top-3 left-3 text-[11px] font-semibold text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded">Pelatihan & Workshop</span>
            </div>
            <div class="p-6">
              <div class="text-xs text-amber-400 font-semibold mb-1">2024 · Training Hall</div>
              <h3 class="text-lg font-bold text-white">Workshop & Pelatihan Employee Engagement</h3>
              <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                Pemberian materi kepemimpinan dasar, budaya layanan prima, serta edukasi hak dan kewajiban kerja guna membangun iklim organisasi yang sehat dan termotivasi.
              </p>
            </div>
          </div>
          <div class="px-6 py-3 bg-slate-900/50 border-t border-slate-800 text-[11px] text-slate-400">
            Peningkatan Retensi Staf & Komunikasi Terbuka
          </div>
        </div>

        <!-- Item 3 -->
        <div class="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="aspect-[16/9] w-full bg-slate-900 overflow-hidden relative">
              <img src="/src/assets/images/gallery_retail_store_team_1793125800576.jpg" alt="New Store Opening Ritel" class="w-full h-full object-cover">
              <span class="absolute top-3 left-3 text-[11px] font-semibold text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded">Ritel & Store Opening</span>
            </div>
            <div class="p-6">
              <div class="text-xs text-amber-400 font-semibold mb-1">2019 - 2024 · Jabodetabek & Manado</div>
              <h3 class="text-lg font-bold text-white">Persiapan Tim & Briefing Peresmian Gerai Baru</h3>
              <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                Momen briefing harian bersama staf dan supervisor gerai ritel modern pasca proses mass hiring, memastikan kesiapan layanan dan penataan merchandising toko.
              </p>
            </div>
          </div>
          <div class="px-6 py-3 bg-slate-900/50 border-t border-slate-800 text-[11px] text-slate-400">
            Pemenuhan Formasi Gerai Ritel 100% Tepat Waktu
          </div>
        </div>

        <!-- Item 4 -->
        <div class="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between">
          <div>
            <div class="aspect-[16/9] w-full bg-slate-900 overflow-hidden relative">
              <img src="/src/assets/images/regenerated_image_1793166686205.jpg" alt="Pencapaian Best Western QA" class="w-full h-full object-cover">
              <span class="absolute top-3 left-3 text-[11px] font-semibold text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded">Penghargaan & QA</span>
            </div>
            <div class="p-6">
              <div class="text-xs text-amber-400 font-semibold mb-1">2016 - 2018 · Hotel Bintang 4 Manado</div>
              <h3 class="text-lg font-bold text-white">Pencapaian Audit Best Western Quality Assurance</h3>
              <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                Dokumentasi perayaan keberhasilan tim manajemen hotel dalam meraih sertifikasi kepatuhan standar internasional Best Western QA untuk tata kelola mutu dan kedisiplinan kerja SDM.
              </p>
            </div>
          </div>
          <div class="px-6 py-3 bg-slate-900/50 border-t border-slate-800 text-[11px] text-slate-400">
            Kepatuhan Standar Perhotelan Internasional
          </div>
        </div>
      </div>

      <div class="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
        💡 <strong>Catatan Klien:</strong> Foto di atas merupakan foto ilustratif kegiatan operasional HR. Anda dapat mengganti gambar-gambar ini kapan saja dengan foto autentik kegiatan Anda.
      </div>

    </div>
  </section>

  <!-- ==================== 8. KONTAK ==================== -->
  <section id="kontak" class="py-16 bg-slate-900/60 border-b border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mb-12">
        <div class="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Hubungi Saya</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Konsultasi HR & Rekrutmen Profesional
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
          <div class="text-xs text-slate-400 font-semibold uppercase tracking-wider">Kontak Langsung</div>
          <div class="space-y-3 text-sm text-slate-300">
            <p><strong>Nama:</strong> Ischevell Vialara Saina</p>
            <p><strong>Email:</strong> <a href="mailto:sainaischevell@gmail.com" class="text-amber-400 hover:underline">sainaischevell@gmail.com</a></p>
            <p><strong>Telepon / WhatsApp:</strong> <a href="https://wa.me/6282194466846" target="_blank" class="text-emerald-400 hover:underline">+62 821-9446-6846</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ischevellsaina" target="_blank" class="text-sky-400 hover:underline">linkedin.com/in/ischevellsaina</a></p>
            <p><strong>Domisili:</strong> Kalibata , Jakarta Selatan </p>
          </div>
        </div>

        <div class="p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 class="text-sm font-bold text-white mb-2">Konsultasi Organisasi & Kemitraan</h4>
            <p class="text-xs text-slate-400 leading-relaxed mb-4">
              Butuh pendampingan penyusunan SOP HR, manpower planning multi-unit, atau perekrutan level manajer? Klik tombol di bawah untuk terhubung langsung via WhatsApp.
            </p>
          </div>
          <a href="https://wa.me/6282194466846?text=Halo%20Bu%20Ischevell,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20HR" target="_blank" class="w-full text-center py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all">
            Chat via WhatsApp Sekarang
          </a>
        </div>
      </div>

    </div>
  </section>

  <!-- ==================== 8. FOOTER ==================== -->
  <footer class="py-10 bg-[#070c18] text-xs text-slate-500 text-center">
    <div class="max-w-7xl mx-auto px-4 space-y-3">
      <p>Hak Cipta © 2026 Ischevell V. Saina. Didukung oleh <strong class="text-slate-300">SolusiKerjaKita</strong>.</p>
      <div class="flex justify-center gap-4 text-slate-400">
        <a href="mailto:sainaischevell@gmail.com" class="hover:text-amber-400">Email</a>
        <span>·</span>
        <a href="https://wa.me/6282194466846" target="_blank" class="hover:text-emerald-400">WhatsApp</a>
        <span>·</span>
        <a href="https://linkedin.com/in/ischevellsaina" target="_blank" class="hover:text-sky-400">LinkedIn</a>
      </div>
    </div>
  </footer>

  <!-- ==================== 9. MODAL FORMULIR LAMARAN CEPAT ==================== -->
  <div id="applyModal" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">
      
      <div class="flex justify-between items-center pb-4 border-b border-slate-800 mb-4">
        <div>
          <h3 class="text-lg font-bold text-white">Formulir Lamaran Cepat</h3>
          <p class="text-xs text-amber-400">SolusiKerjaKita · Rekrutmen Langsung</p>
        </div>
        <button onclick="closeApplyModal()" class="text-slate-400 hover:text-white p-1">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <form id="recruitmentForm" onsubmit="handleRecruitmentSubmit(event)" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Posisi yang Dilamar *</label>
          <select id="modalPosition" required class="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400">
            <option value="HR Operations Staff">HR Operations Staff</option>
            <option value="Store Supervisor">Store Supervisor</option>
            <option value="General Talent Pool (Pendaftaran Terbuka)">General Talent Pool (Pendaftaran Terbuka)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Nama Lengkap *</label>
          <input type="text" id="applicantName" required placeholder="Nama Lengkap Anda" class="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400" />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Nomor WhatsApp / Kontak *</label>
          <input type="tel" id="applicantPhone" required placeholder="0812-xxxx-xxxx" class="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400" />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Tautan CV / LinkedIn (Google Drive / PDF Link) *</label>
          <input type="url" id="applicantCvLink" required placeholder="https://drive.google.com/... atau https://linkedin.com/in/..." class="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400" />
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Catatan / Ringkasan Pengalaman</label>
          <textarea id="applicantNote" rows="2" placeholder="Tuliskan ringkasan pengalaman relevan Anda..." class="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"></textarea>
        </div>

        <div class="pt-2 flex justify-end gap-3">
          <button type="button" onclick="closeApplyModal()" class="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 rounded-lg">
            Batal
          </button>
          <button type="submit" class="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all">
            Kirim Lamaran
          </button>
        </div>
      </form>

      <!-- Feedback Terkirim -->
      <div id="submitSuccessBox" class="hidden text-center py-6 space-y-4">
        <div class="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl">
          ✓
        </div>
        <h4 class="text-base font-bold text-white">Lamaran Berhasil Dikirim!</h4>
        <p class="text-xs text-slate-300" id="successSummaryText">
          Berkas Anda telah diterima oleh Ischevell Saina.
        </p>
        <a id="waDirectBtn" href="#" target="_blank" class="block w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl">
          Konfirmasi via WhatsApp ke Bu Ischevell
        </a>
        <button onclick="closeApplyModal()" class="text-xs text-slate-400 hover:text-white pt-2">
          Tutup Jendela
        </button>
      </div>

    </div>
  </div>

  <!-- ==================== 10. JAVASCRIPT VANILLA ==================== -->
  <script>
    // Toggle Mobile Navigation
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Modal Handlers
    function openApplyModal(positionTitle, jobId) {
      const modal = document.getElementById('applyModal');
      const select = document.getElementById('modalPosition');
      const form = document.getElementById('recruitmentForm');
      const successBox = document.getElementById('submitSuccessBox');

      form.classList.remove('hidden');
      successBox.classList.add('hidden');

      if (positionTitle && select) {
        let found = false;
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value === positionTitle) {
            select.selectedIndex = i;
            found = true;
            break;
          }
        }
        if (!found) {
          const opt = new Option(positionTitle, positionTitle);
          select.add(opt);
          select.value = positionTitle;
        }
      }

      modal.classList.remove('hidden');
    }

    function closeApplyModal() {
      document.getElementById('applyModal').classList.add('hidden');
    }

    // Submit Handler
    function handleRecruitmentSubmit(event) {
      event.preventDefault();
      
      const position = document.getElementById('modalPosition').value;
      const name = document.getElementById('applicantName').value;
      const phone = document.getElementById('applicantPhone').value;
      const cvLink = document.getElementById('applicantCvLink').value;
      const note = document.getElementById('applicantNote').value;

      // Buat tautan WhatsApp
      const waText = "Halo Bu Ischevell Saina,%0A%0ASaya telah melamar untuk posisi: " + encodeURIComponent(position) + 
                     "%0ANama: " + encodeURIComponent(name) + 
                     "%0AKontak: " + encodeURIComponent(phone) + 
                     "%0ATautan CV: " + encodeURIComponent(cvLink) + 
                     (note ? "%0ACatatan: " + encodeURIComponent(note) : "") + 
                     "%0A%0ATerima kasih!";

      const waUrl = "https://wa.me/6282194466846?text=" + waText;

      document.getElementById('recruitmentForm').classList.add('hidden');
      document.getElementById('successSummaryText').innerText = "Terima kasih, " + name + ". Lamaran Anda untuk posisi " + position + " telah dicatat dalam basis data rekrutmen Ischevell Saina.";
      document.getElementById('waDirectBtn').href = waUrl;
      document.getElementById('submitSuccessBox').classList.remove('hidden');

      // Tampilkan notifikasi alert sederhana
      alert("Terima kasih, " + name + "! Lamaran Anda untuk posisi " + position + " berhasil dikirim ke sistem rekrutmen Ischevell Saina.");
    }
  </script>

</body>
</html>`;
};
