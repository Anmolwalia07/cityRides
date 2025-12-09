import { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaArrowRight, FaCar, FaStar, FaCheckCircle } from 'react-icons/fa';
import { RiSteering2Fill } from 'react-icons/ri';
import myImage from "../image/hero.png";
import car from "../image/car.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+917002511111';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917002511111', '_blank');
  };

  return (
    <div className="relative bg-black text-white w-full overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[500px]">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src={myImage}
          loading="lazy"
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-yellow-500/10"></div>
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px),
                             linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 hidden lg:block animate-bounce">
        <div className="bg-yellow-400 text-black p-3 rounded-full shadow-lg">
          <FaCar className="w-6 h-6" />
        </div>
      </div>

      <div className="absolute top-20 right-10 hidden lg:block animate-pulse">
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-yellow-400/30">
          <RiSteering2Fill className="w-6 h-6 text-yellow-400" />
        </div>
      </div>

        {/* Car Image Centered */}
            <div className="relative w-full flex justify-center items-center mt-50 md:mt-50 lg:mt-60 z-20">
            <img
                src={car}
                loading="lazy"
                className="w-[300px] md:w-[420px] lg:w-[520px]"
                alt="Premium car"
                style={{
                transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)`,
                }}
            />
            </div>

  

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </div>
  );
}