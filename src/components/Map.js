"use client";

import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { getUserIp, getIpInformation } from "@/lib/api";

function Map({ ip }) {
  const [data, setData] = useState(null);
  const [center, setCenter] = useState([51.505, -0.09]);
  const mapRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const userIp = await getUserIp();
      const data = await getIpInformation(ip !== "" ? ip : userIp);
      setData(data);
      setCenter([data.latitude, data.longitude]);
    }
    fetchData();
  }, [ip]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center);
    }
  }, [center]);

  if (!data) return null;

  return (
    <div className="w-11/12 h-96 mb-16 lg:h-5/6 lg:py-12">
      <p className="bg-[--primary] px-4 py-2 rounded-t-lg pl-2 font-semibold text-white">
        {data.city}, {data.state_prov}, {data.country_name} {data.country_emoji}
      </p>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
