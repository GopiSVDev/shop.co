import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import Image from "next/image";

const MainContent = () => {
  return (
    <div>
      {/* Top Section: Brand + Links */}
      <div className="flex flex-col lg:flex-row items-start justify-evenly gap-8 text-[hsla(0,0%,0%,0.6)] font-normal font-satoshi">
        {/* Brand / About */}
        <div className="max-w-sm flex flex-col gap-5">
          <h3 className="text-[clamp(1.8125rem,1.7232142857142858rem+0.4464285714285714vw,2.125rem)] font-bold font-integralCf text-black">
            SHOP.CO
          </h3>
          <p className="text-sm leading-relaxed">
            We offer clothes that suit your style and which you’re proud to
            wear, from women to men.
          </p>

          <div className="w-[150px] h-[30px] flex justify-between">
            <Twitter />
            <Facebook />
            <Instagram />
            <Github />
          </div>
        </div>

        {/* Link Columns */}
        <div className="flex flex-wrap text-start justify-evenly md:flex-nowrap gap-8">
          {/* Company */}
          <div>
            <h4 className="text-black text-sm md:text-lg font-medium uppercase mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm md:text-[16px]">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-black text-sm md:text-lg font-medium uppercase mb-3">
              Help
            </h4>
            <ul className="space-y-2 text-sm md:text-[16px]">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="text-black text-sm md:text-lg font-medium uppercase mb-3">
              FAQ
            </h4>
            <ul className="space-y-2 text-sm md:text-[16px]">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-black text-sm md:text-lg font-medium uppercase mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-sm md:text-[16px]">
              <li>
                <a href="#">Free Ebooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright + Payment Icons */}
      <div className="mt-8 pt-4 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 font-satoshi">
          Shop.co © 2000-2025, All Rights Reserved
        </p>
        <div className="flex justify-between items-center h-fit">
          {/* Replace these placeholders with your actual payment icons */}

          <Image
            src="/svg/visa.png"
            alt="Visa"
            width={47}
            height={30}
            style={{ width: "auto", height: "50px" }}
          />
          <Image
            src="/svg/mastercard.png"
            alt="Mastercard"
            width={47}
            height={30}
            style={{ width: "auto", height: "50px" }}
          />
          <Image
            src="/svg/paypal.png"
            alt="PayPal"
            width={47}
            height={30}
            style={{ width: "auto", height: "50px" }}
          />
          <Image
            src="/svg/applepay.png"
            alt="ApplePay"
            width={47}
            height={30}
            style={{ width: "auto", height: "50px" }}
          />
          <Image
            src="/svg/gpay.png"
            alt="GPay"
            width={47}
            height={30}
            style={{ width: "auto", height: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
