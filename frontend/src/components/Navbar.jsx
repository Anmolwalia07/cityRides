import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex  justify-between items-center px-4 sm:px-6 lg:px-10 py-4 bg-black text-white">
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl font-bold ">City<span  className='text-yellow-400'>Rides</span></h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 lg:gap-10 text-lg list-none items-center">
        <li className="hover:text-yellow-400 transition cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 transition cursor-pointer">About</li>
        <li className="hover:text-yellow-400 transition cursor-pointer">Contact</li>
        <button className="bg-yellow-400 text-black px-4 py-2 lg:px-5 lg:py-2 rounded-xl font-semibold hover:bg-yellow-500 transition ml-2">
          Book Now
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-yellow-400 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black md:hidden z-50 shadow-lg">
          <div className="flex flex-col items-center py-6 space-y-6 px-4">
            <a href="#" className="text-xl hover:text-yellow-400 transition py-2 w-full text-center">
              Home
            </a>
            <a href="#" className="text-xl hover:text-yellow-400 transition py-2 w-full text-center">
              About
            </a>
            <a href="#" className="text-xl hover:text-yellow-400 transition py-2 w-full text-center">
              Contact
            </a>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition w-full max-w-xs mt-2">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}