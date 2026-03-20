import React from 'react';
import { motion } from 'framer-motion';

const Scene1Greeting = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center text-center space-y-8 max-w-md"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-8xl drop-shadow-md"
      >
        🥺
      </motion.div>
      
      <h1 className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed px-4">
        ก๊อกๆ... วันนี้คนเก่งของเค้าดูซึมๆ ไป<br/>เหนื่อยไหมครับ... เค้าเป็นห่วงนะ 🤍
      </h1>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-8 px-8 py-4 bg-white/50 hover:bg-white/70 backdrop-blur-md rounded-full text-gray-700 font-medium shadow-sm transition-colors border border-white/60"
      >
        เค้ามีอะไรจะบอก / Tap to continue
      </motion.button>
    </motion.div>
  );
};

export default Scene1Greeting;
