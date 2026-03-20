import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full z-0 opacity-70">
      {particles.map((_, i) => {
        const size = Math.random() * 5 + 3;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;
