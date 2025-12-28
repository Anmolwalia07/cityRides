import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Carimages() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-120px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14 }
    }
  };

  const titleVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="flex bg-[#F9FAFB] w-full justify-center p-6 mt-10 flex-col items-center"
      aria-labelledby="our-cars-title"
    >
      <motion.h1 id="our-cars-title" variants={titleVariant} className="text-4xl mb-8 font-semibold text-center">
        OUR CARS
      </motion.h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center w-auto max-w-6xl">

        {/* Toyota Camry */}
        <motion.article variants={cardVariant} className="w-full sm:w-[350px] bg-white shadow-md p-5 text-center rounded-lg">
          <motion.img
            src="/cars/toyota-camry.png"
            alt="Toyota Camry"
            className="w-full h-40 object-contain mb-4"
            whileHover={{ scale: 1.03 }}
            loading="lazy"
          />

          <h2 className="text-lg font-semibold">Toyota Camry</h2>
          <p className="text-sm text-orange-500 uppercase">Sedan</p>

          <div className="grid grid-cols-2 gap-2 text-sm my-3 text-gray-600">
            <div className="border rounded p-2">Automatic</div>
            <div className="border rounded p-2">Petrol</div>
            <div className="border rounded p-2">5 Seats</div>
            <div className="border rounded p-2">2WD</div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-xl font-bold">A$2.5/km</div>
            <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition">
              Rent a car →
            </button>
          </div>
        </motion.article>

        {/* Toyota Corolla */}
        <motion.article variants={cardVariant} className="w-full sm:w-[350px] bg-white shadow-md p-5 text-center rounded-lg">
          <motion.img
            src="/cars/toyota-corolla.png"
            alt="Toyota Corolla"
            className="w-full h-40 object-contain mb-4"
            whileHover={{ scale: 1.03 }}
            loading="lazy"
          />

          <h2 className="text-lg font-semibold">Toyota Corolla</h2>
          <p className="text-sm text-orange-500 uppercase">Sedan</p>

          <div className="grid grid-cols-2 gap-2 text-sm my-3 text-gray-600">
            <div className="border rounded p-2">Automatic</div>
            <div className="border rounded p-2">Petrol</div>
            <div className="border rounded p-2">5 Seats</div>
            <div className="border rounded p-2">2WD</div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-xl font-bold">A$2.0/km</div>
            <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition">
              Rent a car →
            </button>
          </div>
        </motion.article>

      </div>
    </motion.section>
  );
}
