import { FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import { MdDirectionsCar } from 'react-icons/md';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frequent Traveler",
      rating: 5,
      review: "CityRides made my daily commute stress-free! The drivers are always professional and the cars are spotless. Highly recommended!",
      avatar: null,
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Executive",
      rating: 4,
      review: "Reliable service every time. The app is intuitive and booking takes seconds. Perfect for my business meetings.",
      avatar: null,
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "College Student",
      rating: 5,
      review: "Affordable and safe rides. As a student, I appreciate the student discount. Late-night rides are always available!",
      avatar: null,
      date: "3 days ago"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Tourist",
      rating: 5,
      review: "Visited the city for vacation and CityRides was amazing. Drivers were knowledgeable about local attractions.",
      avatar: null,
      date: "2 weeks ago"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Working Mom",
      rating: 4,
      review: "Perfect for school runs and grocery trips. The child seat option is a lifesaver. Always on time!",
      avatar: null,
      date: "5 days ago"
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Senior Citizen",
      rating: 5,
      review: "The drivers are so courteous and helpful. They assist with groceries and always ensure a smooth ride. Thank you!",
      avatar: null,
      date: "1 month ago"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`${
              index < rating 
                ? "text-yellow-400 fill-yellow-400" 
                : "text-gray-300 fill-gray-300"
            } text-lg`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 px-4 sm:px-6 mt-10 lg:px-20 bg-gray-50" id="reviews">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MdDirectionsCar className="text-yellow-500 text-5xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What Our <span className="text-yellow-500">Customers</span> Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied riders who trust CityRides for their daily commute
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaStar className="text-yellow-500 fill-yellow-500" />
              <span className="text-2xl md:text-3xl font-bold text-black">4.9</span>
            </div>
            <div className="text-gray-600 text-sm md:text-base">Average Rating</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500">10K+</div>
            <div className="text-gray-600 text-sm md:text-base">Happy Riders</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500">98%</div>
            <div className="text-gray-600 text-sm md:text-base">On-time Arrival</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500">24/7</div>
            <div className="text-gray-600 text-sm md:text-base">Service Available</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-4 text-yellow-400">
                <FaQuoteLeft className="w-8 h-8" />
              </div>
              
              {/* Review Text */}
              <p className="text-gray-700 mb-6 italic flex-grow">
                "{review.review}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                {renderStars(review.rating)}
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              
              {/* User Info */}
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center text-white">
                  <FaUserCircle className="w-10 h-10" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-black">{review.name}</h4>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-20">
            <MdDirectionsCar className="text-black w-24 h-24" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 relative z-10">
            Ready for Your First Ride?
          </h3>
          <p className="text-black mb-6 max-w-2xl mx-auto relative z-10">
            Experience the CityRides difference. Book your first ride today and get 20% off!
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-900 transition relative z-10">
            Book Now !
          </button>
        </div>
      </div>
    </section>
  );
}