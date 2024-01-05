// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* im banned from google i cant get API KEY SERVICE GOOGLE IM BAN IP , IM TorUser  */}
      <GoogleMap mapContainerStyle={mapStyles} center={location} zoom={15}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
