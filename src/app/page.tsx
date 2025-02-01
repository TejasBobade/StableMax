"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <motion.h1 initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        animate = {{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.35,
        }}
        className="text-4xl sm:text-6xl font-bold">
          StableMax
        </motion.h1>
        <motion.p 
        className="text-center text-white/50"
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        animate = {{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.35,
          delay: 0.35,
        }}
        >
          Generate stunning images from text using AI models for free
        </motion.p>
      </div>
    </div>
  );
}
