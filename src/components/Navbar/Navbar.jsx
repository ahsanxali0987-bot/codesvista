import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import AnnouncementBar from "./AnnouncementBar";
import MobileDrawer from "./MobileDrawer";

const navLinks = [
  "Home",
  "Inventory",
  "Rentals",
  "Installments",
  "Contact",
  "About Us",
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full font-sans bg-[#F8FAFC] sticky top-0 z-50">
      {/* 1. ANNOUNCEMENT BAR */}
      <AnnouncementBar />

      {/* 2. MAIN NAVIGATION */}
      <nav className="bg-[#0F172A] px-4 lg:px-6 sticky top-0 z-50 shadow-xl backdrop-blur-md bg-opacity-95 border-b border-white/[0.02]">
        <div className="max-w-[1300px] mx-auto h-[76px] flex items-center justify-between">
          {/* Logo Brand Engine */}
          <Link
            to="/"
            className="flex items-center gap-3.5 cursor-pointer group no-underline"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F59E0B]/10 group-hover:scale-105 transition-transform duration-300">
              <img
                src="Logo.png"
                alt="Logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <h1
                className="text-[21px] font-bold text-white tracking-[0.05em] uppercase leading-none m-0"
                style={{ fontFamily: "'Rajdhani', 'Inter', sans-serif" }}
              >
                Elite<span className="text-[#F59E0B]">Motors</span>
              </h1>
              <p className="text-[9px] tracking-[0.25em] uppercase text-white/40 mt-1 font-medium m-0">
                Premium Vehicles
              </p>
            </div>
          </Link>

          {/* Desktop Link Layout Engine */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isInstallments = link === "Installments";
              const routePath =
                link === "Home"
                  ? "/"
                  : `/${link.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <NavLink
                  key={link}
                  to={routePath}
                  className={({ isActive }) => `
                    relative px-4 py-2.5 text-[13px] font-semibold tracking-[0.04em] rounded-lg
                    transition-all duration-200 cursor-pointer group no-underline block
                    ${
                      isActive
                        ? "text-[#F59E0B]"
                        : isInstallments
                          ? "text-[#10B981] hover:bg-[#10B981]/[0.08]"
                          : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {link}
                      {/* Interactive Bottom Glow Indicator */}
                      <span
                        className={`
                          absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full
                          transition-all duration-300 ease-out
                          ${
                            isActive
                              ? "w-4 bg-[#F59E0B]"
                              : "w-0 group-hover:w-2 bg-white/40"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Call To Actions Block */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[13px] font-semibold text-white/80 tracking-[0.03em] transition-all duration-200 hover:text-[#F59E0B] bg-transparent border-none cursor-pointer">
              Sign In
            </button>

            {/* Hairline Profile Divider */}
            <div className="w-px h-5 bg-white/[0.15]" />

            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] text-[13px] font-bold tracking-[0.02em] shadow-lg shadow-[#F59E0B]/10 hover:shadow-[#F59E0B]/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border-none">
              <CiSearch size={20} className="stroke-[0.5]" />
              Browse Cars
            </button>
          </div>

          {/* Mobile Display Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white hover:bg-white/[0.1] transition-colors cursor-pointer flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <RxCross1 size={18} />
            ) : (
              <RxHamburgerMenu size={18} />
            )}
          </button>
        </div>

        {/* Ambient Under-Navbar Linear Accent Divider */}
        <div
          className="h-[1px] w-full opacity-40 absolute bottom-0 left-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #F59E0B 35%, #10B981 65%, transparent 100%)",
          }}
        />

        {/* 3. MOBILE DROPDOWN COMPONENT */}
        <MobileDrawer
          isMobileMenuOpen={isMobileMenuOpen}
          navLinks={navLinks}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </nav>
    </div>
  );
};

export default Navbar;
