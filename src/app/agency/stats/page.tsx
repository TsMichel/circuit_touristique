'use client';

import { useState } from 'react';

export default function Stats() {
  const [language, setLanguage] = useState('fr');

  const translations = {
    fr: {
      statsTitle: 'Statistiques',
      totalReservations: 'Réservations totales',
      totalCircuits: 'Circuits disponibles',
      totalMessages: 'Messages reçus',
      chartsTitle: 'Diagrammes',
      lastUpdate: 'Dernière mise à jour',
      trendUp: '+5% ce mois-ci',
      trendDown: '-2% ce mois-ci',
      trendStable: 'Stable ce mois-ci',
      barChart: 'Réservations par statut (mensuel)',
      pieChart: 'Répartition des circuits',
    },
    en: {
      statsTitle: 'Statistics',
      totalReservations: 'Total Reservations',
      totalCircuits: 'Available Circuits',
      totalMessages: 'Received Messages',
      chartsTitle: 'Charts',
      lastUpdate: 'Last Updated',
      trendUp: '+5% this month',
      trendDown: '-2% this month',
      trendStable: 'Stable this month',
      barChart: 'Reservations by Status (Monthly)',
      pieChart: 'Circuit Distribution',
    },
  };

  const currentDate = new Date().toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  return (
    <div className="font-jakarta">
      <div className="deep-ui-card p-6 mb-6 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:backdrop-blur-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[var(--text)]">{translations[language].statsTitle}</h2>
          <p className="text-sm text-[var(--text-muted)]">{translations[language].lastUpdate}: {currentDate} EAT</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="deep-ui-card p-4 hover:scale-[1.02] transition-transform duration-200 flex flex-col border border-[var(--border)] dark:border-[var(--dark-border-hover)] hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                <i data-feather="calendar" className="h-5 w-5"></i>
              </div>
              <div>
                <h3 className="font-medium text-[var(--text)]">{translations[language].totalReservations}</h3>
                <p className="text-xs text-[var(--text-muted)]">{translations[language].trendUp}</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-[var(--text)]">150</p>
          </div>
          <div className="deep-ui-card p-4 hover:scale-[1.02] transition-transform duration-200 flex flex-col border border-[var(--border)] dark:border-[var(--dark-border-hover)] hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-3">
                <i data-feather="map" className="h-5 w-5"></i>
              </div>
              <div>
                <h3 className="font-medium text-[var(--text)]">{translations[language].totalCircuits}</h3>
                <p className="text-xs text-[var(--text-muted)]">{translations[language].trendStable}</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-[var(--text)]">25</p>
          </div>
          <div className="deep-ui-card p-4 hover:scale-[1.02] transition-transform duration-200 flex flex-col border border-[var(--border)] dark:border-[var(--dark-border-hover)] hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mr-3">
                <i data-feather="message-square" className="h-5 w-5"></i>
              </div>
              <div>
                <h3 className="font-medium text-[var(--text)]">{translations[language].totalMessages}</h3>
                <p className="text-xs text-[var(--text-muted)]">{translations[language].trendDown}</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-[var(--text)]">80</p>
          </div>
        </div>
      </div>

      <div className="deep-ui-card p-6 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4 text-[var(--text)]">{translations[language].chartsTitle}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="deep-ui-card p-4 border border-[var(--border)] dark:border-[var(--dark-border-hover)]">
            <h3 className="text-lg font-semibold mb-2 text-[var(--text)]">{translations[language].barChart}</h3>
            <div className="h-64 flex items-center justify-center bg-[var(--accent)] dark:bg-[var(--dark-accent)] rounded-xl">
              <p className="text-[var(--text-muted)]">[Graphique en barres placeholder]</p>
            </div>
          </div>
          <div className="deep-ui-card p-4 border border-[var(--border)] dark:border-[var(--dark-border-hover)]">
            <h3 className="text-lg font-semibold mb-2 text-[var(--text)]">{translations[language].pieChart}</h3>
            <div className="h-64 flex items-center justify-center bg-[var(--accent)] dark:bg-[var(--dark-accent)] rounded-xl">
              <p className="text-[var(--text-muted)]">[Graphique circulaire placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}