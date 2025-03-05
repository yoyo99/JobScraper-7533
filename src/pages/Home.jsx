import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaChartLine, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Simplify Your Job Search
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Automate your job hunting process with intelligent scraping and tracking
        </motion.p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaSearch className="h-8 w-8" />,
            title: "Smart Search",
            description: "Find relevant job postings across multiple platforms"
          },
          {
            icon: <FaChartLine className="h-8 w-8" />,
            title: "Track Progress",
            description: "Monitor your applications and follow-ups"
          },
          {
            icon: <FaEnvelope className="h-8 w-8" />,
            title: "Auto Responses",
            description: "Generate personalized cover letters"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-primary-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;