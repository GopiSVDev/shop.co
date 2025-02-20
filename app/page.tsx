import HomePage from "@/components/layout/Home/HomePage";
import Sponsors from "@/components/layout/Sponsors/Sponsors";
import NewArrivals from "@/components/layout/NewArrivals/NewArrivals";
import TopSelling from "@/components/layout/TopSelling/TopSelling";
import BrowseByStyle from "@/components/layout/BrowseByStyle/BrowseByStyle";
import Testimonials from "@/components/layout/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <HomePage />
      <Sponsors />
      <NewArrivals />
      <div className="container w-full h-[1px] border border-[hsla(0,0%,0%,0.1)]"></div>
      <TopSelling />
      <BrowseByStyle />
      <Testimonials />
    </>
  );
}
