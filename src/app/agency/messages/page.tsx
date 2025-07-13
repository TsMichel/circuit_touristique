'use client';

import { useState } from 'react';

export default function Messages() {
  const [language, setLanguage] = useState('fr');

  const translations = {
    fr: {
      messagesTitle: 'Messagerie',
      sendMessage: 'Envoyer',
      typeMessage: 'Tapez votre message...',
    },
    en: {
      messagesTitle: 'Messaging',
      sendMessage: 'Send',
      typeMessage: 'Type your message...',
    },
  };

  return (
    <div className="font-jakarta">
      <div className="deep-ui-card p-6 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] dark:backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4 text-[var(--text)]">{translations[language].messagesTitle}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Liste des conversations */}
          <div className="w-full md:w-1/3 border-r border-[var(--border)] dark:border-[var(--dark-border)]">
            <div className="space-y-2">
              {[1, 2, 3].map((id) => (
                <div
                  key={id}
                  className="p-3 rounded-xl hover:bg-[var(--accent)] dark:hover:bg-[var(--dark-accent)] cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary-bg)] flex items-center justify-center text-[var(--primary)]">
                      <i data-feather="user" className="h-5 w-5"></i>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text)]">Utilisateur {id}</p>
                      <p className="text-sm text-[var(--text-muted)] truncate">Dernier message...</p>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] ml-auto">12:00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Fenêtre de conversation */}
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto max-h-96">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="max-w-xs p-3 rounded-xl bg-[var(--accent)] text-[var(--text)]">
                    <p>Message reçu...</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">12:00</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-xs p-3 rounded-xl bg-[var(--primary-bg)] text-[var(--primary)]">
                    <p>Message envoyé...</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">12:01</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-[var(--border)] dark:border-[var(--dark-border)]">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={translations[language].typeMessage}
                  className="flex-1 bg-[var(--accent)] text-[var(--text)] px-4 py-2 rounded-xl border border-[var(--border)] dark:border-[var(--dark-border)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none placeholder-[var(--text-muted)] dark:bg-[var(--dark-accent)]"
                />
                <button className="deep-ui-button p-2 rounded-xl hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] dark:hover:shadow-[0_0_10px_var(--dark-primary-glow)]">
                  <i data-feather="send" className="h-5 w-5"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}