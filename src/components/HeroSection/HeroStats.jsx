import React from "react";

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-10 pt-6 border-t border-white/[0.07]">
      <div>
        <h3 className="text-[22px] font-extrabold tracking-tight text-white leading-none m-0">
          10,000
          <span className="text-white/30 font-light text-base">+</span>
        </h3>
        <p className="text-[9px] text-slate-500 uppercase tracking-[0.1em] mt-1">
          Verified Listings
        </p>
      </div>
      <div>
        <h3 className="text-[22px] font-extrabold tracking-tight text-[#DC2626] leading-none m-0">
          0%
        </h3>
        <p className="text-[9px] text-slate-500 uppercase tracking-[0.1em] mt-1">
          Markup Options
        </p>
      </div>
      <div>
        <h3 className="text-[22px] font-extrabold tracking-tight text-[#F59E0B] leading-none m-0">
          4.9
          <span className="text-white/30 text-sm font-normal">★</span>
        </h3>
        <p className="text-[9px] text-slate-500 uppercase tracking-[0.1em] mt-1">
          Google Rating
        </p>
      </div>
    </div>
  );
};

export default HeroStats;
