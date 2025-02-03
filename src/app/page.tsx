"use client";
import GradientButton from "@/components/GradientButton";
import PhotoLibrary from "@/components/PhotoLibrary";
import SparklingEffect from "@/components/SparklingEffect";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className="w-full h-dvh flex justify-center">
      <div className="mt-24 sm:mt-20 flex flex-col items-center">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.35, delay: 0 }}
          className="text-6xl sm:text-6xl font-bold"
        >
          <SparklingEffect>
            <p className="text-6xl font-bold">StableMax AI</p>
          </SparklingEffect>
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.35, delay: 0.35 }}
          className="text-center text-white/80 mt-3 w-[50%]"
        >
          Convert words to images with our free AI Image Generator Tool. Witness
          your wildest ideas burst into vivid reality - cheap cost, no limits,
          just pure creative magic at your fingertips!
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.35, delay: 0.7 }}
          className="mt-5"
        >
          <GradientButton href="/create">Start Creating</GradientButton>
        </motion.div>

        <div className="mt-24 w-[80%] mx-auto">
          <PhotoLibrary />
        </div>
      </div>
    </div>
  );
}
