import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap } from '@capacitor/google-maps';
import { markers } from '../data/places';
import { useIonModal, IonText } from '@ionic/react';
import { MarkerInfoWindow } from './marker-window';

interface Marker {
  lat: number;
  lng: number;
  title: string;
}

const MapDashboard: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const key = "AIzaSyDq1cT8HNIR6EvFowaqXrcgYXJj_KkJVVY"; // Replace with your actual API key

  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDismiss = () => {
    setIsModalOpen(false);
    dismiss();
  }

  const [present, dismiss] = useIonModal(MarkerInfoWindow, {
    marker: selectedMarker,
    dismiss: handleDismiss
  });

  const modalOptions = {
    initialBreakpoint: 0.4,
    breakpoints: [0, 0.3, 1],

    onDidDismiss: handleDismiss
  };

  const mapConfig = {
    zoom: 15,
    center: {
      lat: markers[0].lat,
      lng: markers[0].lng
    }
  };

  const markerClick = (marker: any) => {
    const targetMarker = markers.filter(m => (m.lat === marker.latitude && m.lng === marker.longitude))[0];
    if (!isModalOpen) {
      setSelectedMarker(targetMarker);
      present(modalOptions);
      setIsModalOpen(true);
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

      const addMapMarker = async (marker: Marker) => {
        await newMap.addMarker({
            coordinate: {
                lat: marker.lat,
                lng: marker.lng
            },
            title: marker.title,
            iconUrl: 'src/assets/bike-icon-sample.svg'
        });
      };

      const addMapMarkers = () => markers.forEach(marker => addMapMarker(marker));

      newMap.setOnMarkerClickListener((marker: any) => markerClick(marker));
      addMapMarkers();
    };

    createMap().catch(err => console.error("Error creating map:", err));
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }}>
  </div>;
};

export default MapDashboard;
