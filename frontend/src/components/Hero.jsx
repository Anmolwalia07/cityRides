import myImage from "../image/hero.png";
import car from "../image/car.png";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <div  className="relative bg-black text-white max-h-[350px] md:max-h-[450px] lg:max-h-[500px] w-full">

      <img
        src={myImage}
        loading="lazy"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">

        <h3 className="text-yellow-400 font-extrabold uppercase mt-10 mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Book Cab Now
            </h3>

            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            +61 468 322 708
            </h1>
            

    <div className="flex gap-4 mt-8">
      <a
        href="tel:+61468322708"
        aria-label="Call now"
        className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200 border border-yellow-500 flex items-center gap-3"
      >
        <FaPhoneAlt className="w-5 h-5" aria-hidden="true" />
        <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/+61468322708"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="px-6 py-3 bg-green-500 text-black font-bold rounded-xl shadow-lg hover:bg-green-400 hover:scale-105 transition-all duration-200 border border-green-600 flex items-center gap-3"
      >
        <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
        <img
          src={car}
          loading="lazy"
          className="
            mt-15 md:mt-18 lg:mt-19
            w-[400px]  md:w-[550px] lg:w-[700px]
          "
          alt="car"
        />

      </div>

    </div>
  );
}