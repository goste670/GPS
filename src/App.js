// src/App.js
import React, { useState } from 'react';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';

const App = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [filter, setFilter] = useState('pedestrian');

  const handleSearch = (coordinates) => {
    setLocation(coordinates);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // Implémenter la logique pour mettre à jour la carte en fonction du nouveau filtre
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />
      <Map location={location} />
    </div>
  );
};

export default App;
