# GeoMapify

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://geomapify.vercel.app/)

GeoMapify is a simple web page that primarily receives the IP of the page visitor or a specified IP and then displays IP information such as the ISP and an approximate location of the IP using a map component.

## Screenshots

<div style="display: flex; justify-content: center;">
  <img src="https://i.postimg.cc/Hnjd2fNL/geomapify-ofkkvgnus-sergiorod21s-projects-vercel-app-1.png" alt="Screenshot 2" width="35%"/>
  <img src="https://i.postimg.cc/FHHgxGrB/geomapify-ofkkvgnus-sergiorod21s-projects-vercel-app-2.png" alt="Screenshot 1" width="55%"/>
</div>

## Built with

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## APIs Used

- **ipify API**: A Simple API to get the public IP of the page visitor  
  **Provider**: [ipify](https://www.ipify.org/)
- **IP Geolocation API**: Used to retrieve detailed information about the IP address, including the ISP, country, city, and other relevant details.  
  **Provider**: [ipgeolocation](https://ipgeolocation.io/)
- **Map API**: Utilized to display the approximate location of the IP address on an interactive map.  
  **Provider**: [Leaflet](https://leafletjs.com/) integrated with [OpenStreetMap](https://www.openstreetmap.org/)
