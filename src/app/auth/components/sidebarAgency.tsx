// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// interface SidebarAgencyProps {
//   isSidebarOpen: boolean;
//   toggleSidebar: () => void;
//   toggleTheme: () => void;
//   language: string;
// }

// export default function SidebarAgency({ isSidebarOpen, toggleSidebar, toggleTheme, language }: SidebarAgencyProps) {
//   const pathname = usePathname();

//   const translations = {
//     fr: {
//       home: 'Accueil',
//       circuits: 'Circuits',
//       reservations: 'Réservations',
//       stats: 'Statistiques',
//       messages: 'Messages',
//       export: 'Exporter',
//       invoice: 'Facture',
//       mainMenu: 'Menu Principal',
//       communication: 'Communication',
//       system: 'Système',
//       search: 'Rechercher...',
//       logout: 'Déconnexion',
//       settings: 'Paramètres',
//       agency: 'MonAgence',
//     },
//     en: {
//       home: 'Home',
//       circuits: 'Circuits',
//       reservations: 'Reservations',
//       stats: 'Statistics',
//       messages: 'Messages',
//       export: 'Export',
//       invoice: 'Invoice',
//       mainMenu: 'Main Menu',
//       communication: 'Communication',
//       system: 'System',
//       search: 'Search...',
//       logout: 'Logout',
//       settings: 'Settings',
//       agency: 'MyAgency',
//     },
//   };

//   const menuItems = [
//     { href: '/agency/dashboard', label: translations[language].home, icon: 'home', badge: translations[language].home, badgeType: 'badge-primary' },
//     { href: '/agency/circuits', label: translations[language].circuits, icon: 'map' },
//     { href: '/agency/reservations', label: translations[language].reservations, icon: 'calendar', badge: '3', badgeType: 'badge-gray' },
//     { href: '/agency/stats', label: translations[language].stats, icon: 'bar-chart-2' },
//   ];

//   const communicationItems = [
//     { href: '/agency/messages', label: translations[language].messages, icon: 'message-square', badge: '5', badgeType: 'badge-red' },
//   ];

//   const systemItems = [
//     { href: '/agency/export', label: translations[language].export, icon: 'download' },
//     { href: '/agency/invoice', label: translations[language].invoice, icon: 'file-text' },
//     { href: '/agency/settings', label: translations[language].settings, icon: 'settings' },
//   ];

//   return (
//     <div
//       className={`deep-ui-sidebar transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:sticky top-0 left-0 max-h-screen overflow-hidden z-30 w-72 flex flex-col transition-transform duration-300 ease-in-out`}
//     >
//       {/* Logo et bascule de thème (Desktop) */}
//       <div className="px-6 py-4 hidden md:block">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-deep-blue dark:bg-deep-blue rounded-xl flex items-center justify-center dark:shadow-lg dark:shadow-deep-blue/20">
//               <span className="text-white font-bold text-xl">A</span>
//             </div>
//             <h1 className="text-xl font-semibold">{translations[language].agency}</h1>
//           </div>
//           <button onClick={toggleTheme} className="theme-switch" aria-label="Changer de thème"></button>
//         </div>
//       </div>

//       {/* En-tête mobile et bouton de fermeture */}
//       <div className="px-4 py-3 border-b border-[var(--border)] flex items-center justify-between md:hidden">
//         <div className="flex items-center space-x-3">
//           <div className="w-8 h-8 bg-deep-blue dark:bg-deep-blue rounded-lg flex items-center justify-center dark:shadow-lg dark:shadow-deep-blue/20">
//             <span className="text-white font-bold text-lg">A</span>
//           </div>
//           <h1 className="text-lg font-semibold">{translations[language].agency}</h1>
//         </div>
//         <button onClick={toggleSidebar} className="deep-ui-button p-2 rounded-lg">
//           <i data-feather="x" className="h-5 w-5"></i>
//         </button>
//       </div>

