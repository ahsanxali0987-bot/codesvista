import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const navLinks = [
  "Home",
  "Inventory",
  "Rentals",
  "Installments",
  "Contact",
  "About Us",
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full font-sans bg-[#F8FAFC] sticky top-0 z-50">
      {/* ANNOUNCEMENT BAR */}
      <div className="bg-[#0F172A] py-2 text-center text-[11px] tracking-[0.18em] uppercase text-white/70 border-b border-white/[0.06]">
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

      {/* MAIN NAVIGATION */}
      <nav className="bg-[#0F172A] relative sticky top-0 z-50 shadow-xl backdrop-blur-md bg-opacity-95">
        <div className="max-w-[1200px] mx-auto h-[76px] flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3.5 cursor-pointer group">
            <div className="w-11 h-11 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F59E0B]/10 group-hover:scale-105 transition-transform duration-300">
              {/* Premium Car Logo */}
              <img src="Logo.png" alt="" className="" />
            </div>
            <div>
              <h1
                className="text-[21px] font-bold text-white tracking-[0.05em] uppercase leading-none m-0"
                style={{ fontFamily: "'Rajdhani', 'Inter', sans-serif" }}
              >
                Elite<span className="text-[#F59E0B]">Motors</span>
              </h1>
              <p className="text-[9px] tracking-[0.25em] uppercase text-white/40 mt-1 font-medium">
                Premium Vehicles
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isHighlighted = link === "Installments";
              return (
                <button
                  key={link}
                  onClick={() => setActiveLink(link)}
                  className={`
                    relative px-4 py-2.5 text-[13px] font-semibold tracking-[0.04em] rounded-lg
                    transition-all duration-200 cursor-pointer group
                    ${
                      activeLink === link
                        ? "text-[#F59E0B]"
                        : isHighlighted
                          ? "text-[#10B981] hover:bg-[#10B981]/[0.08]"
                          : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                    }
                  `}
                >
                  {link}
                  {/* Premium Pill/Underline Indicator */}
                  <span
                    className={`
                      absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full
                      transition-all duration-300 ease-out
                      ${
                        activeLink === link
                          ? "w-4 bg-[#F59E0B]"
                          : "w-0 group-hover:w-2 bg-white/40"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className="
              text-[13px] font-semibold text-white/80 tracking-[0.03em]
              transition-all duration-200 hover:text-[#F59E0B] cursor-pointer
            "
            >
              Sign In
            </button>

            {/* Premium Hairline Divider */}
            <div className="w-px h-5 bg-white/[0.15]" />
            <button
              className="
              flex items-center gap-2 px-5 py-2.5 rounded-xl
              bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] text-[13px] font-bold tracking-[0.02em]
              shadow-lg shadow-[#F59E0B]/10 hover:shadow-[#F59E0B]/20
              transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer
            "
            >
              <CiSearch size={20} />
              Browse Cars
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white hover:bg-white/[0.1] transition-colors"
          >
            {isMobileMenuOpen ? (
              <p className="">
                <RxCross1 />
              </p>
            ) : (
              <p className="">
                <RxHamburgerMenu />
              </p>
            )}
          </button>
        </div>

        {/* Ambient Amber Metallic Border Under Navbar */}
        <div
          className="h-[1px] w-full opacity-40"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #F59E0B 35%, #10B981 65%, transparent 100%)",
          }}
        />

        {/* 3. MOBILE DROPDOWN DRAWER */}
        <div
          className={`
          absolute top-[77px] left-0 w-full bg-[#0F172A] border-b border-white/[0.08] shadow-2xl lg:hidden
          transition-all duration-300 ease-in-out origin-top z-40
          ${isMobileMenuOpen ? "opacity-100 scale-y-100 max-h-[400px]" : "opacity-0 scale-y-95 max-h-0 overflow-hidden pointer-events-none"}
        `}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveLink(link);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-3 text-[14px] font-medium rounded-lg transition-colors
                  ${
                    activeLink === link
                      ? "bg-white/[0.06] text-[#F59E0B] font-semibold"
                      : "text-white/70 hover:bg-white/[0.03] hover:text-white"
                  }
                `}
              >
                {link}
                {link === "Installments" && (
                  <span className="ml-2 text-[10px] bg-[#10B981]/20 text-[#10B981] px-1.5 py-0.5 rounded font-bold">
                    0%
                  </span>
                )}
              </button>
            ))}

            <div className="h-px bg-white/[0.08] my-3" />

            <div className="grid grid-cols-2 gap-3 pb-2">
              <button className="w-full py-3 rounded-xl border border-white/20 text-white font-medium text-[13px] hover:bg-white/[0.05] transition-colors">
                Sign In
              </button>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] font-bold text-[13px] text-center shadow-lg shadow-[#F59E0B]/5">
                Browse Cars
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
