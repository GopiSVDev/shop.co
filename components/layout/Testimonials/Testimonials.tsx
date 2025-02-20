import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/data";

const Testimonials = () => {
  return (
    <div className="container my-[clamp(3.125rem,2.5892857142857144rem+2.6785714285714284vw,5rem)] px-4">
      <h2 className="font-bold font-integralCf text-[clamp(2rem,1.7142857142857144rem+1.4285714285714286vw,3rem)] text-center pb-8">
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="flex gap-5 justify-evenly flex-wrap">
        {testimonials.map((testimonial) => {
          return (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
