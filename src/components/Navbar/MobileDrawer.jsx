import React from "react";
import { NavLink } from "react-router-dom";

const MobileDrawer = ({ isMobileMenuOpen, navLinks, setIsMobileMenuOpen }) => {
  return (
    <div
      className={`
        absolute top-[77px] left-0 w-full bg-[#0F172A] border-b border-white/[0.08] shadow-2xl lg:hidden
        transition-all duration-300 ease-in-out origin-top z-40
        ${isMobileMenuOpen ? "opacity-100 scale-y-100 max-h-[450px]" : "opacity-0 scale-y-95 max-h-0 overflow-hidden pointer-events-none"}
      `}
    >
      <div className="px-6 py-4 flex flex-col gap-1">
        {navLinks.map((link) => {
          const routePath =
            link === "Home"
              ? "/"
              : `/${link.toLowerCase().replace(/\s+/g, "-")}`;

          return (
            <NavLink
              key={link}
              to={routePath}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => `
                w-full text-left px-4 py-3 text-[14px] font-medium rounded-lg transition-colors block
                ${
                  isActive
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
            </NavLink>
          );
        })}

        <div className="h-px bg-white/[0.08] my-3" />

        <div className="grid grid-cols-2 gap-3 pb-2">
          <button className="w-full py-3 rounded-xl border border-white/20 text-white font-medium text-[13px] hover:bg-white/[0.05] transition-colors cursor-pointer">
            Sign In
          </button>
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] font-bold text-[13px] text-center shadow-lg shadow-[#F59E0B]/5 cursor-pointer">
            Browse Cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
