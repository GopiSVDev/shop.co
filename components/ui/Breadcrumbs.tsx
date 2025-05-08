"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-[14px] md:text-[16px] text-gray-500 py-4">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

          // Decode & Format Segment Name
          const formattedSegment = decodeURIComponent(segment)
            .replace(/^\d+-/, "") // Remove ID prefixes like "83-"
            .replace(/-/g, " ") // Convert dashes to spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words

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
