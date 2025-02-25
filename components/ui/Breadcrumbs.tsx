"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-[16px] text-gray-500 py-7">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const formattedSegment =
            segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">›</span>
              <Link href={href} className="hover:underline text-black">
                {formattedSegment}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
