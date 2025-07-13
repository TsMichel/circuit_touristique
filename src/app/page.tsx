'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('fr');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Close dropdown after selection
    console.log(`Language changed to: ${lang}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Translation object for header and sections
  const translations = {
    fr: {
      home: 'Accueil',
      circuits: 'Circuits',
      contact: 'Contact',
      about: 'À propos',
      translate: 'Traduire',
      login: 'Connexion',
      agency: 'MonAgence',
      welcomeTitle: 'Découvrez des circuits touristiques uniques',
      welcomeText: 'Explorez les merveilles du monde avec nos agences partenaires.',
      circuitsTitle: 'Nos circuits touristiques',
      circuitsText: 'Trouvez le circuit parfait selon votre région, type d’activité, date ou budget.',
      aboutTitle: 'À propos de nous',
      aboutText: 'MonAgence est une plateforme dédiée à la découverte et à la réservation de circuits touristiques uniques. Nous connectons les voyageurs avec des agences et guides expérimentés pour offrir des expériences inoubliables.',
      objectivesTitle: 'Objectifs du projet',
      objectivesText: 'Permettre aux touristes de découvrir et réserver des circuits touristiques en ligne, gérer leurs réservations, et interagir avec les organisateurs. Pour les agences, nous offrons des outils pour créer et gérer des circuits, suivre les réservations et analyser les performances.',
      contactTitle: 'Contactez-nous',
      contactText: 'Remplissez le formulaire ci-dessous ou contactez-nous directement pour toute question.',
      discoverCircuits: 'Découvrir les circuits',
      contactUs: 'Contactez-nous →',
      viewCircuits: 'Voir les circuits',
      startNow: 'Commencer maintenant',
      multilingualSupport: 'Support multilingue',
      variedCircuits: 'Circuits variés',
      easyBooking: 'Réservation facile',
      variedCircuitsText: 'Découvrez une large gamme d’activités culturelles, historiques et naturelles.',
      easyBookingText: 'Réservez en ligne en quelques clics et gérez vos réservations.',
      multilingualSupportText: 'Profitez de nos services en français et en anglais.',
      whyChooseUs: 'Pourquoi nous choisir ?'
    },
    en: {
      home: 'Home',
      circuits: 'Circuits',
      contact: 'Contact',
      about: 'About',
      translate: 'Translate',
      login: 'Login',
      agency: 'MyAgency',
      welcomeTitle: 'Discover unique tourist circuits',
      welcomeText: 'Explore the wonders of the world with our partner agencies.',
      circuitsTitle: 'Our tourist circuits',
      circuitsText: 'Find the perfect circuit based on your region, activity type, date, or budget.',
      aboutTitle: 'About us',
      aboutText: 'MyAgency is a platform dedicated to discovering and booking unique tourist circuits. We connect travelers with experienced agencies and guides to offer unforgettable experiences.',
      objectivesTitle: 'Project objectives',
      objectivesText: 'Enable tourists to discover and book tourist circuits online, manage their reservations, and interact with organizers. For agencies, we provide tools to create and manage circuits, track reservations, and analyze performance.',
      contactTitle: 'Contact us',
      contactText: 'Fill out the form below or contact us directly with any questions.',
      discoverCircuits: 'Discover the circuits',
      contactUs: 'Contact us →',
      viewCircuits: 'View circuits',
      startNow: 'Start now',
      multilingualSupport: 'Multilingual support',
      variedCircuits: 'Varied circuits',
      easyBooking: 'Easy booking',
      variedCircuitsText: 'Discover a wide range of cultural, historical, and natural activities.',
      easyBookingText: 'Book online in a few clicks and manage your reservations.',
      multilingualSupportText: 'Enjoy our services in French and English.',
      whyChooseUs: 'Why choose us?'
    }
  };

  return (
    <div className="bg-[#00131b] text-white min-h-screen">
      <header className="w-full z-50 fixed top-0 left-0 bg-[#00131b]/80 backdrop-blur-md shadow-sm">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12 font-['SF_Pro_Display','Helvetica_Neue',Helvetica,Arial,sans-serif] font-bold">
          <div className="flex lg:flex-1">
            <Link href="#accueil" className="-m-1.5 p-1.5 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
              <span className="ml-2 text-cyan-300 text-lg">{translations[language].agency}</span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-10 items-center">
            <Link href="#accueil" className="text-sm text-white hover:text-cyan-300">{translations[language].home}</Link>
            <Link href="/tourist/circuit" className="text-sm text-white hover:text-cyan-300">{translations[language].circuits}</Link>
            <Link href="#contact" className="text-sm text-white hover:text-cyan-300">{translations[language].contact}</Link>
            <Link href="#apropos" className="text-sm text-white hover:text-cyan-300">{translations[language].about}</Link>

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

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/auth/login" className="text-sm text-white hover:text-cyan-300">
              {translations[language].login} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </header>


      

      {/* Accueil Section */}
      <section id="accueil" className="relative h-[100vh] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="https://medias.hit.enaveyron.fr/fiches/3703/images/502744_f65b3838-9daa-4744-b56d-4fae54785dff/1920.webp"
          alt="Circuit touristique"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00131b]/90 via-[#00131b]/60 to-[#00131b]/90"></div>

        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            {translations[language].welcomeTitle}
          </h1>
          <p className="text-lg sm:text-xl text-cyan-100 mb-8">
            {translations[language].welcomeText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#circuits"
              className="bg-[#00e0ff] hover:bg-[#00c3e0] text-[#00131b] px-6 py-3 rounded-md font-semibold shadow-lg transition"
            >
              {translations[language].discoverCircuits}
            </Link>
            <Link
              href="#contact"
              className="text-cyan-200 hover:text-white text-sm font-semibold flex items-center justify-center"
            >
              {translations[language].contactUs}
            </Link>
          </div>
        </div>
      </section>

       {/* Pourquoi nous choisir Section */}
      <section className="bg-[#011c28] text-white py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-t-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
          {translations[language].whyChooseUs}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center border border-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {translations[language].variedCircuits}
            </h3>
            <p className="text-gray-400">
              {translations[language].variedCircuitsText}
            </p>
            <Link href="#circuits" className="text-cyan-400 hover:underline mt-4 inline-block">
              {translations[language].viewCircuits}
            </Link>
          </div>
          <div className="text-center border border-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {translations[language].easyBooking}
            </h3>
            <p className="text-gray-400">
              {translations[language].easyBookingText}
            </p>
            <Link href="/auth/login" className="text-cyan-400 hover:underline mt-4 inline-block">
              {translations[language].startNow}
            </Link>
          </div>
          <div className="text-center border border-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {translations[language].multilingualSupport}
            </h3>
            <p className="text-gray-400">
              {translations[language].multilingualSupportText}
            </p>
            <Link href="#contact" className="text-cyan-400 hover:underline mt-4 inline-block">
              {translations[language].contactUs}
            </Link>
          </div>
        </div>
      </section>





    

      {/* Circuits Section */}
      <section id="circuits" className="bg-[#011c28] text-white py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text- medulla-one-regular3xl font-bold text-center mb-12 text-cyan-300">
          {translations[language].circuitsTitle}
        </h2>
        <p className="text-lg text-center text-gray-400 mb-8">
          {translations[language].circuitsText}
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <select className="bg-[#012734] text-white px-4 py-2 rounded-md">
            <option>{language === 'fr' ? 'Région' : 'Region'}</option>
            <option>{language === 'fr' ? 'Europe' : 'Europe'}</option>
            <option>{language === 'fr' ? 'Asie' : 'Asia'}</option>
            <option>{language === 'fr' ? 'Afrique' : 'Africa'}</option>
          </select>
          <select className="bg-[#012734] text-white px-4 py-2 rounded-md">
            <option>{language === 'fr' ? 'Type d’activité' : 'Activity type'}</option>
            <option>{language === 'fr' ? 'Culturel' : 'Cultural'}</option>
            <option>{language === 'fr' ? 'Nature' : 'Nature'}</option>
            <option>{language === 'fr' ? 'Aventure' : 'Adventure'}</option>
          </select>
          <input
            type="date"
            className="bg-[#012734] text-white px-4 py-2 rounded-md"
            placeholder={language === 'fr' ? 'Date' : 'Date'}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center border border-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {language === 'fr' ? 'Circuit culturel en Europe' : 'Cultural circuit in Europe'}
            </h3>
            <p className="text-gray-400">
              {language === 'fr' ? 'Découvrez l’histoire et la culture des grandes villes européennes.' : 'Discover the history and culture of major European cities.'}
            </p>
            <Link href="/circuits" className="text-cyan-400 hover:underline mt-4 inline-block">
              {translations[language].viewCircuits}
            </Link>
          </div>
          <div className="text-center border border-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {language === 'fr' ? 'Aventure en Asie' : 'Adventure in Asia'}
            </h3>
            <p className="text-gray-400">
              {language === 'fr' ? 'Explorez des paysages exotiques et des traditions uniques.' : 'Explore exotic landscapes and unique traditions.'}
            </p>
            <Link href="/circuits" className="text-cyan-400 hover:underline mt-4 inline-block">
              {translations[language].viewCircuits}
            </Link>
          </div>
          <div className="text-center border border-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {language === 'fr' ? 'Safari en Afrique' : 'Safari in Africa'}
            </h3>
            <p className="text-gray-400">
              {language === 'fr' ? 'Vivez une aventure inoubliable au cœur de la savane.' : 'Experience an unforgettable adventure in the heart of the savanna.'}
            </p>
            <Link href="/circuits" className="text-cyan-400 hover:underline mt-4 inline-block">
              {translations[language].viewCircuits}
            </Link>
          </div>
        </div>
      </section>

      {/* Objectifs du Projet Section */}
      <section id="objectifs" className="bg-[#011c28] text-white py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
          {translations[language].objectivesTitle}
        </h2>
        <p className="text-lg text-center text-gray-400 mb-8">
          {translations[language].objectivesText}
        </p>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="bg-[#011c28] text-white py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
          {translations[language].aboutTitle}
        </h2>
        <p className="text-lg text-center text-gray-400 mb-8">
          {translations[language].aboutText}
        </p>
        <div className="text-center">
          <Link href="#contact" className="text-cyan-400 hover:underline mt-4 inline-block">
            {translations[language].contactUs}
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#011c28] text-white py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
          {translations[language].contactTitle}
        </h2>
        <p className="text-lg text-center text-gray-400 mb-8">
          {translations[language].contactText}
        </p>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <input
              type="text"
              placeholder={language === 'fr' ? 'Nom' : 'Name'}
              className="w-full bg-[#012734] text-white px-4 py-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#012734] text-white px-4 py-2 rounded-md"
            />
            <textarea
              placeholder={language === 'fr' ? 'Message' : 'Message'}
              className="w-full bg-[#012734] text-white px-4 py-2 rounded-md h-32"
            ></textarea>
            <button
              className="bg-[#00e0ff] hover:bg-[#00c3e0] text-[#00131b] px-6 py-3 rounded-md font-semibold shadow-lg transition w-full"
            >
              {language === 'fr' ? 'Envoyer' : 'Send'}
            </button>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            {language === 'fr' ? 'Ou contactez-nous à :' : 'Or contact us at:'} <a href="mailto:contact@monagence.com" className="text-cyan-400 hover:underline">contact@monagence.com</a>
          </p>
        </div>
      </section>

     
    </div>
  );
}