import Achievements from "@/components/UI/HomePage/Achievements";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import Highlights from "@/components/UI/HomePage/Highlights";
import LatestPets from "@/components/UI/HomePage/LatestPets";
import Testimonials from "@/components/UI/HomePage/Testimonials";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <LatestPets></LatestPets>
      <Highlights></Highlights>
      <Achievements></Achievements>
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
