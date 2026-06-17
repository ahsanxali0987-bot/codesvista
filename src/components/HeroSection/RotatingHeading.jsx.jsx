import React, { useState, useEffect } from "react";

const rotatingPhrases = [
  { line1: "Drive", highlight: "Excellence", line2: "Without Limits." },
  { line1: "Own", highlight: "Luxury", line2: "On Your Terms." },
  { line1: "Pakistan's", highlight: "Finest", line2: "Automotive Authority." },
];

const RotatingHeading = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState("visible");

  useEffect(() => {
    const timers = [];

    const cycle = () => {
      setPhase("visible");
      timers.push(setTimeout(() => setPhase("hiding"), 3000));
      timers.push(
        setTimeout(() => {
          setPhase("hidden");
          setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
        }, 3500),
      );
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
    transition-all duration-500 m-0
    text-[50px] leading-[0.93] font-black tracking-tight text-white
    ${phase === "hiding" ? "opacity-0 -translate-y-4 ease-in" : ""}
    ${phase === "hidden" ? "opacity-0 translate-y-3" : ""}
    ${phase === "showing" ? "opacity-0 translate-y-3 ease-out" : ""}
    ${phase === "visible" ? "opacity-100 translate-y-0 ease-out" : ""}
  `;

  return (
    <div className="py-8">
      <h1 className={headingClasses}>
        {line1}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F59E0B] to-[#DC2626]">
          {highlight}
        </span>
        <br />
        {line2}
      </h1>
    </div>
  );
};

export default RotatingHeading;
