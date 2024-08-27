"use client";

import React, { useEffect, useState } from "react";
import { getIpInformation, getUserIp } from "../lib/api";

async function getIpData(ip) {
  try {
    const data = await getIpInformation(ip);
    console.log(data);
  } catch (error) {
    console.error(error);
    return null;
  }
}

function IpInformation() {
  const [waitingText, setWaitingText] = useState("Waiting for user input.");
  const [Ip, setIp] = useState("");

  useEffect(() => {
    setIp(getUserIp());
    getIpData(Ip);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWaitingText((prevText) => {
        return prevText.length < 25 ? prevText + "." : waitingText;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1 className="self-start text-white font-bold text-lg ml-4">
        {waitingText}
      </h1>
      <div className=""></div>
    </>
  );
}

export default IpInformation;
