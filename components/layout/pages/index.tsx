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
      <div id="brands">
        <Sponsors />
      </div>
      <div id="new-arrivals">
        <NewArrivals />
      </div>
      <div id="top-selling">
        <TopSelling />
      </div>
      <div id="browse-style">
        <BrowseByStyle />
      </div>
      <Testimonials />
    </>
  );
};

export default Index;
