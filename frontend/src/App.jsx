import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReviewsSection from "./components/ReviewsSection";
import BookingSection from "./components/BestInCity";

export default function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <BookingSection/>
      {/* <Cars /> */}
      <ReviewsSection/>
    </div>
  );
}
