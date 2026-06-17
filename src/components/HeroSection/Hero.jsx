import React, { useState } from "react";
import RotatingHeading from "./RotatingHeading.jsx";
import HeroStats from "./HeroStats.jsx";
import VehicleShowroom from "./VehicleShowroom.jsx";

const CAR_DATA = [
  {
    id: "lambo-aventador",
    name: "Aventador SVJ",
    brand: "Lamborghini",
    image: "lamborghini.png",
    installmentsFrom: "PKR 24,999",
    diagnostics: "100% Certified",
  },
  {
    id: "Bently-continental-gt",
    name: "Continental GT",
    brand: "Bentley",
    image: "Bently.png",
    installmentsFrom: "PKR 19,500",
    diagnostics: "99.8% Verified",
  },
  {
    id: "ferrari-f8",
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    image: "ferrai1.png",
    installmentsFrom: "PKR 28,000",
    diagnostics: "100% Certified",
  },
];

const Hero = () => {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const currentCar = CAR_DATA[activeCarIndex];

  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white flex flex-col justify-center">
      {/* Ambient backgrounds */}
      <div className="absolute -top-[8%] left-[8%] w-[560px] h-[560px] bg-[#F59E0B]/[0.06] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[8%] right-[4%] w-[480px] h-[480px] bg-[#DC2626]/[0.07] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* ── LEFT COLUMN ── */}
          <div className="relative z-10">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full mb-5">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#DC2626]" />
              </span>
              <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-white/70">
                Pakistan's Premium Automotive Authority
              </span>
            </div>

            {/*: Rotating Text Header */}
            <RotatingHeading />

            {/* Description Paragraph */}
            <p className="mt-4 text-[14px] text-slate-400 leading-[1.7] max-w-[460px] font-normal">
              Acquire elite luxury vehicles through certified transparency.
              Explore flexible rental plans, verified diagnostics, and seamless{" "}
              <span className="text-[#F59E0B] font-semibold">
                0% installment financing
              </span>{" "}
              tailored to you.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-7">
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#DC2626] text-white font-bold text-[13px] border-none cursor-pointer tracking-[0.01em] transition-all duration-200 hover:bg-[#b91c1c] hover:-translate-y-0.5">
                Browse Inventory
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <button className="px-6 py-2.5 rounded-lg border border-white/15 bg-white/[0.02] text-white font-bold text-[13px] tracking-[0.01em] cursor-pointer transition-all duration-200 hover:bg-white/[0.07] hover:border-white/35 hover:-translate-y-0.5">
                Book Consultation
              </button>
            </div>

            {/* Operational Statistics */}
            <HeroStats />
          </div>

          {/* ── RIGHT COLUMN ── */}
          {/*  Swiper Slide Showroom Engine */}
          <VehicleShowroom
            carData={CAR_DATA}
            currentCar={currentCar}
            setActiveCarIndex={setActiveCarIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
