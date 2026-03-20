import React from 'react';
import { motion } from 'framer-motion';

const emojis = [
  { id: 1, icon: '😠', label: 'โกรธเค้าแน่ๆ เลย' },
  { id: 2, icon: '💭', label: 'โกรธเค้าเรื่องในฝันชัวร์!' },
  { id: 3, icon: '🥺', label: 'น้อยใจเรื่องอะไรน้า' },
  { id: 4, icon: '🤤', label: 'แค่หิวเฉยๆ แหละ!' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Scene2MoodMeter = ({ onNext }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-center w-full max-w-lg px-4"
    >
      <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 text-center drop-shadow-sm">
        เตโชรู้สึกยังไงอยู่... บอกเค้าได้นะ
      </motion.h2>
      
      <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
        {emojis.map((emoji) => (
          <motion.div
            key={emoji.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="glass-panel p-6 flex flex-col items-center justify-center cursor-pointer text-center space-y-3"
          >
            <span className="text-5xl md:text-6xl drop-shadow-sm">{emoji.icon}</span>
            <span className="text-sm md:text-base font-medium text-gray-700">{emoji.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Scene2MoodMeter;
