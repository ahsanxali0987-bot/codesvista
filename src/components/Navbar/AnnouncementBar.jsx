import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="bg-[#0F172A] py-2 text-center text-[11px] tracking-[0.18em] uppercase text-white/70 border-b border-white/[0.06] relative z-50">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-center items-center gap-3 flex-wrap">
        <span>Free delivery nationwide</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]/60" />
        <strong className="text-[#F59E0B] font-medium tracking-[0.15em]">
          Certified Pre-Owned
        </strong>
        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]/60" />
        <span className="text-white/90">
          <strong className="text-[#10B981] font-semibold">
            0% Installments
          </strong>{" "}
          available
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
