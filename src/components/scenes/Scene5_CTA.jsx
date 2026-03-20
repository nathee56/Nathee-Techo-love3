import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Scene5CTA = () => {
  const [clicked, setClicked] = useState(false);

  const handleCTA = () => {
    setClicked(true);
    
    // Confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFDAB9', '#FFFACD', '#AEC6CF']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFDAB9', '#FFFACD', '#AEC6CF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        // After confetti, open Instagram
        window.open('https://www.instagram.com/nathee_916', '_blank');
      }
    };
    frame();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-between h-full py-12 px-4 max-w-md w-full"
    >
      <div className="flex-grow flex flex-col items-center justify-center space-y-10 w-full">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 text-center leading-relaxed">
          พร้อมคุยเมื่อไหร่<br/>ทักหาเค้าได้เลยนะ<br/>เค้ารออยู่ครับ 😊
        </h2>

        <motion.button
          animate={{ 
            scale: clicked ? 1 : [1, 1.05, 1],
            boxShadow: clicked ? 'none' : ['0px 0px 0px rgba(255,255,255,0)', '0px 0px 20px rgba(255,255,255,0.8)', '0px 0px 0px rgba(255,255,255,0)']
          }}
          transition={{ repeat: clicked ? 0 : Infinity, duration: 1.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCTA}
          className="px-10 py-5 bg-white/80 hover:bg-white backdrop-blur-md rounded-full text-gray-800 font-bold shadow-lg transition-all border-2 border-white text-xl"
        >
          ทักหาเค้าเลยนะ 💬
        </motion.button>
      </div>

      <div className="text-sm font-medium text-gray-500/80 mt-8">
        ทำด้วยความรักเพื่อเตโช 🤍
      </div>
    </motion.div>
  );
};

export default Scene5CTA;
