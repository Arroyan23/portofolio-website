// halaman untuk komponen spesialisasi

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Special = () => {
  // membuat handle yang me return valuenya

  return (
    <>
      <div className="bg-gradient-to-br from-purpleLight to-white/30 flex-1 py-3 px-4 rounded-xl max-w-xl hover:outline my-3 cursor-pointer">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon
              icon="fa-brands fa-react"
              className="bg-purple-950 p-3 rounded-xl shadow-xl shadow-black text-2xl"
            />
            <p>Mongo DB</p>
          </div>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </div>
      </div>
    </>
  );
};
