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

function IpInformation({ ipValue }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userIp = await getUserIp();
      const data = await getIpData(ipValue !== "" ? ipValue : userIp);
      setData(data);
    }
    fetchData();
  }, [ipValue]);

  if (!data) return null;

  return (
    <>
      <div className="relative overflow-hidden rounded-xl w-10/12">
        <table className="table-fixed w-full text-left">
          <tbody className="bg-[#0A2647] text-[#ffffff]">
            <tr className="py-5">
              <td className="py-5  border-r text-center p-4 font-medium">IP</td>
              <td className="py-5  text-center p-4 font-medium">{data.ip}</td>
            </tr>
            <tr className="py-5">
              <td className="py-5  border-r text-center p-4 font-medium">
                ISP
              </td>
              <td className="py-5  text-center p-4 font-medium">{data.isp}</td>
            </tr>
            <tr className="py-5">
              <td className="py-5  border-r text-center p-4 font-medium">
                Local Time
              </td>
              <td className="py-5  text-center p-4 font-medium">
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
