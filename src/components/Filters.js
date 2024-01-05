// src/components/Filters.js
import React from 'react';

const Filters = ({ onFilterChange }) => {
  const handleFilterChange = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div>
      <label>
        <input type="radio" name="filter" onChange={() => handleFilterChange('pedestrian')} />
        Piéton
      </label>
      {/* Ajouter d'autres options de filtre ici */}
    </div>
  );
};

export default Filters;
