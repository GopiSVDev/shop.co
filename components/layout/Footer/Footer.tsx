import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-offWhite">
      <div className="container font-satoshi px-[clamp(1rem,-0.5rem+7.5vw,6.25rem)] -translate-y-[50%]">
        <div className="bg-black py-7 px-[clamp(1.5rem,0.7857142857142858rem+3.571428571428571vw,4rem)] flex flex-col md:flex-row gap-5 justify-around items-center rounded-[20px]">
          <p className="text-[32px] font-bold text-white font-integralCf">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="flex flex-col gap-4">
            {/* Email input with mail icon */}
            <div className="flex items-center gap-2 bg-white px-4 py-1 rounded-[64px] w-full h-[42px]">
              <Mail className="text-[hsla(0,0%,0%,0.4)]" />
              <Input
                className="bg-white font-satoshi"
                placeholder="Enter your email address.."
              />
            </div>
            <Button className="w-full bg-white text-black h-[42px] hover:bg-offWhite">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
