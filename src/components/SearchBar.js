// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [destination, setDestination] = useState('');

  const handleSearch = async () => {
    try {
      // Utiliser une API de géocodage pour convertir l'adresse en coordonnées
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=YOUR_GOOGLE_MAPS_API_KEY`);
      const data = await response.json();

      if (data.results.length > 0) {
        const coordinates = data.results[0].geometry.location;
        onSearch(coordinates);
      } else {
        console.error('Aucune coordonnée trouvée pour cette destination.');
      }
    } catch (error) {
      console.error('Erreur lors de la recherche de coordonnées.', error);
    }
  };

  return (
    <div>
      <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchBar;
