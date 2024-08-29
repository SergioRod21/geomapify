"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Search from "@/components/Search";
import IpInformation from "@/components/IpInformation";
import dynamic from "next/dynamic";
import { useEffect } from "react";
//import Map from "@/components/Map";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const [ip, setIp] = React.useState("");

  return (
    <div className="bg-[--secondary] w-full h-full">
      <Header />
      <div className="flex flex-col items-center">
        <Search setIp={setIp} />
        <Map ip={ip} />
        <IpInformation ipValue={ip} />
      </div>
    </div>
  );
}
