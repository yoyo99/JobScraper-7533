import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Free',
    price: '0',
    features: [
      'Basic job search',
      '5 applications per month',
      'Limited cover letter generation',
      'Basic application tracking'
    ]
  },
  {
    name: 'Pro',
    price: '9.99',
    features: [
      'Advanced job search',
      'Unlimited applications',
      'Unlimited cover letter generation',
      'Advanced application tracking',
      'Email integration',
      'Calendar integration'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '29.99',
    features: [
      'All Pro features',
      'Team collaboration',
      'API access',
      'Custom integrations',
      'Priority support',
      'Analytics dashboard'
    ]
  }
];

const PricingPlans = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl bg-white p-8 shadow-lg ${
                plan.popular ? 'border-2 border-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 transform rounded-full bg-primary-500 px-4 py-1 text-sm font-semibold text-white">
                  Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-bold tracking-tight">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </div>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <FaCheck className="h-5 w-5 flex-shrink-0 text-primary-500" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-semibold ${
                plan.popular
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Get started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;