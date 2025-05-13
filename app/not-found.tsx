import Link from "next/link";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex-col md:flex-row gap-5 justify-center items-center"
      >
        <div className="text-center">
          <h1 className="text-[clamp(2rem,1.8571428571428572rem+0.7142857142857143vw,2.5rem)] font-integralCf pt-5">
            THIS PAGE DOES NOT EXIST
          </h1>
        </div>

        <div className="flex justify-center m-5">
          <TriangleAlert size={100} />
        </div>

        <div className="text-center my-5">
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
