"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react"; // Import arrow icon

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({ href, children }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative">
      {/* Outer border animation (only shows after click) */}
      {clicked && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 -m-2 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient opacity-50"
        />
      )}

      {/* Actual Button inside Link */}
      <Link href={href}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setClicked(true)}
          className="relative z-10 flex items-center gap-2 px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient transition-all duration-500 ease-in-out"
        >
          {children}
          <ArrowRight className="w-5 h-5" /> {/* Arrow icon */}
        </motion.button>
      </Link>
    </div>
  );
};

export default GradientButton;
