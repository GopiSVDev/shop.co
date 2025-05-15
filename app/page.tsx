import BrowseByStyle from "@/components/layout/sections/home/BrowseByStyle";
import Hero from "@/components/layout/sections/home/hero/Hero";
import NewArrivals from "@/components/layout/sections/home/NewArrivals";
import Sponsors from "@/components/layout/sections/home/Sponsors";
import Testimonials from "@/components/layout/sections/home/Testimonials";
import TopSelling from "@/components/layout/sections/home/TopSelling";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}
