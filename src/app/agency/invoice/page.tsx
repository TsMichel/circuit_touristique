'use client';

import { useState } from 'react';

export default function Invoice() {
  const [language, setLanguage] = useState('fr');
  const [formData, setFormData] = useState({
    reservationId: '',
    amount: '',
    paymentDate: '',
  });

  const translations = {
    fr: {
      invoiceTitle: 'Gérer les factures',
      reservationId: 'ID de la réservation',
      amount: 'Montant',
      paymentDate: 'Date de paiement',
      submit: 'Enregistrer le ticket',
    },
    en: {
      invoiceTitle: 'Manage Invoices',
      reservationId: 'Reservation ID',
      amount: 'Amount',
      paymentDate: 'Payment Date',
      submit: 'Record Ticket',
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'enregistrement à implémenter (par exemple, appel API)
    console.log('Ticket enregistré :', formData);
  };

  return (
    <div className="font-jakarta">
      <div className="deep-ui-card p-6 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4 text-[var(--text)]">{translations[language].invoiceTitle}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">{translations[language].reservationId}</label>
            <input
              type="text"
              name="reservationId"
              value={formData.reservationId}
              onChange={handleChange}
              className="w-full bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none placeholder-[var(--text-muted)] dark:bg-[var(--dark-accent)]"
              placeholder="Ex. 123"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">{translations[language].amount}</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none placeholder-[var(--text-muted)] dark:bg-[var(--dark-accent)]"
              placeholder="Ex. 100.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">{translations[language].paymentDate}</label>
            <input
              type="date"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleChange}
              className="w-full bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none placeholder-[var(--text-muted)] dark:bg-[var(--dark-accent)]"
            />
          </div>
          <button
            type="submit"
            className="deep-ui-button w-full px-6 py-3 rounded-xl hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)]"
          >
            {translations[language].submit}
          </button>
        </form>
      </div>
    </div>
  );
}