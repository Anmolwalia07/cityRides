import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReviewsSection from "./components/ReviewsSection";
import BookingSection from "./components/BestInCity";
import Carimages from "./components/Carimages";
import Footer from "./components/Footer";
import CoverageMap from "./components/CoverageMap";

export default function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <BookingSection/>
      <Carimages/>
      <CoverageMap/>
      <ReviewsSection/>
      <Footer/>
    </div>
  );
}
