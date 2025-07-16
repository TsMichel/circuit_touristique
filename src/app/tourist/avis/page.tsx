// import React from 'react'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


// interface MapProps {
//   circuits: any[]
// }

// const Map: React.FC<MapProps> = ({ circuits }) => {
//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {circuits.map(circuit => (
//         <Marker key={circuit.id} position={[circuit.latitude, circuit.longitude]}>
//           <Popup>
//             {circuit.name}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   )
// }

// export default Map
'use client';

import React, { useState } from 'react';

type Avis = {
  nom: string;
  message: string;
};

const AvisPage = () => {
  const [avisList, setAvisList] = useState<Avis[]>([]);
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');

  const ajouterAvis = () => {
    if (nom && message) {
      setAvisList([...avisList, { nom, message }]);
      setNom('');
      setMessage('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Laisser un avis</h1>
      <input
        className="border p-2 mb-2 block w-full"
        placeholder="Votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <textarea
        className="border p-2 mb-2 block w-full"
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={ajouterAvis}
      >
        Envoyer
      </button>

      <h2 className="text-xl font-semibold mt-6">Avis récents</h2>
      <ul>
        {avisList.map((avis, index) => (
          <li key={index} className="mt-2 border-b pb-2">
            <p className="font-semibold">{avis.nom}</p>
            <p>{avis.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvisPage;
