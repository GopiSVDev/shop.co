import Hero from "@/components/layout/sections/Hero/Hero";
import Sponsors from "@/components/layout/sections/Sponsors";
import NewArrivals from "@/components/layout/sections/NewArrivals";
import TopSelling from "@/components/layout/sections/TopSelling";
import BrowseByStyle from "@/components/layout/sections/BrowseByStyle";
import Testimonials from "@/components/layout/sections/Testimonials";

export default function Home() {
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
}
