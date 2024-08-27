import Image from "next/image";
import Header from "@/components/Header";
import Search from "@/components/Search";
import IpInformation from "@/components/IpInformation";

export default function Home() {
  return (
    <div className="bg-[--secondary] w-full h-full">
      <Header />
      <div className="flex flex-col items-center">
        <Search />
        <IpInformation />
      </div>
    </div>
  );
}
