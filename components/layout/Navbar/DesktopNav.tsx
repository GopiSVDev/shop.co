import Link from "next/link";
import { ChevronDown } from "lucide-react";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-6 font-satoshi font-normal">
      <ul className="flex items-center gap-6">
        <li>
          <Link className="flex items-center gap-1" href="/">
            Shop <ChevronDown size={16} />
          </Link>
        </li>
        <li>
          <Link href="/">On Sale</Link>
        </li>
        <li>
          <Link href="/">New Arrivals</Link>
        </li>
        <li>
          <Link href="/">Brands</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
