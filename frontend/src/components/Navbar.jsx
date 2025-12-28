'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 bg-black text-white">
      <h1 className="text-xl sm:text-2xl font-bold">
        City<span className="text-yellow-400">Rides</span>
      </h1>

      <ul className="hidden md:flex gap-10 lg:gap-12 text-lg items-center">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">About</li>
        <li className="hover:text-yellow-400 cursor-pointer">Cars</li>
        <li>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-500 transition">
            Book Now
          </button>
        </li>
      </ul>

      <button
        className="md:hidden text-yellow-400"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black md:hidden z-50">
          <div className="flex flex-col items-center py-6 space-y-6">
            <a className="text-xl hover:text-yellow-400">Home</a>
            <a className="text-xl hover:text-yellow-400">About</a>
            <a className="text-xl hover:text-yellow-400">Cars</a>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
