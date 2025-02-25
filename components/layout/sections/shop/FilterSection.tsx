"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DesktopFilterBar from "./DesktopFilterBar";

export default function FilterSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* DESKTOP FILTER (Always Visible) */}
      <div className="hidden md:block">
        <DesktopFilterBar />
      </div>

      {/* MOBILE FILTER BUTTON */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <Button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2">
          {isOpen ? "Close Filters" : "Show Filters"}
        </Button>
      </div>

      {/* MOBILE FILTER PANEL (Sliding Up) */}
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg border-t rounded-t-lg"
        >
          <DesktopFilterBar />
        </motion.div>
      )}
    </div>
  );
}
