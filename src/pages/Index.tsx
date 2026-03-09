import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import BreedsSection from "@/components/BreedsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";
import TeEstamosEsperandoSection from "@/components/TeEstamosEsperandoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StorySection />
      <BreedsSection />
      <ExperienceSection />
      <TeEstamosEsperandoSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
