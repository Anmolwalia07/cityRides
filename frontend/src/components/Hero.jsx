import myImage from "../image/hero.png";
import car from "../image/car.png";

export default function Hero() {
  return (
    <div  className="relative bg-black text-white max-h-[350px] md:max-h-[450px] lg:max-h-[480px] w-full">

      <img
        src={myImage}
        loading="lazy"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">

        <h3 className="text-yellow-400 font-extrabold uppercase mt-7 mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
  Book Cab Now
</h3>

<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
+61 468 322 708
</h1>

<p className="mt-2 text-gray-300 text-base md:text-lg">
  Call us anytime — 24×7 customer support
</p>

<p className="text-gray-400 text-sm md:text-base mt-1">
  Safe • Fast • Affordable • Professional Driver
</p>

<div className="flex gap-4 mt-4">
  <a
    href="tel:+61 468 322 708"
    className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-yellow-300 transition"
  >
    Call Now
  </a>

  <a
    href="https://wa.me/+61 468 322 708"
    className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-green-400 transition"
  >
    WhatsApp
  </a>
</div>


        <img
          src={car}
          loading="lazy"
          className="
            mt-15
            w-[400px]  md:w-[450px] lg:w-[600px]
          "
          alt="car"
        />

      </div>

    </div>
  );
}