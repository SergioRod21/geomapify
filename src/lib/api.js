const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getIpInformation(ip) {
  const response = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}`
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();
  return data;
}

export async function getUserIp() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    console.log(data.ip);
  } catch (error) {
    console.error(error);
    return null;
  }
}
