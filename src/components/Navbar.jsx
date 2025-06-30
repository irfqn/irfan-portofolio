// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-black px-4 py-4 border-b-2 border-zinc-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold">Irfan Al Rasyid</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 font-medium">
          <button>Experiences</button>
          <button>Project</button>
          <button>Contact</button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* Simple hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // close icon
                    : "M4 6h16M4 12h16M4 18h16" // hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-4 font-medium">
          <button>Experiences</button>
          <button>Project</button>
          <button>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
