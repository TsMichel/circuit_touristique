'use client';

import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [language, setLanguage] = useState('fr');
  const [stats, setStats] = useState({
    totalReservations: 0,
    totalCircuits: 0,
    totalMessages: 0,
  });
  const [error, setError] = useState<string | null>(null);

  const translations = {
    fr: {
      dashboardTitle: 'Tableau de bord',
      dashboardText: 'Vue d’ensemble de votre agence touristique.',
      totalReservations: 'Réservations totales',
      totalCircuits: 'Circuits disponibles',
      totalMessages: 'Messages reçus',
      error: 'Une erreur est survenue',
      profile: 'Profil',
      settings: 'Paramètres',
    },
    en: {
      dashboardTitle: 'Dashboard',
      dashboardText: 'Overview of your tourist agency.',
      totalReservations: 'Total Reservations',
      totalCircuits: 'Available Circuits',
      totalMessages: 'Received Messages',
      error: 'An error occurred',
      profile: 'Profile',
      settings: 'Settings',
    },
  };

  // Récupérer les statistiques depuis FastAPI
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const reservationsResponse = await fetch('http://localhost:8000/reservations');
        const circuitsResponse = await fetch('http://localhost:8000/circuits');
        const messagesResponse = await fetch('http://localhost:8000/messages');
        if (!reservationsResponse.ok || !circuitsResponse.ok || !messagesResponse.ok) {
          throw new Error('Échec de la récupération des statistiques');
        }
        const reservations = await reservationsResponse.json();
        const circuits = await circuitsResponse.json();
        const messages = await messagesResponse.json();
        setStats({
          totalReservations: reservations.length,
          totalCircuits: circuits.length,
          totalMessages: messages.length,
        });
      } catch (err) {
        setError(translations[language].error);
        console.error('Erreur lors de la récupération des statistiques :', err);
        setStats({
          totalReservations: 2,
          totalCircuits: 2,
          totalMessages: 2,
        });
      }
    };
    fetchStats();
  }, [language]);

  return (
    <div className="font-jakarta">
      {error && <p className="text-red-400 text-center mb-4">{translations[language].error}</p>}
      <div className="deep-ui-card p-6 mb-6 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4 text-[var(--text)]">{translations[language].dashboardTitle}</h2>
        <p className="text-[var(--text-muted)] mb-6">{translations[language].dashboardText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="deep-ui-card p-4 hover:scale-[1.02] transition-transform duration-200 flex flex-col border border-[var(--border)] dark:border-[var(--dark-border-hover)] hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                <i data-feather="calendar" className="h-5 w-5"></i>
              </div>
              <h3 className="font-medium text-[var(--text)]">{translations[language].totalReservations}</h3>
            </div>
            <p className="text-3xl font-bold text-[var(--text)]">{stats.totalReservations}</p>
          </div>
          <div className="deep-ui-card p-4 hover:scale-[1.02] transition-transform duration-200 flex flex-col border border-[var(--border)] dark:border-[var(--dark-border-hover)] hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-3">
                <i data-feather="map" className="h-5 w-5"></i>
              </div>
              <h3 className="font-medium text-[var(--text)]">{translations[language].totalCircuits}</h3>
            </div>
            <p className="text-3xl font-bold text-[var(--text)]">{stats.totalCircuits}</p>
          </div>
          <div className="deep-ui-card p-4 hover:scale-[1.02] transition-transform duration-200 flex flex-col border border-[var(--border)] dark:border-[var(--dark-border-hover)] hover:shadow-lg">
            <div className="flex items-center mb-2">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mr-3">
                <i data-feather="message-square" className="h-5 w-5"></i>
              </div>
              <h3 className="font-medium text-[var(--text)]">{translations[language].totalMessages}</h3>
            </div>
            <p className="text-3xl font-bold text-[var(--text)]">{stats.totalMessages}</p>
          </div>
        </div>
      </div>

      {/* Profil de l'agence */}
      <div className="deep-ui-card p-6 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:backdrop-blur-sm">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-3 text-[var(--text)]">Agence Touristique</h1>
          <p className="text-[var(--text-muted)] mb-6">{translations[language].profile}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a href="mailto:agence@circuit-touristique.com" className="deep-ui-button p-2 rounded-lg flex items-center hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)]">
              <i data-feather="mail" className="h-4 w-4 mr-2"></i>
              <span>{translations[language].profile}</span>
            </a>
            <a href="/agency/settings" className="deep-ui-button p-2 rounded-lg flex items-center hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)]">
              <i data-feather="settings" className="h-4 w-4 mr-2"></i>
              <span>{translations[language].settings}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}