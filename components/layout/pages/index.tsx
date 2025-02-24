import Hero from "@/components/layout/sections/home/hero/Hero";
import Sponsors from "@/components/layout/sections/home/Sponsors";
import NewArrivals from "@/components/layout/sections/home/NewArrivals";
import TopSelling from "@/components/layout/sections/home/TopSelling";
import BrowseByStyle from "@/components/layout/sections/home/BrowseByStyle";
import Testimonials from "@/components/layout/sections/home/Testimonials";

const Index = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <Testimonials />
    </>
  );
};

export default Index;
