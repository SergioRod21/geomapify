# GeoMapify

GeoMapify is a simple web page that primarily receives the IP of the page visitor or a specified IP and then displays IP information such as the ISP and an approximate location of the IP using a map component.

## Built with

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## APIs Used

- **ipify API**: A Simple API to get the public IP of the page visitor
  **Provider**: https://www.ipify.org/
- **IP Geolocation API**: Used to retrieve detailed information about the IP address, including the ISP, country, city, and other relevant details.  
  **Provider**: [ipgeolocation](https://ipgeolocation.io/)
- **Map API**: Utilized to display the approximate location of the IP address on an interactive map.  
  **Provider**: [Leaflet](https://leafletjs.com/) integrated with [OpenStreetMap](https://www.openstreetmap.org/)