//       {/* Barre de recherche */}
//       <div className="px-6 py-3">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder={translations[language].search}
//             className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--accent)] border-0 text-[var(--text)] text-sm focus:ring-2 focus:ring-deep-blue focus:outline-none placeholder-[var(--text-muted)] dark:bg-slate-800/50 dark:border dark:border-slate-700/50 dark:backdrop-blur-sm"
//           />
//           <div className="absolute left-3.5 top-2.5 text-[var(--text-muted)]">
//             <i data-feather="search" className="h-5 w-5"></i>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="px-4 py-2 flex-1 overflow-y-auto">
//         {/* Menu Principal */}
//         <div className="mb-6">
//           <span className="px-3 text-xs font-medium deep-ui-heading uppercase tracking-wider">
//             {translations[language].mainMenu}
//           </span>
//           <div className="mt-3 space-y-1">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-xl border border-transparent ${
//                   pathname === item.href ? 'deep-ui-active dark:border-deep-blue/20' : 'hover:bg-[var(--accent)] group transition-colors menu-item-hover'
//                 }`}
//               >
//                 <div
//                   className={`p-1.5 rounded-lg deep-ui-icon-bg mr-3 ${
//                     pathname === item.href
//                       ? 'dark:bg-deep-blue/20 dark:text-[#a5a6ff]'
//                       : 'group-hover:bg-[var(--primary-bg)] group-hover:text-[var(--primary)] transition-colors'
//                   }`}
//                 >
//                   <i data-feather={item.icon} className="h-5 w-5"></i>
//                 </div>
//                 {item.label}
//                 {item.badge && <span className={`ml-auto badge ${item.badgeType}`}>{item.badge}</span>}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Communication */}
//         <div className="mb-6">
//           <span className="px-3 text-xs font-medium deep-ui-heading uppercase tracking-wider">
//             {translations[language].communication}
//           </span>
//           <div className="mt-3 space-y-1">
//             {communicationItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-xl border border-transparent ${
//                   pathname === item.href ? 'deep-ui-active dark:border-deep-blue/20' : 'hover:bg-[var(--accent)] group transition-colors menu-item-hover'
//                 }`}
//               >
//                 <div
//                   className={`p-1.5 rounded-lg deep-ui-icon-bg mr-3 ${
//                     pathname === item.href
//                       ? 'dark:bg-deep-blue/20 dark:text-[#a5a6ff]'
//                       : 'group-hover:bg-[var(--primary-bg)] group-hover:text-[var(--primary)] transition-colors'
//                   }`}
//                 >
//                   <i data-feather={item.icon} className="h-5 w-5"></i>
//                 </div>
//                 {item.label}
//                 {item.badge && <span className={`ml-auto badge ${item.badgeType}`}>{item.badge}</span>}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Système */}
//         <div>
//           <span className="px-3 text-xs font-medium deep-ui-heading uppercase tracking-wider">
//             {translations[language].system}
//           </span>
//           <div className="mt-3 space-y-1">
//             {systemItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-xl border border-transparent ${
//                   pathname === item.href ? 'deep-ui-active dark:border-deep-blue/20' : 'hover:bg-[var(--accent)] group transition-colors menu-item-hover'
//                 }`}
//               >
//                 <div
//                   className={`p-1.5 rounded-lg deep-ui-icon-bg mr-3 ${
//                     pathname === item.href
//                       ? 'dark:bg-deep-blue/20 dark:text-[#a5a6ff]'
//                       : 'group-hover:bg-[var(--primary-bg)] group-hover:text-[var(--primary)] transition-colors'
//                   }`}
//                 >
//                   <i data-feather={item.icon} className="h-5 w-5"></i>
//                 </div>
//                 {item.label}
//                 {item.badge && <span className={`ml-auto badge ${item.badgeType}`}>{item.badge}</span>}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Profil utilisateur */}
//       <div className="mt-auto border-t border-[var(--border)]">
//         <div className="p-3">
//           <div className="deep-ui-card p-3 rounded-xl flex items-center dark:backdrop-blur-sm">
//             <div className="relative flex-shrink-0 avatar-ring">
//               <div className="w-10 h-10 bg-[var(--light-primary-bg)] dark:bg-deep-blue/20 rounded-full flex items-center justify-center">
//                 <span className="text-deep-blue dark:text-[#a5a6ff] font-medium">AD</span>
//               </div>
//               <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[var(--card)]"></div>
//             </div>
//             <div className="ml-3 min-w-0 flex-1">
//               <p className="text-sm font-medium truncate">Agence Utilisateur</p>
//               <p className="text-xs text-[var(--text-muted)] truncate">agence@circuit-touristique.com</p>
//             </div>
//             <button className="ml-auto deep-ui-button p-1.5 rounded-lg">
//               <i data-feather="log-out" className="h-5 w-5"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarAgencyProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  toggleTheme: () => void;
  language: string;
}

