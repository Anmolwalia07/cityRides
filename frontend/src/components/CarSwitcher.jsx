import { useState, useEffect } from "react";
import car2 from "../image/car2.png";
import car1 from "../image/car1.png";

export default function CarSwitcher() {
  const [showFirstCar, setShowFirstCar] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstCar((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <img
        src={showFirstCar ? car1 : car2}
        loading="lazy"
        className={`
          
          transition-all duration-500
          ${showFirstCar ? "w-[300px] md:w-[450px] lg:w-[580px] mt-10 lg:mt-6" : "w-[400px] md:w-[550px] lg:w-[700px] mt-15 md:mt-18 lg:mt-18"}
        `}
        alt="car"
      />
    </div>
  );
}
