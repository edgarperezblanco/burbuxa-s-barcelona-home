import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CatDesignerSection from "@/components/CatDesignerSection";
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
      <CatDesignerSection />
      <ExperienceSection />
      <TeEstamosEsperandoSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
