// src/components/MyMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Location() {
  return (
    <div className="bg-gray-100 dark:bg-white rounded-xl shadow mt-2 md:w-160 flex flex-col p-2 items-center justify-center">
    <h2 className="text-lg text-black font-semibold mb-2">Location </h2>
    <div className="w-full h-[500px] rounded-xl shadow-lg overflow-hidden relative z-0">
      <MapContainer center={[28.6139, 77.2090]} zoom={13} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[28.6139, 77.2090]}>
          <Popup>
            Delhi
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </div>
  );
}
