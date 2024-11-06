// halaman untuk bagian homepage
import { useState } from "react";
import { CardServices } from "../components/card";
import { DetailExp } from "../components/detail";
import { Hero } from "../components/div";
import Marquee from "../components/Marquee";
import PageScroll from "../components/PageScroll";
import { Special } from "../components/spesial";

export const HomePage = () => {
  const [detail, setDetail] = useState("mongodb");
  // menggunakan lifting state untuk menggunakan detail card yang dibutuhkan
  const click1 = () => {
    setDetail("mongodb");
  };
  const click2 = () => {
    setDetail("express");
  };
  const click3 = () => {
    setDetail("reactjs");
  };
  const click4 = () => {
    setDetail("nodejs");
  };
  return (
    <>
      <div className="max-w-[105rem] mx-auto">
        {/* Hero Section */}
        <div className="flex min-h-screen justify-center max-w-7xl mx-auto pt-20 pb-8">
          <div className="grid place-items-center w-full rounded-2xl max-h-xl">
            <Hero />
          </div>
        </div>

        {/* Dekorasi lingkaran vignette */}
        <div className="absolute -top-36 left-1/3 w-80 h-80 bg-purple-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -top-36 z-10 left-[58rem] w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -top-36 z-10 left-[47rem] w-80 h-80 bg-sky-600 rounded-full blur-3xl opacity-50"></div>

        {/* Halaman Scroll */}
        <div className="mt-10 max-w-5xl mx-auto mb-72">
          <PageScroll />
        </div>

        <div className="relative mt-0 max-w-4xl mx-auto p-10 bg-purpleCustom/50 backdrop-blur-xl rounded-lg border border-white/20 shadow-lg shadow-slate-900">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-white/20 to-transparent rounded-lg"></div>

          <div className="relative z-10 text-center text-white">
            <h1 className="text-2xl font-bold mb-5">Our Abilities</h1>
            <Marquee />
          </div>
        </div>

        {/* Halaman Layanan */}
        <div className="max-w-5xl mx-auto mt-20">
          <h1 className="text-3xl font-bold mb-8 text-center text-purple-500">
            Our Services
          </h1>
          {/* Kartu Layanan */}
          <div className="flex justify-center space-x-5">
            <CardServices />
            <CardServices />
            <CardServices />
          </div>
        </div>

        {/* halaman spesialisasi */}
        <div className="max-w-7xl mx-auto mt-72">
          <h1 className="text-3xl font-bold mb-8 text-center text-purple-500">
            Our Core Competencies
          </h1>
          <div className="mt-8 flex justify-between space-x-28">
            <div className="bg-purple-600 flex-1 py-3 px-7 rounded-xl">
              <div className="flex-1">
                <div onClick={click1}>
                  <Special />
                </div>
                <div onClick={click2}>
                  <Special />
                </div>
                <div onClick={click3}>
                  <Special />
                </div>
                <div onClick={click4}>
                  <Special />
                </div>
              </div>
            </div>
            <div className="bg-purpleCustom max-w-sm flex items-center px-5 rounded-xl shadow-2xl shadow-slate-900">
              {detail === "mongodb" ? (
                <DetailExp heading="mongodb" />
              ) : detail === "express" ? (
                <DetailExp heading="express" />
              ) : detail === "reactjs" ? (
                <DetailExp heading="reactjs" />
              ) : detail === "nodejs" ? (
                <DetailExp heading="Node JS" />
              ) : (
                "hi"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
