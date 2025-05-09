"use client";

import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container px-4 py-5 md:px-10 lg:px-16">
      <Breadcrumbs />

      <div className="flex gap-5 justify-center lg:justify-start">
        {children}
      </div>
    </div>
  );
}
