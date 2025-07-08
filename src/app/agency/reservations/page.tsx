'use client';

import { useState, useEffect } from 'react';

interface Reservation {
  id: number;
  circuit_id: number;
  tourist_id: number;
  reservation_date: string;
  number_of_people: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
}

export default function Reservations() {
  const [language, setLanguage] = useState('fr');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [newReservation, setNewReservation] = useState({
    circuit_id: '',
    tourist_id: '',
    reservation_date: '',
    number_of_people: '',
  });
  const [filterStatus, setFilterStatus] = useState('');
  const [editingReservation, setEditingReservation] = useState<Reservation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const translations = {
    fr: {
      reservationsTitle: 'Gestion des réservations',
      reservationsText: 'Gérez les réservations des circuits touristiques, acceptez, annulez ou modifiez les statuts.',
      circuitId: 'ID du circuit',
      touristId: 'ID du touriste',
      reservationDate: 'Date de réservation',
      numberOfPeople: 'Nombre de personnes',
      status: 'Statut',
      createdAt: 'Créé le',
      actions: 'Actions',
      addReservation: 'Ajouter une réservation',
      save: 'Enregistrer',
      cancel: 'Annuler',
      edit: 'Modifier',
      delete: 'Supprimer',
      filterByStatus: 'Filtrer par statut',
      all: 'Tous',
      pending: 'En attente',
      confirmed: 'Confirmé',
      cancelled: 'Annulé',
      submit: 'Soumettre',
      error: 'Une erreur est survenue',
      allFieldsRequired: 'Tous les champs sont requis',
    },
    en: {
      reservationsTitle: 'Reservation Management',
      reservationsText: 'Manage tourist circuit reservations, accept, cancel, or update statuses.',
      circuitId: 'Circuit ID',
      touristId: 'Tourist ID',
      reservationDate: 'Reservation Date',
      numberOfPeople: 'Number of People',
      status: 'Status',
      createdAt: 'Created At',
      actions: 'Actions',
      addReservation: 'Add Reservation',
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      filterByStatus: 'Filter by Status',
      all: 'All',
      pending: 'Pending',
      confirmed: 'Confirmed',
      cancelled: 'Cancelled',
      submit: 'Submit',
      error: 'An error occurred',
      allFieldsRequired: 'All fields are required',
    },
  };

  // Récupérer les réservations depuis FastAPI
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:8000/reservations');
        if (!response.ok) throw new Error('Échec de la récupération des réservations');
        const data = await response.json();
        setReservations(data);
      } catch (err) {
        setError(translations[language].error);
        console.error('Erreur lors de la récupération des réservations :', err);
        setReservations([
          { id: 1, circuit_id: 1, tourist_id: 1, reservation_date: '2025-07-15', number_of_people: 2, status: 'pending', created_at: '2025-07-01T10:00:00Z' },
          { id: 2, circuit_id: 2, tourist_id: 2, reservation_date: '2025-07-20', number_of_people: 3, status: 'confirmed', created_at: '2025-07-02T12:00:00Z' },
        ]);
      }
    };
    fetchReservations();
  }, [language]);

  const handleCreateReservation = async () => {
    if (!newReservation.circuit_id || !newReservation.tourist_id || !newReservation.reservation_date || !newReservation.number_of_people) {
      alert(translations[language].allFieldsRequired);
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          circuit_id: parseInt(newReservation.circuit_id),
          tourist_id: parseInt(newReservation.tourist_id),
          reservation_date: newReservation.reservation_date,
          number_of_people: parseInt(newReservation.number_of_people),
          status: 'pending',
        }),
      });
      if (!response.ok) throw new Error('Échec de la création de la réservation');
      const newRes = await response.json();
      setReservations([...reservations, newRes]);
      setNewReservation({ circuit_id: '', tourist_id: '', reservation_date: '', number_of_people: '' });
    } catch (err) {
      setError(translations[language].error);
      console.error('Erreur lors de la création de la réservation :', err);
    }
  };

  const handleUpdateReservation = async (reservation: Reservation) => {
    try {
      const response = await fetch(`http://localhost:8000/reservations/${reservation.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservation),
      });
      if (!response.ok) throw new Error('Échec de la mise à jour de la réservation');
      setReservations(reservations.map((res) => (res.id === reservation.id ? reservation : res)));
      setEditingReservation(null);
    } catch (err) {
      setError(translations[language].error);
      console.error('Erreur lors de la mise à jour de la réservation :', err);
    }
  };

  const handleDeleteReservation = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/reservations/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Échec de la suppression de la réservation');
      setReservations(reservations.filter((res) => res.id !== id));
    } catch (err) {
      setError(translations[language].error);
      console.error('Erreur lors de la suppression de la réservation :', err);
    }
  };

  const filteredReservations = filterStatus
    ? reservations.filter((res) => res.status === filterStatus)
    : reservations;

  return (
    <div className="font-jakarta">
      {error && <p className="text-red-400 text-center mb-4">{translations[language].error}</p>}
      <div className="deep-ui-card p-6 mb-6 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4 text-[var(--text)]">{translations[language].reservationsTitle}</h2>
        <p className="text-[var(--text-muted)] mb-6">{translations[language].reservationsText}</p>

        {/* Formulaire d'ajout de réservation */}
        <div className="max-w-md mx-auto mb-12">
          <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">{translations[language].addReservation}</h3>
          <div className="space-y-4">
            <input
              type="number"
              placeholder={translations[language].circuitId}
              value={newReservation.circuit_id}
              onChange={(e) => setNewReservation({ ...newReservation, circuit_id: e.target.value })}
              className="w-full bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none placeholder-[var(--text-muted)] dark:bg-[var(--dark-accent)]"
            />
            <input
              type="number"
              placeholder={translations[language].touristId}
              value={newReservation.tourist_id}
              onChange={(e) => setNewReservation({ ...newReservation, tourist_id: e.target.value })}
              className="w-full bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none placeholder-[var(--text-muted)] dark:bg-[var(--dark-accent)]"
            />
            <input
              type="date"
              placeholder={translations[language].reservationDate}
              value={newReservation.reservation_date}
              onChange={(e) => setNewReservation({ ...newReservation, reservation_date: e.target.value })}
              className="w-full bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none placeholder-[var(--text-muted)] dark:bg-[var(--dark-accent)]"
            />
            <input
              type="number"
              placeholder={translations[language].numberOfPeople}
              value={newReservation.number_of_people}
              onChange={(e) => setNewReservation({ ...newReservation, number_of_people: e.target.value })}
              className="w-full bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none placeholder-[var(--text-muted)] dark:bg-[var(--dark-accent)]"
            />
            <button
              onClick={handleCreateReservation}
              className="deep-ui-button w-full px-6 py-3 rounded-xl font-semibold hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)] transition"
            >
              {translations[language].submit}
            </button>
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none dark:bg-[var(--dark-accent)]"
          >
            <option value="">{translations[language].filterByStatus}</option>
            <option value="">{translations[language].all}</option>
            <option value="pending">{translations[language].pending}</option>
            <option value="confirmed">{translations[language].confirmed}</option>
            <option value="cancelled">{translations[language].cancelled}</option>
          </select>
          <input
            type="date"
            className="bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none dark:bg-[var(--dark-accent)]"
            placeholder={translations[language].reservationDate}
          />
        </div>

        {/* Tableau des réservations */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-[var(--text)]">
            <thead>
              <tr className="border-b border-[var(--border)] dark:border-[var(--dark-border)]">
                <th className="py-3 px-4 font-medium">{translations[language].circuitId}</th>
                <th className="py-3 px-4 font-medium">{translations[language].touristId}</th>
                <th className="py-3 px-4 font-medium">{translations[language].reservationDate}</th>
                <th className="py-3 px-4 font-medium">{translations[language].numberOfPeople}</th>
                <th className="py-3 px-4 font-medium">{translations[language].status}</th>
                <th className="py-3 px-4 font-medium">{translations[language].createdAt}</th>
                <th className="py-3 px-4 font-medium">{translations[language].actions}</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.map((reservation) => (
                <tr
                  key={reservation.id}
                  className="border-b border-[var(--border)] dark:border-[var(--dark-border)] hover:bg-[var(--accent)] dark:hover:bg-[var(--dark-accent)] transition-colors"
                >
                  <td className="py-3 px-4">{reservation.circuit_id}</td>
                  <td className="py-3 px-4">{reservation.tourist_id}</td>
                  <td className="py-3 px-4">{reservation.reservation_date}</td>
                  <td className="py-3 px-4">{reservation.number_of_people}</td>
                  <td className="py-3 px-4">
                    {editingReservation?.id === reservation.id ? (
                      <select
                        value={editingReservation.status}
                        onChange={(e) =>
                          setEditingReservation({
                            ...editingReservation,
                            status: e.target.value as 'pending' | 'confirmed' | 'cancelled',
                          })
                        }
                        className="bg-[var(--accent)] text-[var(--text)] px-2 py-1 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:bg-[var(--dark-accent)]"
                      >
                        <option value="pending">{translations[language].pending}</option>
                        <option value="confirmed">{translations[language].confirmed}</option>
                        <option value="cancelled">{translations[language].cancelled}</option>
                      </select>
                    ) : (
                      <span
                        className={`badge ${
                          reservation.status === 'confirmed'
                            ? 'badge-primary'
                            : reservation.status === 'pending'
                            ? 'badge-gray'
                            : 'badge-red'
                        }`}
                      >
                        {translations[language][reservation.status]}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">{new Date(reservation.created_at).toLocaleDateString()}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    {editingReservation?.id === reservation.id ? (
                      <>
                        <button
                          onClick={() => handleUpdateReservation(editingReservation)}
                          className="deep-ui-button p-1.5 rounded-lg flex items-center hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)]"
                        >
                          <i data-feather="save" className="h-4 w-4 mr-1"></i>
                          {translations[language].save}
                        </button>
                        <button
                          onClick={() => setEditingReservation(null)}
                          className="deep-ui-button p-1.5 rounded-lg flex items-center hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)]"
                        >
                          <i data-feather="x" className="h-4 w-4 mr-1"></i>
                          {translations[language].cancel}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditingReservation(reservation)}
                          className="deep-ui-button p-1.5 rounded-lg flex items-center hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)]"
                        >
                          <i data-feather="edit" className="h-4 w-4 mr-1"></i>
                          {translations[language].edit}
                        </button>
                        <button
                          onClick={() => handleDeleteReservation(reservation.id)}
                          className="deep-ui-button p-1.5 rounded-lg flex items-center hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400"
                        >
                          <i data-feather="trash-2" className="h-4 w-4 mr-1"></i>
                          {translations[language].delete}
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}