'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Reservation {
  id: number;
  circuit_id: number;
  tourist_id: number;
  reservation_date: string;
  number_of_people: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
}

export default function Reservation() {
  const [language, setLanguage] = useState('fr');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([
    { id: 1, circuit_id: 1, tourist_id: 1, reservation_date: '2025-07-15', number_of_people: 2, status: 'pending', created_at: '2025-07-01T10:00:00Z' },
    { id: 2, circuit_id: 2, tourist_id: 2, reservation_date: '2025-07-20', number_of_people: 3, status: 'confirmed', created_at: '2025-07-02T12:00:00Z' },
  ]);
  const [newReservation, setNewReservation] = useState({
    circuit_id: '',
    tourist_id: '',
    reservation_date: '',
    number_of_people: '',
  });
  const [filterStatus, setFilterStatus] = useState('');
  const [editingReservation, setEditingReservation] = useState<Reservation | null>(null);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
    console.log(`Langue changée en : ${lang}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Objet de traduction
  const translations = {
    fr: {
      home: 'Accueil',
      circuits: 'Circuits',
      reservations: 'Réservations',
      stats: 'Statistiques',
      messages: 'Messages',
      export: 'Exporter',
      invoice: 'Facture',
      translate: 'Traduire',
      agency: 'MonAgence',
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
    },
    en: {
      home: 'Home',
      circuits: 'Circuits',
      reservations: 'Reservations',
      stats: 'Statistics',
      messages: 'Messages',
      export: 'Export',
      invoice: 'Invoice',
      translate: 'Translate',
      agency: 'MyAgency',
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
    },
  };

  // Simuler la création d'une réservation
  const handleCreateReservation = () => {
    const newId = reservations.length + 1;
    const newRes: Reservation = {
      id: newId,
      circuit_id: parseInt(newReservation.circuit_id),
      tourist_id: parseInt(newReservation.tourist_id),
      reservation_date: newReservation.reservation_date,
      number_of_people: parseInt(newReservation.number_of_people),
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    setReservations([...reservations, newRes]);
    setNewReservation({ circuit_id: '', tourist_id: '', reservation_date: '', number_of_people: '' });
    // TODO: Remplacer par un appel API à /api/reservations
  };

  // Simuler la mise à jour d'une réservation
  const handleUpdateReservation = (reservation: Reservation) => {
    setReservations(
      reservations.map((res) => (res.id === reservation.id ? reservation : res))
    );
    setEditingReservation(null);
    // TODO: Remplacer par un appel API à /api/reservations/:id
  };

  // Simuler la suppression d'une réservation
  const handleDeleteReservation = (id: number) => {
    setReservations(reservations.filter((res) => res.id !== id));
    // TODO: Remplacer par un appel API à /api/reservations/:id
  };

  // Filtrer les réservations
  const filteredReservations = filterStatus
    ? reservations.filter((res) => res.status === filterStatus)
    : reservations;

  return (
    <div className="bg-[#00131b] text-white min-h-screen flex">
      {/* Sidebar (supposé être sidebarAgency.tsx) */}
      <aside className="w-64 bg-[#011c28] p-4 hidden md:block">
        <div className="font-['SF_Pro_Display','Helvetica_Neue',Helvetica,Arial,sans-serif] font-bold">
          <Link href="/" className="flex items-center mb-6">
            <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            <span className="ml-2 text-cyan-300 text-lg">{translations[language].agency}</span>
          </Link>
          <nav className="space-y-4">
            <Link href="/" className="block text-white hover:text-cyan-300">
              {translations[language].home}
            </Link>
            <Link href="/agency/circuits" className="block text-white hover:text-cyan-300">
              {translations[language].circuits}
            </Link>
            <Link href="/agency/reservation" className="block text-white hover:text-cyan-300">
              {translations[language].reservations}
            </Link>
            <Link href="/agency/stats" className="block text-white hover:text-cyan-300">
              {translations[language].stats}
            </Link>
            <Link href="/agency/messages" className="block text-white hover:text-cyan-300">
              {translations[language].messages}
            </Link>
            <Link href="/agency/export" className="block text-white hover:text-cyan-300">
              {translations[language].export}
            </Link>
            <Link href="/agency/invoice" className="block text-white hover:text-cyan-300">
              {translations[language].invoice}
            </Link>
          </nav>
        </div>
      </aside>

      <div className="flex-1">
        {/* Navbar */}
        <header className="w-full z-50 fixed top-0 left-0 md:left-64 bg-[#00131b]/80 backdrop-blur-md shadow-sm">
          <nav className="flex items-center justify-between px-6 py-4 lg:px-12 font-['SF_Pro_Display','Helvetica_Neue',Helvetica,Arial,sans-serif] font-bold">
            <div className="flex lg:flex-1 md:hidden">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
                <span className="ml-2 text-cyan-300 text-lg">{translations[language].agency}</span>
              </Link>
            </div>
            <div className="hidden md:flex lg:gap-x-10 items-center">
              <Link href="/" className="text-sm text-white hover:text-cyan-300">{translations[language].home}</Link>
              <Link href="/agency/circuits" className="text-sm text-white hover:text-cyan-300">{translations[language].circuits}</Link>
              <Link href="/agency/reservation" className="text-sm text-white hover:text-cyan-300">{translations[language].reservations}</Link>
              <Link href="/agency/stats" className="text-sm text-white hover:text-cyan-300">{translations[language].stats}</Link>
              <Link href="/agency/messages" className="text-sm text-white hover:text-cyan-300">{translations[language].messages}</Link>
              <Link href="/agency/export" className="text-sm text-white hover:text-cyan-300">{translations[language].export}</Link>
              <Link href="/agency/invoice" className="text-sm text-white hover:text-cyan-300">{translations[language].invoice}</Link>

              {/* Menu déroulant Traduire */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-sm text-white hover:text-cyan-300 focus:outline-none flex items-center"
                >
                  {translations[language].translate} <span className="ml-1">▼</span>
                </button>
                <div
                  className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-[#012734] mt-2 rounded-md shadow-md z-50 min-w-[120px]`}
                >
                  <button
                    onClick={() => changeLanguage('fr')}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-cyan-700"
                  >
                    Français
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-cyan-700"
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Section Réservations */}
        <section className="bg-[#011c28] text-white py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
            {translations[language].reservationsTitle}
          </h2>
          <p className="text-lg text-center text-gray-400 mb-8">
            {translations[language].reservationsText}
          </p>

          {/* Filtres */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-[#012734] text-white px-4 py-2 rounded-md"
            >
              <option value="">{translations[language].filterByStatus}</option>
              <option value="">{translations[language].all}</option>
              <option value="pending">{translations[language].pending}</option>
              <option value="confirmed">{translations[language].confirmed}</option>
              <option value="cancelled">{translations[language].cancelled}</option>
            </select>
            <input
              type="date"
              className="bg-[#012734] text-white px-4 py-2 rounded-md"
              placeholder={translations[language].reservationDate}
            />
          </div>

          {/* Formulaire de création */}
          <div className="max-w-md mx-auto mb-12">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              {translations[language].addReservation}
            </h3>
            <div className="space-y-4">
              <input
                type="number"
                placeholder={translations[language].circuitId}
                value={newReservation.circuit_id}
                onChange={(e) => setNewReservation({ ...newReservation, circuit_id: e.target.value })}
                className="w-full bg-[#012734] text-white px-4 py-2 rounded-md"
              />
              <input
                type="number"
                placeholder={translations[language].touristId}
                value={newReservation.tourist_id}
                onChange={(e) => setNewReservation({ ...newReservation, tourist_id: e.target.value })}
                className="w-full bg-[#012734] text-white px-4 py-2 rounded-md"
              />
              <input
                type="date"
                placeholder={translations[language].reservationDate}
                value={newReservation.reservation_date}
                onChange={(e) => setNewReservation({ ...newReservation, reservation_date: e.target.value })}
                className="w-full bg-[#012734] text-white px-4 py-2 rounded-md"
              />
              <input
                type="number"
                placeholder={translations[language].numberOfPeople}
                value={newReservation.number_of_people}
                onChange={(e) => setNewReservation({ ...newReservation, number_of_people: e.target.value })}
                className="w-full bg-[#012734] text-white px-4 py-2 rounded-md"
              />
              <button
                onClick={handleCreateReservation}
                className="bg-[#00e0ff] hover:bg-[#00c3e0] text-[#00131b] px-6 py-3 rounded-md font-semibold shadow-lg transition w-full"
              >
                {translations[language].submit}
              </button>
            </div>
          </div>

          {/* Liste des réservations */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#012734]">
                  <th className="p-4">{translations[language].circuitId}</th>
                  <th className="p-4">{translations[language].touristId}</th>
                  <th className="p-4">{translations[language].reservationDate}</th>
                  <th className="p-4">{translations[language].numberOfPeople}</th>
                  <th className="p-4">{translations[language].status}</th>
                  <th className="p-4">{translations[language].createdAt}</th>
                  <th className="p-4">{translations[language].actions}</th>
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation) => (
                  <tr key={reservation.id} className="border-b border-cyan-600">
                    <td className="p-4">{reservation.circuit_id}</td>
                    <td className="p-4">{reservation.tourist_id}</td>
                    <td className="p-4">{reservation.reservation_date}</td>
                    <td className="p-4">{reservation.number_of_people}</td>
                    <td className="p-4">
                      {editingReservation?.id === reservation.id ? (
                        <select
                          value={editingReservation.status}
                          onChange={(e) =>
                            setEditingReservation({ ...editingReservation, status: e.target.value as 'pending' | 'confirmed' | 'cancelled' })
                          }
                          className="bg-[#012734] text-white px-2 py-1 rounded-md"
                        >
                          <option value="pending">{translations[language].pending}</option>
                          <option value="confirmed">{translations[language].confirmed}</option>
                          <option value="cancelled">{translations[language].cancelled}</option>
                        </select>
                      ) : (
                        translations[language][reservation.status]
                      )}
                    </td>
                    <td className="p-4">{new Date(reservation.created_at).toLocaleDateString()}</td>
                    <td className="p-4">
                      {editingReservation?.id === reservation.id ? (
                        <>
                          <button
                            onClick={() => handleUpdateReservation(editingReservation)}
                            className="text-cyan-400 hover:underline mr-2"
                          >
                            {translations[language].save}
                          </button>
                          <button
                            onClick={() => setEditingReservation(null)}
                            className="text-gray-400 hover:underline"
                          >
                            {translations[language].cancel}
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setEditingReservation(reservation)}
                            className="text-cyan-400 hover:underline mr-2"
                          >
                            {translations[language].edit}
                          </button>
                          <button
                            onClick={() => handleDeleteReservation(reservation.id)}
                            className="text-red-400 hover:underline"
                          >
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
        </section>
      </div>
    </div>
  );
}