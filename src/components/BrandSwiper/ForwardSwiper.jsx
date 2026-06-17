import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ForwardSwiper({ logos } = { logos: null }) {
  const defaultLogos = [
    "astonmartinlogo.png",
    "audilogo.png",
    "bentlylogo.png",
    "bmwlogo.png",
    "ferrarilogo.png",
    "landroverlogo.png",
    "lexuslogo.png",
    "maybachlogo.png",
    "merclogo.png",
    "porschelogo.png",
    "rollsroycelogo.png",
    "genisislogo.png",
  ];

  const items = logos && logos.length > 0 ? logos : defaultLogos;

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0e1a] py-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0a0e1a] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0a0e1a] to-transparent sm:w-20" />

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={6000}
        className="brand-swiper"
      >
        {items.map((src, i) => (
          <SwiperSlide key={i} style={{ width: 180 }}>
            <div className="group flex h-24 w-40 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-600 to-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_12px_32px_rgba(245,158,11,0.35)] sm:h-28 sm:w-44">
              <img
                src={src}
                alt={`brand-${i}`}
                className="max-h-10 max-w-[72%] object-contain transition-transform duration-300 ease-out group-hover:scale-110 sm:max-h-12"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}