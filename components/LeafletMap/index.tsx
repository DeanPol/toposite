import React, { useEffect } from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import { LatLngTuple } from 'leaflet'; // Import LatLngTuple type from leaflet
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  useEffect(() => {
    const mapElement = document.querySelector(
      '.leaflet-container',
    ) as HTMLElement;

    const handleDragStart = (e: MouseEvent | TouchEvent) => {
      e.stopPropagation(); // Prevent the event from reaching the parent (carousel)
    };

    if (mapElement) {
      // Add event listener for mouse down or touch start events on the map container
      mapElement.addEventListener(
        'mousedown',
        handleDragStart as EventListener,
      );
      mapElement.addEventListener(
        'touchstart',
        handleDragStart as EventListener,
      );
    }

    return () => {
      if (mapElement) {
        // Clean up the event listeners when the component is unmounted
        mapElement.removeEventListener(
          'mousedown',
          handleDragStart as EventListener,
        );
        mapElement.removeEventListener(
          'touchstart',
          handleDragStart as EventListener,
        );
      }
    };
  }, []);

  // Correct bounds format as LatLngBoundsLiteral
  const bounds: [LatLngTuple, LatLngTuple] = [
    [51.48, -0.12], // SW coordinates (latitude, longitude)
    [51.53, -0.05], // NE coordinates (latitude, longitude)
  ];

  return (
    <MapContainer
      center={[51.505, -0.09]} // Center coordinates
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '500px', width: '100%' }}
    >
      {/* Replace TileLayer with ImageOverlay */}
      <ImageOverlay
        url='/0.png' // Path to your PNG image
        bounds={bounds} // Set the bounds for the image
        opacity={1} // Adjust opacity if necessary
      />
    </MapContainer>
  );
};

export default LeafletMap;
