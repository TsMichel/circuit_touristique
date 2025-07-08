'use client';

import { useState } from 'react';

export default function Export() {
  const [language, setLanguage] = useState('fr');

  const translations = {
    fr: {
      exportTitle: 'Exporter les données',
      exportCsv: 'Exporter en CSV',
      exportPdf: 'Exporter en PDF',
      selectData: 'Sélectionner les données à exporter',
      reservations: 'Réservations',
      circuits: 'Circuits',
      messages: 'Messages',
    },
    en: {
      exportTitle: 'Export Data',
      exportCsv: 'Export to CSV',
      exportPdf: 'Export to PDF',
      selectData: 'Select Data to Export',
      reservations: 'Reservations',
      circuits: 'Circuits',
      messages: 'Messages',
    },
  };

  return (
    <div className="font-jakarta">
      <div className="deep-ui-card p-6 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4 text-[var(--text)]">{translations[language].exportTitle}</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">{translations[language].selectData}</label>
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="reservations" className="mr-2" />
                <label htmlFor="reservations" className="text-[var(--text)]">{translations[language].reservations}</label>
              </div>
              <div>
                <input type="checkbox" id="circuits" className="mr-2" />
                <label htmlFor="circuits" className="text-[var(--text)]">{translations[language].circuits}</label>
              </div>
              <div>
                <input type="checkbox" id="messages" className="mr-2" />
                <label htmlFor="messages" className="text-[var(--text)]">{translations[language].messages}</label>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="deep-ui-button px-6 py-3 rounded-xl hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)]">
              {translations[language].exportCsv}
            </button>
            <button className="deep-ui-button px-6 py-3 rounded-xl hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)]">
              {translations[language].exportPdf}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}