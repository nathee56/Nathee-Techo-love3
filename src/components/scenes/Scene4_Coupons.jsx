import React from 'react';
import { motion } from 'framer-motion';

const coupons = [
  { id: 1, text: 'เลี้ยงของอร่อย 1 มื้อ (กินอะไรก็ได้!)', icon: '🍲' },
  { id: 2, text: 'กอดฟรีไม่จำกัดเวลา', icon: '🫂' },
  { id: 3, text: 'ห้ามตีเค้าตัวจริง 1 ที (ไปลงโทษคนในฝันแทนนะ!)', icon: '🛡️' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } }
};

const Scene4Coupons = ({ onNext }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-center justify-center w-full max-w-md px-4"
    >
      <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 text-center drop-shadow-sm">
        คูปองพิเศษสำหรับเตโชคนเดียว!
      </motion.h2>
      
      <div className="flex flex-col w-full space-y-4 mb-8">
        {coupons.map((coupon) => (
          <motion.div
            key={coupon.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-5 flex items-center space-x-4 border-dashed border-2 text-left bg-white/40"
          >
            <span className="text-4xl flex-shrink-0">{coupon.icon}</span>
            <span className="flex-1 text-lg font-medium text-gray-700 leading-snug">{coupon.text}</span>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-8 py-4 bg-white/70 hover:bg-white/90 backdrop-blur-md rounded-full text-gray-800 font-semibold shadow-md transition-all border border-white/60 text-lg"
      >
        เลือกใช้คูปอง
      </motion.button>
    </motion.div>
  );
};

export default Scene4Coupons;
