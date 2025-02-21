import Image from "next/image";

const MainContent = () => {
  return (
    <div>
      {/* Top Section: Brand + Links */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 text-[hsla(0,0%,0%,0.6)]">
        {/* Brand / About */}
        <div className="max-w-sm flex flex-col gap-5">
          <h3 className="text-[clamp(1.8125rem,1.7232142857142858rem+0.4464285714285714vw,2.125rem)] font-bold font-integralCf text-black">
            SHOP.CO
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            We offer clothes that suit your style and which you’re proud to
            wear, from women to men.
          </p>
          <Image
            src="/images/socials.png"
            alt="social media icons"
            width={150}
            height={30}
          />
        </div>

        {/* Link Columns */}
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Company */}
          <div>
            <h4 className="text-black text-sm md:text-lg font-medium uppercase mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
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
            <ul className="space-y-2 text-sm">
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
            <ul className="space-y-2 text-sm">
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
            <ul className="space-y-2 text-sm">
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
        <p className="text-sm text-gray-500">
          Shop.co © 2000-2021, All Rights Reserved
        </p>
        <div className="flex items-center space-x-4">
          {/* Replace these placeholders with your actual payment icons */}
          <img
            src="https://via.placeholder.com/50x20?text=Visa"
            alt="Visa"
            className="h-5 w-auto"
          />
          <img
            src="https://via.placeholder.com/50x20?text=Mastercard"
            alt="Mastercard"
            className="h-5 w-auto"
          />
          <img
            src="https://via.placeholder.com/50x20?text=PayPal"
            alt="PayPal"
            className="h-5 w-auto"
          />
          <img
            src="https://via.placeholder.com/50x20?text=GPay"
            alt="GPay"
            className="h-5 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
