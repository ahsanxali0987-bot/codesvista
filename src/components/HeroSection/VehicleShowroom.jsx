import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const VehicleShowroom = ({ carData, currentCar, setActiveCarIndex }) => {
  return (
    <div className="relative flex items-center justify-end w-full min-h-[450px]">
      {/* Floating card – top left */}
      <div className="absolute top-3 left-0 z-20 backdrop-blur-xl bg-[#0F172A]/75 border border-white/[0.07] rounded-xl px-3.5 py-2.5 transition-all duration-300">
        <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400/80 font-medium m-0">
          Installments From
        </p>
        <h3 className="text-base font-extrabold text-[#F59E0B] mt-0.5 mb-0 tracking-tight">
          {currentCar.installmentsFrom}
          <span className="text-white/40 text-[10px] font-normal"> /mo</span>
        </h3>
      </div>

      {/* Floating card – bottom right */}
      <div className="absolute bottom-3 right-0 z-20 backdrop-blur-xl bg-[#0F172A]/75 border border-white/[0.07] rounded-xl px-3.5 py-2.5 transition-all duration-300">
        <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400/80 font-medium m-0">
          Diagnostics Guarantee
        </p>
        <h3 className="text-base font-extrabold text-white mt-0.5 mb-0 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0 animate-pulse" />
          {currentCar.diagnostics}
        </h3>
      </div>

      {/* Background Glow */}
      <div className="absolute w-[75%] aspect-square rounded-full pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1)_0%,rgba(220,38,38,0.06)_60%,transparent_100%)] blur-[40px] left-[15%]" />

      {/* Swiper Runner */}
      <div className="w-full z-10 overflow-visible">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          grabCursor={true}
          onSlideChange={(swiper) => setActiveCarIndex(swiper.realIndex)}
          className="w-full"
        >
          {carData.map((car) => (
            <SwiperSlide
              key={car.id}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-center mb-4 select-none pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#F59E0B]/80">
                  {car.brand}
                </span>
                <h2 className="text-xl font-extrabold text-white/90 tracking-wide mt-0.5">
                  {car.name}
                </h2>
              </div>

              <div className="w-full max-w-[620px] px-4 transform transition-transform duration-500 hover:scale-[1.02] drop-shadow-[0_35px_50px_rgba(0,0,0,0.7)]">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.name}`}
                  className="w-full h-auto object-contain max-h-[260px] select-none"
                  onError={(e) => {
                    e.target.src = "lamborghini.png";
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VehicleShowroom;
