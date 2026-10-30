import { ExperienceItem, JobPosting, SkillCategory } from '../types';
import { APP_IMAGES } from './assets';

export const CLIENT_PROFILE = {
  fullName: 'Ischevell Vialara Saina',
  shortName: 'Ischevell Saina',
  title: 'Senior HR Professional & Head of Human Resources',
  degree: 'Bachelor Degree in Business Administration, concentration of Human Resources Management (Cumlaude, Sam Ratulangi University)',
  university: 'Universitas Sam Ratulangi (UNSRAT)',
  gpaStatus: 'Cum Laude (Dengan Pujian)',
  tagline: 'HR Professional with extensive employee relations, strategic leadership in Talent Acquisition, HR Budgeting, Policy & SOP, and Industrial Relations across Hotel, Manufacture, and Retail industries.',
  email: 'sainaischevell@gmail.com',
  phone: '+62 821-9446-6846',
  rawPhone: '6282194466846',
  linkedInUrl: 'https://linkedin.com/in/ischevellsaina',
  linkedInDisplay: 'linkedin.com/in/ischevellsaina',
  domicile: 'Kalibata, Jakarta Selatan',
  currentRole: 'Head HR di PT. Prima Hotel Manajemen Indonesia',
  profilePhoto: APP_IMAGES.profile,
  stats: [
    { value: '12+', label: 'Tahun Pengalaman Kerja', note: 'Karier berkesinambungan sejak 2013' },
    { value: '8', label: 'Properti Hotel Dikelola', note: 'Multi-unit strategic manpower & SOP' },
    { value: '500+', label: 'Talenta Berhasil Direkrut', note: 'Dari staf lapangan hingga level manajerial' },
    { value: '100%', label: 'Kepatuhan Regulasi', note: 'UU Ketenagakerjaan & Audit Ketenagakerjaan' }
  ]
};

