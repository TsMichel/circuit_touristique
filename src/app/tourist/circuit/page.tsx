'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Circuits() {
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

  // Objet de traduction pour le header et la section
  const translations = {
    fr: {
      home: 'Accueil',
      circuits: 'Circuits',
      login: 'Connexion',
      translate: 'Traduire',
      agency: 'MonAgence',
      circuitsTitle: 'Nos circuits touristiques',
      circuitsText: 'Trouvez le circuit parfait selon votre région, type d’activité, date ou budget.',
      viewCircuits: 'Voir les détails',
    },
    en: {
      home: 'Home',
      circuits: 'Circuits',
      login: 'Login',
      translate: 'Translate',
      agency: 'MyAgency',
      circuitsTitle: 'Our tourist circuits',
      circuitsText: 'Find the perfect circuit based on your region, activity type, date, or budget.',
      viewCircuits: 'View details',
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
            <Link href="/tourist/circuit" className="text-sm text-white hover:text-cyan-300">{translations[language].circuits}</Link>

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

      {/* Circuits Section */}
      <section className="bg-[#011c28] text-white py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
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
          <input
            type="number"
            placeholder={language === 'fr' ? 'Budget' : 'Budget'}
            className="bg-[#012734] text-white px-4 py-2 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center border border-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img
              src="https://medias.hit.enaveyron.fr/fiches/3703/images/502744_f65b3838-9daa-4744-b56d-4fae54785dff/1920.webp"
              alt="Circuit culturel"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {language === 'fr' ? 'Circuit culturel en Europe' : 'Cultural circuit in Europe'}
            </h3>
            <p className="text-gray-400 mb-2">
              {language === 'fr' ? 'Durée : 7 jours | Groupe max : 15 | Langues : FR, EN' : 'Duration: 7 days | Max group: 15 | Languages: FR, EN'}
            </p>
            <p className="text-gray-400">
              {language === 'fr' ? 'Découvrez l’histoire et la culture des grandes villes européennes.' : 'Discover the history and culture of major European cities.'}
            </p>
            <Link href="/circuits/1" className="text-cyan-400 hover:underline mt-4 inline-block">
              {translations[language].viewCircuits}
            </Link>
          </div>
          <div className="text-center border border-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img
              src="https://medias.hit.enaveyron.fr/fiches/3703/images/502744_f65b3838-9daa-4744-b56d-4fae54785dff/1920.webp"
              alt="Aventure en Asie"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {language === 'fr' ? 'Aventure en Asie' : 'Adventure in Asia'}
            </h3>
            <p className="text-gray-400 mb-2">
              {language === 'fr' ? 'Durée : 10 jours | Groupe max : 12 | Langues : FR, EN' : 'Duration: 10 days | Max group: 12 | Languages: FR, EN'}
            </p>
            <p className="text-gray-400">
              {language === 'fr' ? 'Explorez des paysages exotiques et des traditions uniques.' : 'Explore exotic landscapes and unique traditions.'}
            </p>
            <Link href="/circuits/2" className="text-cyan-400 hover:underline mt-4 inline-block">
              {translations[language].viewCircuits}
            </Link>
          </div>
          <div className="text-center border border-cyan-600 p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <img
              src="https://medias.hit.enaveyron.fr/fiches/3703/images/502744_f65b3838-9daa-4744-b56d-4fae54785dff/1920.webp"
              alt="Safari en Afrique"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              {language === 'fr' ? 'Safari en Afrique' : 'Safari in Africa'}
            </h3>
            <p className="text-gray-400 mb-2">
              {language === 'fr' ? 'Durée : 5 jours | Groupe max : 10 | Langues : FR, EN' : 'Duration: 5 days | Max group: 10 | Languages: FR, EN'}
            </p>
            <p className="text-gray-400">
              {language === 'fr' ? 'Vivez une aventure inoubliable au cœur de la savane.' : 'Experience an unforgettable adventure in the heart of the savanna.'}
            </p>
            <Link href="/circuits/3" className="text-cyan-400 hover:underline mt-4 inline-block">
              {translations[language].viewCircuits}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


// import SidebarTourist from "../auth/components/sidebarTourist";
// import CircuitCard from "../auth/components/CircuitCard";
// import SearchBar from "../auth/components/SearchBar";

// export default function TouristCircuits() {
//   const circuits = [
//     { id: 1, name: "Circuit Paris", price: 200 },
//     { id: 2, name: "Circuit Rome", price: 300 },
//   ];

//   return (
//     <div className="flex min-h-screen">
//       <SidebarTourist />
//       <div className="flex-grow p-8">
//         <h1 className="text-3xl font-bold mb-4">Circuits disponibles</h1>
//         <SearchBar />
//         <div className="grid grid-cols-3 gap-4 mt-4">
//           {circuits.map((circuit) => (
//             <CircuitCard key={circuit.id} circuit={circuit} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }