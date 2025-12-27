import { ArrowUp } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-[#0E1F25] text-white overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-[120%] h-[120%] border border-white rotate-12 top-10 left-[-10%]" />
        <div className="absolute w-[120%] h-[120%] border border-white rotate-[-8deg] top-20 left-[-15%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-2xl font-bold">
             City Rides Melbourne
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Call us anytime — 24×7 customer support.
            <br />
            Safe • Fast • Affordable • Professional Driver
          </p>

          <p className="text-lg font-semibold text-yellow-400">
             +61 468 322 708
          </p>

          <div className="flex gap-4 text-xl">
            <a href="https://wa.me/61468322708" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-6 inline-flex items-center gap-2 border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>City Rides</li>
            <li>Airport Transfers</li>
            <li>Corporate Travel</li>
            <li>Event Transport</li>
            <li>Hourly Hire</li>
          </ul>
        </div>

        {/* Service Area */}
        <div>
          <h4 className="font-semibold mb-4">Service Area</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Melbourne CBD</li>
            <li>Melbourne Airport</li>
            <li>St Kilda</li>
            <li>Southbank</li>
            <li>Docklands</li>
            <li>Richmond</li>
          </ul>
        </div>
          <MdDirectionsCar className="hidden lg:flex absolute top-17 right-0 w-24 h-24" />
        
      </div>

      {/* Bottom Bar */}
      <div className="bg-yellow-400 text-black text-center py-3 text-sm font-medium">
        © 2026 City Rides Melbourne. All Rights Reserved.
      </div>
    </footer>
  );
}