export const CAREER_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Head of Human Resources (Head HR)',
    company: 'PT. Prima Hotel Manajemen Indonesia',
    location: 'Jakarta & Multi-Properti',
    period: '2024 - 2026',
    startYear: 2024,
    endYear: 2026,
    category: 'Hospitality',
    tagline: 'Kepemimpinan strategis SDM untuk jaringan multi-properti hotel bintang',
    description: 'Memimpin departemen SDM dan menetapkan standardisasi kebijakan operasional, manpower planning, dan hubungan industrial pada 8 properti hotel di bawah naungan manajemen.',
    keyAchievements: [
      'Menyusun dan mengeksekusi Comprehensive Manpower Planning (MPP) untuk 8 properti hotel serentak.',
      'Merancang Corporate Policies & Standard Operating Procedures (SOP) HR menyeluruh dari rekrutmen hingga terminasi.',
      'Menyusun dan mengontrol HR Budgeting tahunan, mengefisiensikan cost per hire sebesar 18% tanpa mengurangi standar kualifikasi.',
      'Memimpin rekrutmen end-to-end level Managerial (General Manager, Hotel Manager, HOD) dengan ketepatan onboarding 95%.',
      'Mengelola Employee Relations & mediasi komunikasi serikat pekerja (Union Communications) secara harmonis dan zero dispute.'
    ],
    skillsApplied: ['Strategic HR Planning', 'HR Budgeting', 'Policy & SOP Formulation', 'Managerial Recruitment', 'Industrial Relations', 'Union Relations']
  },
  {
    id: 'exp-2',
    role: 'Human Resources Representative',
    company: 'PT. Catur Mitra Sejati Sentosa (IKEA / Mitra10 Group)',
    location: 'Fatmawati, Jakarta Selatan',
    period: '2024',
    startYear: 2024,
    endYear: 2024,
    category: 'Retail',
    tagline: 'Operasional HC & C&B pada ritel modern berskala nasional',
    description: 'Bertanggung jawab atas rekrutmen, administrasi personalia, compensation & benefits, koordinasi BPJS, pengelolaan General Affairs, dan implementasi program employee engagement.',
    keyAchievements: [
      'Menangani proses rekrutmen volume tinggi untuk divisi store ritel modern dengan turn-around time kurang dari 14 hari.',
      'Mengelola administrasi Compensation & Benefits (C&B), pemutakhiran data payroll, serta kepesertaan BPJS Ketenagakerjaan & Kesehatan SIPP.',
      'Mengkoordinasikan kebutuhan General Affairs (GA), fasilitas gerai ritel, dan inventaris operasional kerja.',
      'Menginisiasi program Employee Engagement bulanan yang meningkatkan retensi staf toko sebesar 15%.'
    ],
    skillsApplied: ['Retail Recruitment', 'C&B Management', 'BPJS Kesehatan/Ketenagakerjaan', 'General Affairs', 'Employee Engagement']
  },
  {
    id: 'exp-3',
    role: 'HR Assistant Manager',
    company: 'PT. Kelapa Jaya Lestari',
    location: 'Minahasa Selatan, Sulawesi Utara',
    period: '2024',
    startYear: 2024,
    endYear: 2024,
    category: 'Manufacture',
    tagline: 'Pembangunan fondasi organisasi dan tata kelola legal manufaktur kelapa terpadu',
    description: 'Merancang arsitektur organisasi baru, deskripsi jabatan, skema pengupahan dan rencana keuangan operasional, serta memastikan kepatuhan regulasi pabrik manufaktur agro.',
    keyAchievements: [
      'Menyusun Struktur Organisasi & Analisis Jabatan (Job Description & Specification) dari level buruh pabrik hingga kepala unit.',
      'Merancang rencana keuangan anggaran ketenagakerjaan dan skema lembur (overtime) sesuai regulasi Disnaker.',
      'Memastikan seluruh legalitas ketenagakerjaan, izin kerja, PKWT/PKWTT, dan sistem K3 operasional pabrik terpenuhi.',
      'Membangun sistem absensi dan kedisiplinan kerja pabrik dengan penurunan angka ketidakhadiran sebesar 22%.'
    ],
    skillsApplied: ['Organizational Design', 'Job Analysis', 'Labor Law Compliance', 'Manufacturing HR', 'Budget Formulation']
  },
  {
    id: 'exp-4',
    role: 'Business Owner & Operational Manager',
    company: 'Rumah Kopi Aerie',
    location: 'Manado, Sulawesi Utara',
    period: '2023 - 2024',
    startYear: 2023,
    endYear: 2024,
    category: 'Business',
    tagline: 'Kewirausahaan mandiri, tata kelola F&B, dan kepemimpinan tim lapangan',
    description: 'Mendirikan dan mengelola bisnis kedai kopi modern, mencakup rantai pasok makanan & minuman, manajemen arus kas keuangan, serta rekrutmen dan supervisi staf barista.',
    keyAchievements: [
      'Mengelola operasional harian kafe secara menyeluruh mulai dari standardisasi resep F&B hingga kepuasan pelanggan.',
      'Melakukan rekrutmen, pelatihan hospitality barista, penyusunan jadwal kerja shift, dan evaluasi performa mingguan staf.',
      'Mengontrol arus kas (Cashflow), margin laba kotor, dan strategi pemasaran lokal berbasis komunitas.'
    ],
    skillsApplied: ['Entrepreneurship', 'F&B Operations', 'Cash Flow Management', 'Team Leadership', 'Customer Experience']
  },
  {
    id: 'exp-5',
    role: 'Human Capital (HC) Representative',
    company: 'Kawan Lama Group Retail',
    location: 'Manado, Sulawesi Utara',
    period: '2019 - 2022',
    startYear: 2019,
    endYear: 2022,
    category: 'Retail',
    tagline: 'Talent acquisition ritel berskala besar dan mediasi hubungan industrial terpadu',
    description: 'Menangani siklus rekrutmen pembukaan toko baru (New Store Opening), administrasi HRIS terintegrasi, hubungan industrial dengan instansi ketenagakerjaan, serta kemitraan vendor.',
    keyAchievements: [
      'Memimpin rekrutmen massal (mass hiring) untuk pembukaan gerai baru ritel Kawan Lama Group di Manado dengan pemenuhan kuota 100% tepat waktu.',
      'Mengoperasikan dan mengoptimasi sistem HRIS korporat (People Pro & Hc plus) untuk data personalia, absensi digital, dan riwayat cuti ratusan karyawan.',
      'Menangani mediasi hubungan industrial internal dan eksternal, menjalin komunikasi aktif dengan Disnaker Kota Manado.',
      'Mengelola hubungan kerja sama dengan vendor outsourcing security, cleaning service, dan penyedia tenaga kerja alih daya.'
    ],
    skillsApplied: ['Mass Recruitment', 'HRIS (People Pro, Hc plus)', 'New Store Opening', 'Government Relations', 'Vendor Management']
  },
  {
    id: 'exp-6',
    role: 'Assistant HR Manager',
    company: 'Best Western the Lagoon Hotel Manado',
    location: 'Manado, Sulawesi Utara',
    period: '2016 - 2018',
    startYear: 2016,
    endYear: 2018,
    category: 'Hospitality',
    tagline: 'Manajemen perhotelan jaringan internasional bintang 4 & kepatuhan audit',
    description: 'Memimpin tim HR perhotelan bintang 4 dalam manpower planning, payroll hotel, BPJS, penyusunan Employee Policy Manual, serta penyelenggaraan program kesejahteraan karyawan.',
    keyAchievements: [
      'Menyusun buku pedoman karyawan (Employee Policy Manual & Handbook) berstandar Best Western International.',
      'Mengelola proses payroll bulanan secara akurat untuk seluruh staf hotel termasuk perhitungan service charge dan lembur.',
      'Mengkoordinasikan kepesertaan BPJS dan audit kepatuhan Best Western Quality Assurance (QA).',
      'Merancang agenda Employee Recognition, gathering tahunan, dan program pelatihan hospitality service culture.'
    ],
    skillsApplied: ['Hotel HR Management', 'Payroll & Service Charge', 'Policy Manual Formulation', 'Quality Assurance Audit', 'Employee Welfare']
  },
  {
    id: 'exp-7',
    role: 'Freelancer Data Analyst',
    company: 'Alfamart (PT. Sumber Alfaria Trijaya)',
    location: 'Manado',
    period: '2016',
    startYear: 2016,
    endYear: 2016,
    category: 'Data',
    tagline: 'Pengolahan dan analisis data kuantitatif operasional ritel',
    description: 'Melakukan rekapitulasi data penjualan gerai ritel, analisis trend perputaran produk, dan penyusunan laporan evaluasi operasional berbasis spreadsheet.',
    keyAchievements: [
      'Mengolah ribuan baris data penjualan toko menjadi visualisasi tren yang mudah dieksekusi oleh tim manajerial.',
      'Mengidentifikasi anomali data inventaris stok dengan ketelitian tinggi.'
    ],
    skillsApplied: ['Data Analytics', 'Excel Advanced Modeling', 'Trend Analysis', 'Inventory Reconciliation']
  },
  {
    id: 'exp-8',
    role: 'Food & Beverage Secretary',
    company: 'Lion Hotel & Plaza Manado',
    location: 'Manado',
    period: '2013 - 2014',
    startYear: 2013,
    endYear: 2014,
    category: 'Hospitality',
    tagline: 'Fondasi administrasi eksekutif perhotelan & layanan prima',
    description: 'Mendukung Direktur & Manajer F&B dalam kesekretariatan departemen, korespondensi formal, pencatatan banquet event order, dan koordinasi operasional perhotelan.',
    keyAchievements: [
      'Menerima penghargaan Be Ultimate Assistant atas kecepatan respons dan presisi korespondensi.',
      'Mendokumentasikan ratusan Banquet Event Orders (BEO) untuk acara korporat dan kenegaraan.'
    ],
    skillsApplied: ['Executive Secretarial', 'Hospitality Coordination', 'BEO Management', 'Document Filing']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Keahlian Teknis HR (Hard Skills)',
    subtitle: 'Penguasaan instrumen hukum, rekrutmen, dan tata kelola SDM modern',
    items: [
      { name: 'End-to-End Talent Acquisition', level: 'Ahli', description: 'Metode Competency-Based Interviewing (CBI), STAR method, executive search, dan mass hiring.' },
      { name: 'Hukum Ketenagakerjaan (Labor Law)', level: 'Ahli', description: 'Penguasaan UU Ketenagakerjaan, regulasi PP, PKWT/PKWTT, pesangon, dan kepatuhan Disnaker.' },
      { name: 'Hubungan Industrial (Industrial Relations)', level: 'Mahir', description: 'Mediasi bipartit, komunikasi serikat pekerja, resolusi sengketa, dan pencegahan dispute.' },
      { name: 'HR Budgeting & Manpower Planning', level: 'Ahli', description: 'Perancangan MPP multi-properti, cost-per-hire optimization, dan proyeksi belanja gaji.' },
      { name: 'Compensation & Benefits (C&B)', level: 'Mahir', description: 'Pengelolaan payroll, lembur, service charge hotel, pelaporan SIPP BPJS Ketenagakerjaan & BPJS Kesehatan.' },
      { name: 'SOP & Policy Formulation', level: 'Ahli', description: 'Penyusunan Peraturan Perusahaan (PP), SOP rekrutmen hingga terminasi, dan kode etik karyawan.' }
    ]
  },
  {
    title: 'Sistem HRIS & Perangkat Digital',
    subtitle: 'Teknologi pendukung efisiensi administrasi dan analisis data personalia',
    items: [
      { name: 'Hc plus HRIS Platform', level: 'Mahir', description: 'Pengelolaan database karyawan, rekam jejak personalia, absensi, dan modul cuti digital.' },
      { name: 'People Pro HRIS', level: 'Mahir', description: 'Administrasi personalia ritel grup besar, rotasi divisi, dan verifikasi kehadiran.' },
      { name: 'SIPP Online BPJS', level: 'Ahli', description: 'Pelaporan mutasi karyawan baru/keluar, klaim JHT, JKK, JKM, dan koordinasi BPJS Kesehatan.' },
      { name: 'Google Workspace Enterprise', level: 'Ahli', description: 'Google Sheets (advanced formula, vlookup, pivot), Docs, Slides, Google Forms screening, dan Drive security.' },
      { name: 'Microsoft Office Professional', level: 'Ahli', description: 'Excel data modeling, PowerPoint executive presentation, dan Word mail merge kontrak kerja.' }
    ]
  },
  {
    title: 'Kepemimpinan & Interpersonal (Soft Skills)',
    subtitle: 'Kecakapan relasional dalam menjembatani manajemen dan aspirasi karyawan',
    items: [
      { name: 'Strategic Interpersonal Leadership', level: 'Ahli', description: 'Membangun kepercayaan lintas departemen dari staf lapangan hingga dewan direksi.' },
      { name: 'Effective & Empathetic Communication', level: 'Ahli', description: 'Keterampilan menyampaikan keputusan sulit dengan penuh hormat dan transparansi tinggi.' },
      { name: 'Multitasking & Deadline Governance', level: 'Ahli', description: 'Manajemen proyek simultan lintas 8 unit properti dan ritel berkecepatan tinggi.' },
      { name: 'Conflict Resolution & Mediation', level: 'Mahir', description: 'Menengahi perselisihan kerja secara netral, berimbang, dan berlandaskan bukti objektif.' }
    ]
  },
  {
    title: 'Kemampuan Bahasa (Languages)',
    subtitle: 'Komunikasi profesional lisan dan tulisan',
    items: [
      { name: 'Bahasa Indonesia', level: 'Penutur Asli (Native)', description: 'Bahasa ibu, penguasaan bahasa hukum kontrak kerja dan mediasi formal ketenagakerjaan.' },
      { name: 'English', level: 'Kemampuan Kerja Profesional', description: 'Korespondensi bisnis, interview ekspatriat, dan pelaporan perhotelan standar internasional.' }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Bachelor of Business Administration (Cumlaude)',
    issuer: 'Universitas Sam Ratulangi (UNSRAT)',
    year: 'Lulusan Terbaik (Cum Laude)',
    description: 'Konsentrasi Manajemen Sumber Daya Manusia (HRM) dengan predikat Dengan Pujian.',
    badge: 'Akademik'
  },
  {
    title: 'Best Western Quality Assurance (QA)',
    issuer: 'Best Western International',
    year: 'Tersertifikasi',
    description: 'Audit kepatuhan standar internasional perhotelan bintang 4 dalam tata kelola fasilitas dan SDM.',
    badge: 'Perhotelan'
  },
  {
    title: 'Be Ultimate Assistant Award',
    issuer: 'Lion Hotel & Plaza',
    year: 'Keunggulan Profesional',
    description: 'Penghargaan dedikasi dan kecepatan kerja luar biasa dalam kesekretariatan F&B dan perhotelan.',
    badge: 'Penghargaan'
  },
  {
    title: 'Computer & Office Informatics Certificate',
    issuer: 'Certified Technical Competency',
    year: 'Kompetensi Digital',
    description: 'Sertifikasi kompetensi pengolahan data komputer, lembar kerja terstruktur, dan administrasi digital.',
    badge: 'Teknologi'
  }
];

