import AboutUs from "@/components/AboutUs";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProperties />
      <Services />
      <AboutUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default page;
