"use client";

import React from "react";
import { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = React.useState("8.8.8.8");

  function onClick() {
    console.log("Button clicked");
  }

  return (
    <div className="w-3/4 flex justify-center relative mt-6 mb-4">
      <input
        type="text"
        placeholder="8.8.8.8"
        className="w-full rounded-xl p-2 pr-12"
      />
      <button
        onClick={onClick}
        className="bg-[--tertiary]  mr-[-1px] rounded-r-xl absolute right-0 top-1/2 transform -translate-y-1/2 text-white font-bold px-4 py-2"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
