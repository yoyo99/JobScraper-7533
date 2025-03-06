import React from 'react';
import { motion } from 'framer-motion';
import PricingPlans from '../components/Subscription/PricingPlans';

const Subscription = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your Plan
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select the perfect plan for your job search needs. Upgrade anytime to unlock more features.
        </p>
      </motion.div>
      
      <PricingPlans />
    </div>
  );
};

export default Subscription;