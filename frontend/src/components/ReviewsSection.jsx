import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaUserCircle, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MdDirectionsCar } from 'react-icons/md';
import { ArrowUp } from 'lucide-react';

export function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-120px' });

  const reviews = [
    { id: 1, name: 'Sarah Johnson', role: 'Frequent Traveler', rating: 5, review: 'CityRides made my daily commute stress-free! The drivers are always professional and the cars are spotless. Highly recommended!', date: '2 days ago' },
    { id: 2, name: 'Michael Chen', role: 'Business Executive', rating: 4, review: 'Reliable service every time. The app is intuitive and booking takes seconds. Perfect for my business meetings.', date: '1 week ago' },
    { id: 3, name: 'Emily Rodriguez', role: 'College Student', rating: 5, review: 'Affordable and safe rides. As a student, I appreciate the student discount. Late-night rides are always available!', date: '3 days ago' },
    { id: 4, name: 'David Wilson', role: 'Tourist', rating: 5, review: 'Visited the city for vacation and CityRides was amazing. Drivers were knowledgeable about local attractions.', date: '2 weeks ago' },
    { id: 5, name: 'Lisa Thompson', role: 'Working Mom', rating: 4, review: 'Perfect for school runs and grocery trips. The child seat option is a lifesaver. Always on time!', date: '5 days ago' },
    { id: 6, name: 'Robert Kim', role: 'Senior Citizen', rating: 5, review: 'The drivers are so courteous and helpful. They assist with groceries and always ensure a smooth ride. Thank you!', date: '1 month ago' }
  ];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const headerVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const statVariant = {
    hidden: { opacity: 0, scale: 0.97, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const renderStars = (rating) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} text-lg`} />
      ))}
    </div>
  );

  return (
    <motion.section ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={container} className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50" id="reviews">
      <motion.div variants={headerVariant} className="max-w-7xl mx-auto text-center mb-8">
        <div className="flex justify-center mb-4">
          <MdDirectionsCar className="text-yellow-500 text-5xl" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Our <span className="text-yellow-500">Customers</span> Say</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Join thousands of satisfied riders who trust CityRides for their daily commute</p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12" variants={container}>
          <motion.div variants={statVariant} className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaStar className="text-yellow-500" />
              <span className="text-2xl md:text-3xl font-bold text-black">4.9</span>
            </div>
            <div className="text-gray-600 text-sm md:text-base">Average Rating</div>
          </motion.div>

          <motion.div variants={statVariant} className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500">10K+</div>
            <div className="text-gray-600 text-sm md:text-base">Happy Riders</div>
          </motion.div>

          <motion.div variants={statVariant} className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500">98%</div>
            <div className="text-gray-600 text-sm md:text-base">On-time Arrival</div>
          </motion.div>

          <motion.div variants={statVariant} className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500">24/7</div>
            <div className="text-gray-600 text-sm md:text-base">Service Available</div>
          </motion.div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={container}>
          {reviews.map((review) => (
            <motion.article key={review.id} variants={cardVariant} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="mb-4 text-yellow-400">
                <FaQuoteLeft className="w-8 h-8" />
              </div>

              <p className="text-gray-700 mb-6 italic flex-grow">"{review.review}"</p>

              <div className="flex items-center justify-between mb-4">
                {renderStars(review.rating)}
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center text-white">
                  <FaUserCircle className="w-10 h-10" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-black">{review.name}</h4>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={headerVariant} className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-20">
            <MdDirectionsCar className="text-black w-24 h-24" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 relative z-10">Ready for Your First Ride?</h3>
          <p className="text-black mb-6 max-w-2xl mx-auto relative z-10">Experience the CityRides difference. Book your first ride today and get 20% off!</p>
          <motion.button whileHover={{ scale: 1.03 }} className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-900 transition relative z-10">Book Now !</motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function FooterAnimated() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-120px' });

  const footerVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.footer ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={footerVariant} className="relative bg-[#0E1F25] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-[120%] h-[120%] border border-white rotate-12 top-10 left-[-10%]" />
        <div className="absolute w-[120%] h-[120%] border border-white rotate-[-8deg] top-20 left-[-15%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div className="space-y-5" whileHover={{ scale: 1.01 }}>
          <div className="flex items-center gap-3 text-2xl font-bold">City Rides Melbourne</div>

          <p className="text-gray-300 text-sm leading-relaxed">Call us anytime — 24×7 customer support.<br/>Safe • Fast • Affordable • Professional Driver</p>

          <p className="text-lg font-semibold text-yellow-400">+61 468 322 708</p>

          <div className="flex gap-4 text-xl">
            <motion.a href="https://wa.me/61468322708" whileHover={{ y: -3 }} className="hover:text-green-400"><FaWhatsapp /></motion.a>
            <motion.a href="#" whileHover={{ y: -3 }} className="hover:text-pink-400"><FaInstagram /></motion.a>
            <motion.a href="#" whileHover={{ y: -3 }} className="hover:text-blue-400"><FaFacebookF /></motion.a>
          </div>

          <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} whileTap={{ scale: 0.97 }} className="mt-6 inline-flex items-center gap-2 border border-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition">
            <ArrowUp size={16} />
            Back to top
          </motion.button>
        </motion.div>

        <motion.div className="" whileHover={{ scale: 1.01 }}>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>City Rides</li>
            <li>Airport Transfers</li>
            <li>Corporate Travel</li>
            <li>Event Transport</li>
            <li>Hourly Hire</li>
          </ul>
        </motion.div>

        <motion.div className="" whileHover={{ scale: 1.01 }}>
          <h4 className="font-semibold mb-4">Service Area</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Melbourne CBD</li>
            <li>Melbourne Airport</li>
            <li>St Kilda</li>
            <li>Southbank</li>
            <li>Docklands</li>
            <li>Richmond</li>
          </ul>
        </motion.div>

        <MdDirectionsCar className="hidden lg:flex absolute top-17 right-0 w-24 h-24 opacity-10" />
      </div>

      <div className="bg-yellow-400 text-black text-center py-3 text-sm font-medium">© 2026 City Rides Melbourne. All Rights Reserved.</div>
    </motion.footer>
  );
}

export default ReviewsSection;
