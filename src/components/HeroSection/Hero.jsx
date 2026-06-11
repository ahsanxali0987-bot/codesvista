import React, { useState, useEffect } from "react";

const rotatingPhrases = [
  { line1: "Drive", highlight: "Excellence", line2: "Without Limits." },
  { line1: "Own", highlight: "Luxury", line2: "On Your Terms." },
  { line1: "Pakistan's", highlight: "Finest", line2: "Automotive Authority." },
];

const Hero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const timers = [];

    const cycle = () => {
      setPhase("visible");
      timers.push(setTimeout(() => setPhase("hiding"), 3000));
      timers.push(setTimeout(() => {
        setPhase("hidden");
        setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
      }, 3500));
      timers.push(setTimeout(() => setPhase("showing"), 3600));
      timers.push(setTimeout(() => setPhase("visible"), 4100));
    };

    cycle();
    const interval = setInterval(cycle, 4500);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  const { line1, highlight, line2 } = rotatingPhrases[phraseIndex];

  const headingClasses = `
    transition-all duration-500
    ${phase === "hiding"  ? "opacity-0 -translate-y-4 ease-in"  : ""}
    ${phase === "hidden"  ? "opacity-0 translate-y-3"            : ""}
    ${phase === "showing" ? "opacity-0 translate-y-3 ease-out"  : ""}
    ${phase === "visible" ? "opacity-100 translate-y-0 ease-out" : ""}
  `;

  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-white flex flex-col justify-center">

      {/* Ambient blobs */}
      <div className="absolute -top-[8%] left-[8%] w-[560px] h-[560px] bg-[#F59E0B]/[0.06] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[8%] right-[4%] w-[480px] h-[480px] bg-[#DC2626]/[0.07] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── LEFT ── */}
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

            {/* Animated heading */}
            <div className="py-8">
              <h1
                className={`
                  text-[50px] leading-[0.93] font-black
                  tracking-tight text-white m-0
                  ${headingClasses}
                `}
              >
                {line1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F59E0B] to-[#DC2626]">
                  {highlight}
                </span>
                <br />
                {line2}
              </h1>
            </div>

            {/* Body */}
            <p className="mt-4 text-[14px] text-slate-400 leading-[1.7] max-w-[460px] font-normal">
              Acquire elite luxury vehicles through certified transparency. Explore
              flexible rental plans, verified diagnostics, and seamless{" "}
              <span className="text-[#F59E0B] font-semibold">0% installment financing</span>{" "}
              tailored to you.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-7">
              <button className="
                flex items-center gap-2 px-6 py-2.5 rounded-lg
                bg-[#DC2626] text-white font-bold text-[13px]
                border-none cursor-pointer tracking-[0.01em]
                transition-all duration-200
                hover:bg-[#b91c1c] hover:-translate-y-0.5
              ">
                Browse Inventory
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <button className="
                px-6 py-2.5 rounded-lg
                border border-white/15 bg-white/[0.02]
                text-white font-bold text-[13px] tracking-[0.01em]
                cursor-pointer transition-all duration-200
                hover:bg-white/[0.07] hover:border-white/35 hover:-translate-y-0.5
              ">
                Book Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-10 pt-6 border-t border-white/[0.07]">
              <div>
                <h3 className="text-[22px] font-extrabold tracking-tight text-white leading-none m-0">
                  10,000<span className="text-white/30 font-light text-base">+</span>
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
                  4.9<span className="text-white/30 text-sm font-normal">★</span>
                </h3>
                <p className="text-[9px] text-slate-500 uppercase tracking-[0.1em] mt-1">
                  Google Rating
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="relative flex items-center justify-end">

            {/* Floating card – top left */}
            <div className="
              absolute top-3 left-0 z-20
              backdrop-blur-xl bg-[#0F172A]/75
              border border-white/[0.07] rounded-xl px-3.5 py-2.5
            ">
              <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400/80 font-medium m-0">
                Installments From
              </p>
              <h3 className="text-base font-extrabold text-[#F59E0B] mt-0.5 mb-0 tracking-tight">
                PKR 24,999
                <span className="text-white/40 text-[10px] font-normal">/mo</span>
              </h3>
            </div>

            {/* Floating card – bottom right */}
            <div className="
              absolute bottom-3 right-0 z-20
              backdrop-blur-xl bg-[#0F172A]/75
              border border-white/[0.07] rounded-xl px-3.5 py-2.5
            ">
              <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400/80 font-medium m-0">
                Diagnostics Guarantee
              </p>
              <h3 className="text-base font-extrabold text-white mt-0.5 mb-0 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] flex-shrink-0" />
                100% Certified
              </h3>
            </div>

            {/* Radial glow behind car */}
            <div className="absolute w-[65%] aspect-square rounded-full pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,rgba(220,38,38,0.08)_60%,transparent_100%)] blur-[40px]" />

            {/* Car image */}
            <img
              src="lamborghini.png"
              alt="Elite Motors Luxury Vehicle"
              className="
                relative z-10 w-full max-w-[620px] object-contain
                drop-shadow-[0_40px_60px_rgba(0,0,0,0.75)]
                transition-transform duration-700
                hover:scale-[1.025]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;