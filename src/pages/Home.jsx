import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGride";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";
import homeBg from "../assets/image/Home1.jpg";
import TopSellingPlants from "../components/TopSellingPlants";
import OxygenPromoCard from "../components/OxygenPromoCard";

export default function Home() {
  return (
    <div className="w-[1728px] min-h-screen  bg-white">
      <div className="max-w-[1728px] w-full mx-auto">
        <div
          className="relative w-[1728px] h-[2592px] bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url("${homeBg}")`,
          }}
        >
          <div className="absolute top-0 left-0 w-full z-50">
            <Navbar />
          </div>
          <div className="min-h-screen">
            <HeroSection />
            <ProductGrid />
          </div>
        </div>
        <TopSellingPlants />
        <ReviewSection />
        <OxygenPromoCard />
        <Footer />
      </div>
    </div>
  );
}
