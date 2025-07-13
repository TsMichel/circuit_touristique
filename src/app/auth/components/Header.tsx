import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'tourist' ou 'agency'

//   // Vérifier l'état de connexion (exemple avec localStorage ou une API)
//   useEffect(() => {
//     const token = localStorage.getItem('token'); // Supposons que le token JWT est stocké ici
//     if (token) {
//       setIsLoggedIn(true);
//       // Vous pouvez appeler une API pour vérifier si l'utilisateur est un touriste ou une agence
//       // Exemple : fetch('/api/auth/me') pour récupérer les informations utilisateur
//       setUserType('tourist'); // Remplacer par une logique réelle
//     }
//   }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserType(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Circuit Touristique
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Accueil
            </Link>
            <Link href="/circuits" className="hover:text-gray-300">
              Circuits
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  href={userType === 'tourist' ? '/tourist/dashboard' : '/agency/dashboard'}
                  className="hover:text-gray-300"
                >
                  Tableau de bord
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Connexion
              </Link>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-white hover:text-gray-300">
              Accueil
            </Link>
            <Link href="/circuits" className="block text-white hover:text-gray-300">
              Circuits
            </Link>
            <Link href="/about" className="block text-white hover:text-gray-300">
              À propos
            </Link>
            <Link href="/contact" className="block text-white hover:text-gray-300">
              Contact
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  href={userType === 'tourist' ? '/tourist/dashboard' : '/agency/dashboard'}
                  className="block text-white hover:text-gray-300"
                >
                  Tableau de bord
                </Link>
                <button
                  onClick={handleLogout}
                  className="block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;