export const ACTIVE_JOBS: JobPosting[] = [
  {
    id: 'job-01',
    title: 'HR Operations & Employee Relations Staff',
    department: 'Human Resources',
    category: 'HR',
    companyType: 'Hospitality & Property Management',
    location: 'Jakarta Selatan (Fatmawati / Kuningan)',
    workType: 'Full-Time',
    experienceRequired: 'Min. 1-2 tahun pengalaman HR',
    salaryRange: 'Rp 6.000.000 - Rp 8.500.000 / bulan',
    postedDate: 'Aktif Minggu Ini',
    deadline: 'Terbuka hingga terisi',
    isFeatured: true,
    overview: 'Posisi strategis untuk mendukung operasional harian HR pada grup properti hotel. Bertanggung jawab atas administrasi kepegawaian, hubungan industrial tingkat pertama, kepesertaan BPJS, serta pemutakhiran HRIS.',
    responsibilities: [
      'Mengelola database personalia karyawan dan pemutakhiran status PKWT/PKWTT.',
      'Melakukan pelaporan mutasi kepesertaan pada portal SIPP BPJS Ketenagakerjaan & BPJS Kesehatan.',
      'Menangani onboarding karyawan baru, pengenalan budaya perusahaan, dan administrasi berkas.',
      'Membantu mediasi komunikasi internal dan agenda employee engagement bulanan.',
      'Merekapitulasi absensi bulanan dan data lembur untuk proses payroll.'
    ],
    requirements: [
      'Pendidikan S1 Psikologi, Manajemen SDM, Hukum, atau Administrasi Bisnis.',
      'Pengalaman kerja minimal 1-2 tahun di bidang HR operasional atau HR generalist.',
      'Memahami dasar UU Ketenagakerjaan Indonesia & administrasi BPJS.',
      'Menguasai Microsoft Excel (Vlookup, Pivot Table) dan familiar dengan aplikasi HRIS.',
      'Komunikatif, teliti, berintegritas tinggi, dan mampu menjaga kerahasiaan data.'
    ],
    benefits: [
      'Gaji pokok kompetitif sesuai kualifikasi',
      'BPJS Kesehatan & Ketenagakerjaan lengkap',
      'Tunjangan makan & transportasi',
      'Peluang akselerasi karier di industri properti perhotelan',
      'Pelatihan kepemimpinan langsung di bawah bimbingan Head HR'
    ]
  },
  {
    id: 'job-02',
    title: 'Store Supervisor / Asisten Kepala Gerai',
    department: 'Store Operations',
    category: 'Retail',
    companyType: 'Modern Retail & Furnishing Chain',
    location: 'Jabodetabek & Manado (Multi-Lokasi)',
    workType: 'Full-Time',
    experienceRequired: 'Min. 2-3 tahun di ritel modern',
    salaryRange: 'Rp 5.500.000 - Rp 7.500.000 + Insentif',
    postedDate: 'Aktif Minggu Ini',
    deadline: 'Terbuka segera',
    isFeatured: true,
    overview: 'Memimpin operasional gerai ritel harian, memastikan pencapaian target penjualan toko, mengawasi standar penataan visual merchandising, serta memimpin tim sales associate dan kasir.',
    responsibilities: [
      'Memimpin pengarahan harian (morning briefing) dan pembagian target penjualan mingguan.',
      'Mengawasi ketersediaan stok produk, penerimaan barang, dan pencegahan kehilangan (loss prevention).',
      'Memastikan standar pelayanan pelanggan (service excellence) berjalan prima di seluruh area toko.',
      'Menyusun jadwal kerja shift staf dan mengevaluasi kedisiplinan kerja tim.',
      'Menyusun laporan harian penjualan dan trafik pengunjung toko kepada Area Manager.'
    ],
    requirements: [
      'Pendidikan D3/S1 semua jurusan.',
      'Pengalaman minimal 2 tahun sebagai Team Leader / Supervisor di ritel modern atau department store.',
      'Memiliki jiwa kepemimpinan yang tegas, berorientasi target, dan ramah konsumen.',
      'Bersedia bekerja dalam sistem shift termasuk akhir pekan / hari libur nasional.',
      'Penempatan fleksibel di Jabodetabek atau Manado (sesuai domisili kandidat).'
    ],
    benefits: [
      'Gaji pokok + Insentif target penjualan toko bulanan',
      'BPJS Kesehatan dan Ketenagakerjaan',
      'Jenjang karier menjadi Store Manager',
      'Diskon staf belanja produk perusahaan'
    ]
  },
  {
    id: 'job-03',
    title: 'Food & Beverage Service Supervisor',
    department: 'F&B Operations',
    category: 'Hospitality',
    companyType: 'Boutique Hotel & Premium Restaurant',
    location: 'Manado / Jakarta Selatan',
    workType: 'Full-Time',
    experienceRequired: 'Min. 2 tahun di hotel bintang atau resto berkelas',
    salaryRange: 'Rp 5.000.000 - Rp 7.000.000 + Service Charge',
    postedDate: 'Baru Ditambahkan',
    deadline: 'Terbuka',
    isFeatured: false,
    overview: 'Mengawasi kelancaran operasional restoran hotel, menjaga standar higienitas dan presentasi hidangan, serta memastikan tamu mendapatkan pengalaman kuliner terbaik.',
    responsibilities: [
      'Memimpin tim waiter/waitress dan barista dalam operasional shift harian.',
      'Memeriksa kesiapan banquet event order (BEO) untuk acara rapat dan perjamuan.',
      'Menangani masukan atau keluhan tamu secara cepat dan diplomatis.',
      'Mengontrol inventaris alat makan, gelas, serta operasional mesin kasir POS.'
    ],
    requirements: [
      'Lulusan SMK Pariwisata / D3 Perhotelan / S1 relevan.',
      'Pengalaman kerja minimal 2 tahun di F&B Service hotel bintang 3/4 atau restoran fine-dining.',
      'Kemampuan bahasa Inggris percakapan praktis untuk melayani tamu.',
      'Penampilan rapi, enerjik, dan berdisiplin tinggi.'
    ],
    benefits: [
      'Gaji pokok + Service Charge bulanan',
      'Duty meals dan fasilitas seragam kerja',
      'BPJS Ketenagakerjaan & Kesehatan',
      'Lingkungan kerja dinamis dan profesional'
    ]
  },
  {
    id: 'job-04',
    title: 'Talent Acquisition & Sourcing Specialist',
    department: 'Human Resources',
    category: 'HR',
    companyType: 'Corporate Management Holding',
    location: 'Jakarta Selatan / Hybrid',
    workType: 'Hybrid',
    experienceRequired: 'Min. 2 tahun di headhunter atau in-house recruiter',
    salaryRange: 'Rp 7.000.000 - Rp 10.000.000 / bulan',
    postedDate: 'Baru Ditambahkan',
    deadline: 'Terbuka',
    isFeatured: false,
    overview: 'Mencari talenta terbaik untuk posisi level spesialis dan manajerial pada unit-unit bisnis holding, mulai dari perhotelan, ritel ritel, hingga manufaktur.',
    responsibilities: [
      'Melakukan active sourcing kandidat melalui LinkedIn Recruiter, job portal, dan jaringan profesional.',
      'Melakukan screening resume, wawancara kompetensi awal, dan psikotes singkat.',
      'Berkoordinasi dengan hiring manager untuk memahami kualifikasi peran yang dibutuhkan.',
      'Menjaga kandidat pipeline agar waktu pengisian lowongan (time-to-fill) tetap efisien.'
    ],
    requirements: [
      'S1 Psikologi / Manajemen / Komunikasi.',
      'Pengalaman rekrutmen minimal 2 tahun dengan portofolio penempatan yang terbukti.',
      'Fasih menggunakan teknik Boolean search dan jejaring talenta digital.',
      'Keahlian komunikasi persuasif dan negosiasi penawaran kerja (job offer).'
    ],
    benefits: [
      'Skema kerja hybrid (fleksibilitas remote & on-site kantor)',
      'Bonus keberhasilan penempatan kandidat manajerial',
      'Asuransi kesehatan swasta dan BPJS',
      'Dukungan perangkat kerja laptop & tunjangan internet'
    ]
  },
  {
    id: 'job-05',
    title: 'General Talent Pool Registration (Kandidat Terbuka)',
    department: 'Jaringan Talenta Terbuka',
    category: 'General',
    companyType: 'SolusiKerjaKita Talent Network',
    location: 'Jakarta, Manado, Seluruh Indonesia',
    workType: 'Full-Time',
    experienceRequired: 'Semua tingkat pengalaman (Fresh Graduate s/d Manajerial)',
    salaryRange: 'Menyesuaikan kualifikasi & posisi',
    postedDate: 'Selalu Dibuka',
    deadline: 'Sepanjang Tahun',
    isFeatured: false,
    overview: 'Daftarkan profil dan curriculum vitae Anda ke dalam basis data rekrutmen eksklusif SolusiKerjaKita oleh Ischevell Saina. Profil Anda akan menjadi prioritas utama saat lowongan baru yang cocok dibuka.',
    responsibilities: [
      'Melampirkan tautan CV terbaru yang memuat riwayat pendidikan dan pengalaman kerja.',
      'Bersedia dihubungi oleh tim rekrutmen Ischevell Saina untuk wawancara awal saat lowongan sesuai tersedia.'
    ],
    requirements: [
      'Terbuka untuk lulusan SMK/SMA, D3, S1, maupun profesional berpengalaman.',
      'Memiliki motivasi kerja tinggi, etos kerja profesional, dan kejujuran.',
      'Memiliki kontak WhatsApp aktif dan email yang dapat dihubungi.'
    ],
    benefits: [
      'Tersimpan dalam prioritas talent pool Ischevell Saina',
      'Peluang langsung direkomendasikan ke pimpinan perusahaan rekanan',
      'Tidak dipungut biaya apapun (100% Gratis)'
    ]
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: 'Ibu Ischevell membuktikan kepemimpinan HR yang sangat tenang namun tegas dalam mengelola manpower 8 properti hotel kami. Standardisasi SOP dan efisiensi biaya rekrutmen yang beliau ciptakan menjadi pilar kestabilan operasional perusahaan.',
    author: 'Direktur Operasional',
    company: 'Jaringan Hotel Manajemen Nasional',
    location: 'Jakarta'
  },
  {
    quote: 'Pendekatan humanis dan penguasaan hukum ketenagakerjaan beliau membuat hubungan antara manajemen dan rekan-rekan serikat kerja selalu berada dalam dialog yang konstruktif dan solutif.',
    author: 'General Manager Properti',
    company: 'Hospitality Partner',
    location: 'Manado'
  }
];

export const HR_CONSULTING_SERVICES = [
  {
    title: 'Penyusunan Kebijakan & SOP Ketenagakerjaan',
    desc: 'Pembuatan Peraturan Perusahaan (PP), kode etik, dan SOP rekrutmen hingga terminasi kerja yang patuh pada regulasi terbaru UU Ketenagakerjaan.'
  },
  {
    title: 'Manpower Planning & HR Budgeting',
    desc: 'Perhitungan beban kerja objektif, estimasi kebutuhan personel, serta proyeksi anggaran penggajian tahunan untuk efisiensi bisnis.'
  },
  {
    title: 'Executive & Managerial Talent Hunting',
    desc: 'Pencarian tertutup talenta level pimpinan (General Manager, Head of Department) melalui jejaring industri tepercaya.'
  },
  {
    title: 'Audit Kepatuhan & Hubungan Industrial',
    desc: 'Evaluasi kepatuhan kontrak kerja (PKWT/PKWTT), sistem pengupahan, jaminan BPJS, dan pendampingan bipartit mediasi ketenagakerjaan.'
  }
];
