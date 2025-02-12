import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap } from '@capacitor/google-maps';

const MapDashboard: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const key = "AIzaSyBJwKYcub1yNcDd2V8iu4ZfGvDi4eW_fpU";  // Ensure you use your actual API key

  const mapConfig = {
    zoom: 15,
    center: {
      lat: 14.5176, // Taguig City, NCR, Philippines
      lng: 121.0509
    }
  };

  useEffect(() => {
    const createMap = async () => {
      if (!mapRef.current) return;

      const newMap = await GoogleMap.create({
        id: "google-map",
        element: mapRef.current,
        apiKey: key,
        config: mapConfig,
      });
      console.log("Map created:", newMap);
    };

    createMap().catch(err => console.error("Error creating map:", err));
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default MapDashboard;
