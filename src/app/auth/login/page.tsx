'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [language, setLanguage] = useState('fr');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
    console.log(`Langue changée en : ${lang}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const translations = {
    fr: {
      home: 'Accueil',
      login: 'Connexion',
      translate: 'Traduire',
      agency: 'MonAgence',
      loginTitle: 'Connexion à votre compte',
      email: 'Email',
      password: 'Mot de passe',
      loginButton: 'Se connecter',
      loginWith: 'Se connecter avec',
      signup: 'Pas de compte ? Inscrivez-vous'
    },
    en: {
      home: 'Home',
      login: 'Login',
      translate: 'Translate',
      agency: 'MyAgency',
      loginTitle: 'Log in to your account',
      email: 'Email',
      password: 'Password',
      loginButton: 'Log in',
      loginWith: 'Log in with',
      signup: 'No account? Sign up'
    }
  };

  return (
    <div className="bg-[#00131b] text-white min-h-screen">
      <header className="w-full z-50 fixed top-0 left-0 bg-[#00131b]/80 backdrop-blur-md shadow-sm">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12 font-['SF_Pro_Display','Helvetica_Neue',Helvetica,Arial,sans-serif] font-bold">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
              <span className="ml-2 text-cyan-300 text-lg">{translations[language].agency}</span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-10 items-center">
            <Link href="/" className="text-sm text-white hover:text-cyan-300">{translations[language].home}</Link>
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/auth/login" className="text-sm text-white hover:text-cyan-300">
              {translations[language].login} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </header>

      <section className="bg-[#011c28] text-white py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
          {translations[language].loginTitle}
        </h2>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <input
              type="email"
              placeholder={translations[language].email}
              className="w-full bg-[#012734] text-white px-4 py-2 rounded-md"
            />
            <input
              type="password"
              placeholder={translations[language].password}
              className="w-full bg-[#012734] text-white px-4 py-2 rounded-md"
            />
            <button
              className="bg-[#00e0ff] hover:bg-[#00c3e0] text-[#00131b] px-6 py-3 rounded-md font-semibold shadow-lg transition w-full"
            >
              {translations[language].loginButton}
            </button>
            <div className="text-center">
              <p className="text-gray-400">{translations[language].loginWith}</p>
              <div className="flex justify-center gap-4 mt-2">
                <button className="bg-[#012734] text-white px-4 py-2 rounded-md">Facebook</button>
                <button className="bg-[#012734] text-white px-4 py-2 rounded-md">Google</button>
              </div>
            </div>
            <p className="text-center text-gray-400">
              <Link href="/auth/signup" className="text-cyan-400 hover:underline">{translations[language].signup}</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}