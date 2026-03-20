import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Scene3SafeZone = ({ onNext }) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center max-w-lg text-center px-4 space-y-10"
    >
      <div className="glass-panel p-8 w-full min-h-[150px] flex items-center justify-center">
        <div className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed max-w-[90%] whitespace-pre-line">
          <TypeAnimation
            sequence={[
              'เหนื่อยไหมครับคนเก่ง... พักก่อนนะ 🤍\n\nถึงในฝันเค้าจะนิสัยไม่ดีจนเตโชโกรธ...\nแต่ในโลกความจริง เค้าจะอยู่ตรงนี้พร้อมให้เตโชทำโทษและกอดแน่นๆ เสมอนะ',
              () => setShowButton(true)
            ]}
            wrapper="span"
            cursor={true}
            speed={50}
          />
        </div>
      </div>
      
      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-8 py-4 bg-white/60 hover:bg-white/80 backdrop-blur-md rounded-full text-gray-800 font-semibold shadow-md transition-all border border-white/60 text-lg flex items-center gap-2 mt-4"
        >
          <span>รับของขวัญปลอบใจ</span>
          <span className="text-2xl">🎁</span>
        </motion.button>
      )}
    </motion.div>
  );
};

export default Scene3SafeZone;
