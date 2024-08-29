import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GeoMapify",
  description: "A simple IP address tracker with a location map",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
