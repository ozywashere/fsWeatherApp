'use client';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useGlobalContext } from '@/app/context/globalContext';

const FlyToActiveCity = ({ activeCityCords }: { activeCityCords: { lat: number; lon: number } }) => {
  const map = useMap();
  useEffect(() => {
    if (activeCityCords) {
      const zoomLev = 13;
      const flyToOptions = {
        duration: 1.5,
      };

      map.flyTo([activeCityCords.lat, activeCityCords.lon], zoomLev, flyToOptions);
    }
  }, [activeCityCords, map]);

  return null;
};

const Mapbox = () => {
  const { forecast } = useGlobalContext(); // Your coordinates

  const activeCityCords = forecast?.coord;

  if (!forecast || !forecast.coord || !activeCityCords) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="flex-1 basis-[50%] w-full border rounded-lg">
      <MapContainer
        center={[activeCityCords.lat, activeCityCords.lon]}
        zoom={13}
        scrollWheelZoom={true}
        className="rounded-lg m-4 w-full h-full"
        style={{ height: 'calc(100% - 2rem)', width: 'calc(100% - 2rem)' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <FlyToActiveCity activeCityCords={activeCityCords} />
      </MapContainer>
    </div>
  );
};

export default Mapbox;
