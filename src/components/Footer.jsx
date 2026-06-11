import React from "react";
import { FooterData } from "../Data/FooterData";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] border-t border-white/[0.06]">

      {/* Main Footer Grid */}
      <div className="max-w-[1300px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

          {/* Logo + tagline column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 bg-[#DC2626] rounded-[8px] flex items-center justify-center flex-shrink-0">
                <img src="Logo.png" alt="" />
              </div>
              <div>
                <h2 className="text-white font-bold text-[15px] tracking-wide leading-none m-0">
                  CodesTechVista
                </h2>
                <p className="text-[9px] tracking-[0.18em] uppercase text-[#E5E7EB]/40 mt-0.5 leading-none">
                  Premium Vehicles
                </p>
              </div>
            </div>
            <p className="text-[12px] text-white/40 leading-relaxed mt-3 max-w-[200px]">
              Pakistan's trusted automotive authority for certified luxury vehicles.
            </p>
          </div>

          {/* Dynamic link columns */}
          {FooterData.map((item, index) => (
            <div key={index}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E5E7EB]/50 mb-3">
                {item.heading}
              </h3>
              <ul className="flex flex-col gap-2 list-none m-0 p-0">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="
                        text-[13px] text-white/40 no-underline
                        transition-colors duration-200
                        hover:text-[#DC2626]
                        flex items-center gap-1.5 group
                      "
                    >
                      <span className="
                        w-0 h-px bg-[#DC2626] transition-all duration-200
                        group-hover:w-3
                      " />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E5E7EB]/50 mb-3">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              <li className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-[12px] text-white/40 leading-relaxed m-0">
                  S-50, S-52 and S-138 Malikabad Shopping Plaza, Murree Road, Rawalpindi
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@codesvista.com" className="text-[12px] text-white/40 no-underline hover:text-[#DC2626] transition-colors duration-200">
                  info@codesvista.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#DC2626] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.51-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                <a href="tel:+923465987369" className="text-[12px] text-white/40 no-underline hover:text-[#DC2626] transition-colors duration-200">
                  +92 346 5987369
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/30 m-0">
            Copyright 2026 ©{" "}
            <span className="text-[#DC2626] font-medium">Sehgal Motorsports</span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Use"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[11px] text-white/30 no-underline hover:text-white/60 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;