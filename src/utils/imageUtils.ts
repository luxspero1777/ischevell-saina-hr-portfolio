/**
 * Utility for robust image resolution & fallback handling across all deployment environments:
 * - Local Vite Dev Server
 * - GitHub Pages (subpaths like https://user.github.io/repo-name/)
 * - Custom Domains / Vercel / Netlify
 * - Standalone HTML exports
 */

export const getFallbackSvg = (title: string, subtitle: string, iconType: 'user' | 'hotel' | 'training' | 'store' | 'award' | 'factory' | 'cafe' | 'chart' | 'document' = 'user'): string => {
  const iconPaths: Record<string, string> = {
    user: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle>',
    hotel: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v8h4"></path><path d="M18 9h2a2 2 0 0 1 2 2v11h-4"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path>',
    training: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path>',
    award: '<circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>',
    factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path>',
    cafe: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line>',
    chart: '<path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path>',
    document: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>'
  };

  const selectedPath = iconPaths[iconType] || iconPaths.user;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b1329"/>
        <stop offset="50%" stop-color="#070c18"/>
        <stop offset="100%" stop-color="#142042"/>
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fde047"/>
        <stop offset="100%" stop-color="#f59e0b"/>
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#bg)"/>
    <rect x="20" y="20" width="760" height="460" rx="16" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="8 8"/>
    <circle cx="400" cy="180" r="54" fill="#070c18" stroke="#f59e0b" stroke-width="2"/>
    <g transform="translate(376, 156) scale(2)" stroke="#facc15" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
      ${selectedPath}
    </g>
    <text x="400" y="280" font-family="Plus Jakarta Sans, sans-serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">
      ${escapeXml(title)}
    </text>
    <text x="400" y="315" font-family="Plus Jakarta Sans, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">
      ${escapeXml(subtitle)}
    </text>
    <rect x="300" y="355" width="200" height="36" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <text x="400" y="378" font-family="Plus Jakarta Sans, sans-serif" font-size="12" font-weight="600" fill="#facc15" text-anchor="middle">
      ISCHEVELL SAINA | HR
    </text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Maps image filename to appropriate metadata and icon for fallback generation
 */
export const getImageMeta = (filename: string): { title: string; subtitle: string; icon: 'user' | 'hotel' | 'training' | 'store' | 'award' | 'factory' | 'cafe' | 'chart' | 'document' } => {
  if (filename.includes('ischevell') || filename.includes('profile')) {
    return {
      title: 'Ischevell Vialara Saina',
      subtitle: 'Head of Human Resources & Talent Acquisition Lead',
      icon: 'user'
    };
  }
  if (filename.includes('hotel_meeting')) {
    return {
      title: 'Rapat Koordinasi 8 Properti Hotel',
      subtitle: 'Manpower Planning & Standardisasi SOP Korporat',
      icon: 'hotel'
    };
  }
  if (filename.includes('training_session')) {
    return {
      title: 'Training & Employee Engagement',
      subtitle: 'Pelatihan Budaya Pelayanan & Kepemimpinan Tim',
      icon: 'training'
    };
  }
  if (filename.includes('retail_store')) {
    return {
      title: 'New Store Opening Ritel Modern',
      subtitle: 'Mass Recruitment & Kesiapan Layanan Toko',
      icon: 'store'
    };
  }
  if (filename.includes('award') || filename.includes('quality') || filename.includes('regenerated')) {
    return {
      title: 'Pencapaian Audit Mutu Best Western QA',
      subtitle: 'Standar Kepatuhan Karyawan & Fasilitas Internasional',
      icon: 'award'
    };
  }
  if (filename.includes('kelapa_jaya')) {
    return {
      title: 'PT. Kelapa Jaya Lestari Manufaktur',
      subtitle: 'Arsitektur Organisasi & Legalitas Ketenagakerjaan',
      icon: 'factory'
    };
  }
  if (filename.includes('coffee_shop')) {
    return {
      title: 'Rumah Kopi Aerie Manado',
      subtitle: 'Operasional Harian & Kepemimpinan Tim Hospitality',
      icon: 'cafe'
    };
  }
  if (filename.includes('data_analyst')) {
    return {
      title: 'Freelancer Data Analyst Alfamart',
      subtitle: 'Pemodelan Analitik Penjualan Ritel & Rekapitulasi Data',
      icon: 'chart'
    };
  }
  if (filename.includes('fb_secretary')) {
    return {
      title: 'Food & Beverage Secretary Lion Hotel',
      subtitle: 'Kesekretariatan Eksekutif, BEO & Layanan Perhotelan',
      icon: 'document'
    };
  }

  return {
    title: 'Dokumentasi Profesional HR',
    subtitle: 'Rekam Jejak & Pengalaman Karier Ischevell Saina',
    icon: 'user'
  };
};

/**
 * Resolves candidate URLs in order of preference:
 * 1. Primary bundled Vite asset URL
 * 2. Relative ./images/<filename> (works directly on GitHub Pages subpaths)
 * 3. Base-prefixed ${BASE_URL}images/<filename>
 * 4. ./assets/<filename>
 */
export const getCandidateUrls = (primaryUrl: string, filename: string): string[] => {
  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  const candidates: string[] = [];
  if (primaryUrl) candidates.push(primaryUrl);
  candidates.push(`./images/${filename}`);
  candidates.push(`${cleanBase}images/${filename}`);
  candidates.push(`./assets/${filename}`);
  candidates.push(`/images/${filename}`);

  // Deduplicate candidates
  return Array.from(new Set(candidates));
};
