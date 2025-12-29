import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "leaflet/dist/leaflet.css";

export const melbourneCoords = [
  [-37.46, 144.34],
  [-37.36, 144.90],
  [-37.41, 145.46],
  [-37.56, 145.71],
  [-37.81, 145.81],
  [-38.06, 145.56],
  [-38.34, 145.0],
  [-38.19, 144.49],
  [-37.99, 144.34],
  [-37.84, 144.29],
  [-37.69, 144.31],
];

export default function MelbourneCoverage() {
  const [userPos, setUserPos] = useState(null);
  const [serviceArea, setServiceArea] = useState({ north: null, south: null, east: null, west: null });

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => setUserPos([pos.coords.latitude, pos.coords.longitude]),
      (err) => console.error("Location error:", err)
    );

    const lats = melbourneCoords.map((c) => c[0]);
    const lngs = melbourneCoords.map((c) => c[1]);
    setServiceArea({
      north: Math.max(...lats).toFixed(2),
      south: Math.min(...lats).toFixed(2),
      east: Math.max(...lngs).toFixed(2),
      west: Math.min(...lngs).toFixed(2),
    });
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4 py-4 mb-5">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-900">
          Our Service Area
        </h2>
        <p className="mt-2 text-gray-600 mb-5">
          We currently operate across Melbourne and nearby suburbs
        </p>
      </div>

      {/* Horizontal layout */}
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        {/* Map */}
        <div className="md:w-1/2 h-[400px] md:h-[500px] overflow-hidden shadow-lg">
          <MapContainer
            center={userPos || [-37.81, 144.96]}
            zoom={9}
            className="w-full h-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Polygon
              positions={melbourneCoords}
              pathOptions={{ color: "blue", fillOpacity: 0.25 }}
            />

            {userPos && (
              <Marker position={userPos}>
                <Popup>You are here 📍</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>

        <motion.div
  className="md:w-1/2 flex flex-col px-2"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }} // <-- animate every time it comes into view
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
    Fast CAB SERVICE Within <br /> Melbourne Coverage
  </h1>

  <p className="text-gray-600 mt-6 leading-relaxed">
    Experience comfortable, safe, and reliable cab service across Melbourne
    and suburbs from latitudes {serviceArea.south}° to {serviceArea.north}° 
    and longitudes {serviceArea.west}° to {serviceArea.east}°. Whether you
    need airport transfers, city rides, or outstation trips, our professional
    drivers ensure a smooth and hassle-free journey. We focus on punctuality,
    clean vehicles, and transparent pricing — making us the preferred choice
    for commuters, travellers, and families across the city.
  </p>
</motion.div>

      </div>
    </div>
  );
}
