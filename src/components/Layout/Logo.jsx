import React from 'react';
import { motion } from 'framer-motion';
import { FaCompass } from 'react-icons/fa';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <FaCompass className="h-8 w-8 text-primary-600" />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-primary-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-gray-900">CareerCompass</span>
        <span className="text-xs text-primary-600">Navigate Your Future</span>
      </div>
    </motion.div>
  );
};

export default Logo;