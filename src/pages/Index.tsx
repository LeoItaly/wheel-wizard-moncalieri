import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import GallerySection from "../components/home/GallerySection";
import SymptomsSection from "../components/home/SymptomsSection";
import LocationSection from "../components/home/LocationSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <GallerySection />
      <SymptomsSection />
      <LocationSection />
    </Layout>
  );
};

export default Index;
