import { motion } from "framer-motion";
import { useState, useEffect, ReactNode, useMemo } from "react";

const SparklingEffect = ({ children }: { children: ReactNode }) => {
  const colors = useMemo(() => ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"], []);
  const [stars, setStars] = useState<{ id: number; left: string; top: string; color: string; size: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: { id: number; left: string; top: string; color: string; size: number }[] = [];
      const sizes = [24, 20, 16, 12, 8]; // Varying sizes from max to min
      
      while (newStars.length < 5) {
        const left = `${Math.random() * 80 + 10}%`;
        const top = `${Math.random() * 80 + 10}%`;
        const size = sizes[newStars.length];
        
        if (!newStars.some(star => Math.abs(parseFloat(star.left) - parseFloat(left)) < 10 && Math.abs(parseFloat(star.top) - parseFloat(top)) < 10)) {
          newStars.push({
            id: newStars.length,
            left,
            top,
            color: colors[Math.floor(Math.random() * colors.length)],
            size,
          });
        }
      }
      setStars(newStars);
    };
    generateStars();
    const interval = setInterval(generateStars, 1000);
    return () => clearInterval(interval);
  }, [colors]);

  return (
    <div className="relative inline-block text-4xl font-bold text-white">
      <motion.span
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.span>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            backgroundColor: star.color,
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
        />
      ))}
    </div>
  );
};

export default SparklingEffect;
