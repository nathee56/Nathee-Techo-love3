import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      className={`glass-panel p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
