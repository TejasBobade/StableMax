// src/components/PhotoLibrary.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Photo {
  src: string;
  alt: string;
}

// Remove the empty interface.  It's not needed.
// interface PhotoLibraryProps extends Record<string, unknown> {}  <- REMOVE THIS

const PhotoLibrary: React.FC = () => { // No need for PhotoLibraryProps
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const photos: Photo[] = [
    { src: '/assets/img1.webp', alt: 'Photo 1' },
    { src: '/assets/img2.webp', alt: 'Photo 2' },
    { src: '/assets/img3.webp', alt: 'Photo 3' },
    { src: '/assets/img4.webp', alt: 'Photo 4' },
    { src: '/assets/img5.webp', alt: 'Photo 5' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const photoVariants = {
    hidden: { opacity: 0.8, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1.05,
      y: hoveredIndex === index ? -10 : 0,
      rotate: hoveredIndex === index ? 5 : 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.div
      className="grid grid-cols-5 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-md"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          variants={photoVariants}
          custom={index}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={300}
            height={200}
            className="object-cover w-full h-full"
            priority={index < 2}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PhotoLibrary;