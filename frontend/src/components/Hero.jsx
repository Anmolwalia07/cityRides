import myImage from "../image/hero.png";
import car from "../image/car.png";

export default function Hero() {
  return (
    <div className="relative bg-black text-white max-h-[250px] md:max-h-[350px] lg:max-h-[480px] w-full">

      <img
        src={myImage}
        loading="lazy"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">

        {/* Heading */}
        <h3 className="text-yellow-400 font-extrabold uppercase mt-7 mb-2
                       text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Book Cab Now
        </h3>

        <h1 className="font-bold
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          +91 7002511111
        </h1>

        <img
          src={car}
          loading="lazy"
          className="
            mt-15 md:mt-50
            w-[400px]  md:w-[450px] lg:w-[600px]
          "
          alt="car"
        />

      </div>

    </div>
  );
}