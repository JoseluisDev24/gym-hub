"use client";

import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const links = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Pricings", href: "#pricing" },
  { name: "Success Stories", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-700/50 h-16">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <AddCircleOutlineIcon style={{ color: "red", fontSize: "1.5rem" }} />
          <span className="text-white text-xl md:text-2xl font-bold">
            Gym Hub
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition-colors duration-300">
            Join Now
          </button>
        </nav>

        <div className="lg:hidden">
          <button
            aria-label="Open menu"
            onClick={() => toggleMenu()}
            className="text-white hover:text-red-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute left-0 right-0 top-16 bg-black/98 backdrop-blur-md border-b border-gray-700/40 transition-all duration-200 overflow-hidden ${
          open ? "min-h-[550px]" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <div className="px-4 py-3 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-white py-2 font-medium border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={closeMenu}
            className="mt-10 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold"
          >
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
}
