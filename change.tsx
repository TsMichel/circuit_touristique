'use client';

import { useState, useEffect } from 'react';

interface Reservation {
  id: number;
  client: string;
  circuit: string;
  date: string;
  status: string;
}

export default function Reservations() {
  const [language, setLanguage] = useState('fr');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState<string | null>(null);

  const translations = {
    fr: {
      reservationsTitle: 'Réservations',
      reservationsText: 'Gérez vos réservations ici.',
      id: 'ID',
      client: 'Client',
      circuit: 'Circuit',
      date: 'Date',
      status: 'Statut',
      error: 'Une erreur est survenue lors de la récupération des réservations',
      noReservations: 'Aucune réservation trouvée',
    },
    en: {
      reservationsTitle: 'Reservations',
      reservationsText: 'Manage your reservations here.',
      id: 'ID',
      client: 'Client',
      circuit: 'Circuit',
      date: 'Date',
      status: 'Status',
      error: 'An error occurred while fetching reservations',
      noReservations: 'No reservations found',
    },
  };

  // Récupérer les réservations depuis FastAPI
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:8000/reservations');
        if (!response.ok) {
          throw new Error('Échec de la récupération des réservations');
        }
        const data = await response.json();
        setReservations(data);
      } catch (err) {
        setError(translations[language].error);
        console.error('Erreur lors de la récupération des réservations :', err);
        // Données fictives en cas d'erreur
        setReservations([
          { id: 1, client: 'Jean Dupont', circuit: 'Tour Eiffel', date: '2025-07-10', status: 'Confirmée' },
          { id: 2, client: 'Marie Curie', circuit: 'Louvre', date: '2025-07-12', status: 'En attente' },
        ]);
      }
    };
    fetchReservations();
  }, [language]);

  return (
    <div className="font-jakarta">
      {error && <p className="text-red-400 text-center mb-4">{translations[language].error}</p>}
      <div className="deep-ui-card p-6 mb-6 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4 text-[var(--text)]">{translations[language].reservationsTitle}</h2>
        <p className="text-[var(--text-muted)] mb-6">{translations[language].reservationsText}</p>

        {reservations.length === 0 ? (
          <p className="text-[var(--text-muted)] text-center">{translations[language].noReservations}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-[var(--text)]">
              <thead>
                <tr className="border-b border-[var(--border)] dark:border-[var(--dark-border)]">
                  <th className="py-3 px-4 font-medium">{translations[language].id}</th>
                  <th className="py-3 px-4 font-medium">{translations[language].client}</th>
                  <th className="py-3 px-4 font-medium">{translations[language].circuit}</th>
                  <th className="py-3 px-4 font-medium">{translations[language].date}</th>
                  <th className="py-3 px-4 font-medium">{translations[language].status}</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr
                    key={reservation.id}
                    className="border-b border-[var(--border)] dark:border-[var(--dark-border)] hover:bg-[var(--accent)] dark:hover:bg-[var(--dark-accent)] transition-colors"
                  >
                    <td className="py-3 px-4">{reservation.id}</td>
                    <td className="py-3 px-4">{reservation.client}</td>
                    <td className="py-3 px-4">{reservation.circuit}</td>
                    <td className="py-3 px-4">{reservation.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`badge ${
                          reservation.status === 'Confirmée' || reservation.status === 'Confirmed'
                            ? 'badge-primary'
                            : 'badge-gray'
                        }`}
                      >
                        {reservation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}