export default function SidebarAgency({ isSidebarOpen, toggleSidebar, toggleTheme, language }: SidebarAgencyProps) {
  const pathname = usePathname();

  const translations = {
    fr: {
      home: 'Accueil',
      circuits: 'Circuits',
      reservations: 'Réservations',
      stats: 'Statistiques',
      messages: 'Messages',
      export: 'Exporter',
      invoice: 'Facture',
      mainMenu: 'Menu Principal',
      communication: 'Communication',
      system: 'Système',
      search: 'Rechercher...',
      logout: 'Déconnexion',
      settings: 'Paramètres',
      agency: 'MonAgence',
    },
    en: {
      home: 'Home',
      circuits: 'Circuits',
      reservations: 'Reservations',
      stats: 'Statistics',
      messages: 'Messages',
      export: 'Export',
      invoice: 'Invoice',
      mainMenu: 'Main Menu',
      communication: 'Communication',
      system: 'System',
      search: 'Search...',
      logout: 'Logout',
      settings: 'Settings',
      agency: 'MyAgency',
    },
  };

  const menuItems = [
    { href: '/agency/dashboard', label: translations[language].home, icon: 'home', badge: translations[language].home, badgeType: 'badge-primary' },
    { href: '/agency/circuits', label: translations[language].circuits, icon: 'map' },
    { href: '/agency/reservations', label: translations[language].reservations, icon: 'calendar', badge: '3', badgeType: 'badge-gray' },
    { href: '/agency/stats', label: translations[language].stats, icon: 'bar-chart-2' },
  ];

  const communicationItems = [
    { href: '/agency/messages', label: translations[language].messages, icon: 'message-square', badge: '5', badgeType: 'badge-red' },
  ];

  const systemItems = [
    { href: '/agency/export', label: translations[language].export, icon: 'download' },
    { href: '/agency/invoice', label: translations[language].invoice, icon: 'file-text' },
    { href: '/agency/settings', label: translations[language].settings, icon: 'settings' },
  ];

  return (
    <div
      className={`deep-ui-sidebar transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:sticky top-0 left-0 max-h-screen overflow-hidden z-30 w-72 flex flex-col transition-transform duration-300 ease-in-out`}
    >
      {/* Logo et bascule de thème (Desktop) */}
      <div className="px-6 py-4 hidden md:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-deep-blue dark:bg-deep-blue rounded-xl flex items-center justify-center dark:shadow-lg dark:shadow-deep-blue/20">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h1 className="text-xl font-semibold">{translations[language].agency}</h1>
          </div>
          <button onClick={toggleTheme} className="theme-switch" aria-label="Changer de thème"></button>
        </div>
      </div>

      {/* En-tête mobile et bouton de fermeture */}
      <div className="px-4 py-3 border-b border-[var(--border)] flex items-center justify-between md:hidden">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-deep-blue dark:bg-deep-blue rounded-lg flex items-center justify-center dark:shadow-lg dark:shadow-deep-blue/20">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-lg font-semibold">{translations[language].agency}</h1>
        </div>
        <button onClick={toggleSidebar} className="deep-ui-button p-2 rounded-lg">
          <i data-feather="x" className="h-5 w-5"></i>
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="px-6 py-3">
        <div className="relative">
          <input
            type="text"
            placeholder={translations[language].search}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--accent)] border-0 text-[var(--text)] text-sm focus:ring-2 focus:ring-deep-blue focus:outline-none placeholder-[var(--text-muted)] dark:bg-slate-800/50 dark:border dark:border-slate-700/50 dark:backdrop-blur-sm"
          />
          <div className="absolute left-3.5 top-2.5 text-[var(--text-muted)]">
            <i data-feather="search" className="h-5 w-5"></i>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 py-2 flex-1 overflow-y-auto">
        {/* Menu Principal */}
        <div className="mb-6">
          <span className="px-3 text-xs font-medium deep-ui-heading uppercase tracking-wider">
            {translations[language].mainMenu}
          </span>
          <div className="mt-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-xl border border-transparent ${
                  pathname === item.href ? 'deep-ui-active dark:border-deep-blue/20' : 'hover:bg-[var(--accent)] group transition-colors menu-item-hover'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg deep-ui-icon-bg mr-3 ${
                    pathname === item.href
                      ? 'dark:bg-deep-blue/20 dark:text-[#a5a6ff]'
                      : 'group-hover:bg-[var(--primary-bg)] group-hover:text-[var(--primary)] transition-colors'
                  }`}
                >
                  <i data-feather={item.icon} className="h-5 w-5"></i>
                </div>
                {item.label}
                {item.badge && <span className={`ml-auto badge ${item.badgeType}`}>{item.badge}</span>}
              </Link>
            ))}
          </div>
        </div>

        {/* Communication */}
        <div className="mb-6">
          <span className="px-3 text-xs font-medium deep-ui-heading uppercase tracking-wider">
            {translations[language].communication}
          </span>
          <div className="mt-3 space-y-1">
            {communicationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-xl border border-transparent ${
                  pathname === item.href ? 'deep-ui-active dark:border-deep-blue/20' : 'hover:bg-[var(--accent)] group transition-colors menu-item-hover'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg deep-ui-icon-bg mr-3 ${
                    pathname === item.href
                      ? 'dark:bg-deep-blue/20 dark:text-[#a5a6ff]'
                      : 'group-hover:bg-[var(--primary-bg)] group-hover:text-[var(--primary)] transition-colors'
                  }`}
                >
                  <i data-feather={item.icon} className="h-5 w-5"></i>
                </div>
                {item.label}
                {item.badge && <span className={`ml-auto badge ${item.badgeType}`}>{item.badge}</span>}
              </Link>
            ))}
          </div>
        </div>

        {/* Système */}
        <div>
          <span className="px-3 text-xs font-medium deep-ui-heading uppercase tracking-wider">
            {translations[language].system}
          </span>
          <div className="mt-3 space-y-1">
            {systemItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-xl border border-transparent ${
                  pathname === item.href ? 'deep-ui-active dark:border-deep-blue/20' : 'hover:bg-[var(--accent)] group transition-colors menu-item-hover'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg deep-ui-icon-bg mr-3 ${
                    pathname === item.href
                      ? 'dark:bg-deep-blue/20 dark:text-[#a5a6ff]'
                      : 'group-hover:bg-[var(--primary-bg)] group-hover:text-[var(--primary)] transition-colors'
                  }`}
                >
                  <i data-feather={item.icon} className="h-5 w-5"></i>
                </div>
                {item.label}
                {item.badge && <span className={`ml-auto badge ${item.badgeType}`}>{item.badge}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Profil utilisateur */}
      <div className="mt-auto border-t border-[var(--border)]">
        <div className="p-3">
          <div className="deep-ui-card p-3 rounded-xl flex items-center dark:backdrop-blur-sm">
            <div className="relative flex-shrink-0 avatar-ring">
              <div className="w-10 h-10 bg-[var(--light-primary-bg)] dark:bg-deep-blue/20 rounded-full flex items-center justify-center">
                <span className="text-deep-blue dark:text-[#a5a6ff] font-medium">AD</span>
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[var(--card)]"></div>
            </div>
            <div className="ml-3 min-w-0 flex-1">
              <p className="text-sm font-medium truncate">Agence Utilisateur</p>
              <p className="text-xs text-[var(--text-muted)] truncate">agence@circuit-touristique.com</p>
            </div>
            <button className="ml-auto deep-ui-button p-1.5 rounded-lg">
              <i data-feather="log-out" className="h-5 w-5"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




