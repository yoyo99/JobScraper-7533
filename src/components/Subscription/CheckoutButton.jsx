import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';
import { createSubscription } from '../../services/subscription';
import { getCurrentUser } from '../../services/auth';

const CheckoutButton = ({ priceId, planName }) => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const user = await getCurrentUser();
      const session = await createSubscription(user.uid, priceId);
      window.location.href = session.url;
    } catch (error) {
      console.error('Error creating subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full rounded-lg px-4 py-2 text-sm font-semibold ${
        planName === 'Pro'
          ? 'bg-primary-600 text-white hover:bg-primary-700'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}
      onClick={handleSubscribe}
      disabled={loading}
    >
      {loading ? (
        <FaSpinner className="animate-spin h-5 w-5 mx-auto" />
      ) : (
        'Subscribe Now'
      )}
    </motion.button>
  );
};

export default CheckoutButton;