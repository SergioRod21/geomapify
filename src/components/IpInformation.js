"use client";

import React, { useEffect, useState } from "react";
import { getIpInformation, getUserIp } from "../lib/api";

async function getIpData(ip) {
  try {
    const data = await getIpInformation(ip);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function IpInformation() {
  const [ip, setIp] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userIp = await getUserIp();
      setIp(userIp);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (ip) {
        const data = await getIpData(ip);
        setData(data);
      }
    }
    fetchData();
  }, [ip]);

  console.log("data ", data);

  if (!data) return null;

  return (
    <>
      <div className="relative overflow-hidden rounded-xl w-10/12">
        <table className="table-fixed w-full text-left">
          <tbody className="bg-[#0A2647] text-[#ffffff]">
            <tr className="py-5">
              <td className="py-5  border-r text-center p-4">IP</td>
              <td className="py-5  text-center p-4">{data.ip}</td>
            </tr>
            <tr className="py-5">
              <td className="py-5  border-r text-center p-4">
                Proveedor de Internet
              </td>
              <td className="py-5  text-center p-4">{data.isp}</td>
            </tr>
            <tr className="py-5">
              <td className="py-5  border-r text-center p-4">Local Time</td>
              <td className="py-5  text-center p-4">
                {data.time_zone.current_time.slice(10, -12)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default IpInformation;
