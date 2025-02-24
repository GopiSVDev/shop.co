"use client";

import { useProductStore } from "@/store/useProductStore";
import { useEffect } from "react";

export default function FetchProducts() {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  });

  return null; //  component runs but doesn't render anything
}
