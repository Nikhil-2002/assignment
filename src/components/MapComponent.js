import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon-2x.png";
import { ClipLoader } from "react-spinners"; // Importing the loading spinner
import "../styles/MapComponent.css";

const MapComponent = ({ address }) => {
  const [loading, setLoading] = useState(true); // Loading state for the map
  const position = [51.505, -0.09]; // Example coordinates (Replace with dynamic)

  // Fix for Marker icon issue
  const icon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  // Simulate map data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="map-container">
      {loading ? (
        <div className="map-loading">
          <ClipLoader size={50} color="#007bff" loading={loading} />
        </div>
      ) : (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%" }} // Ensures the map container has a valid size
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default MapComponent;
