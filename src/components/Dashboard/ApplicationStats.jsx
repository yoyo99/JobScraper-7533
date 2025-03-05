import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';

const stats = [
  {
    id: 1,
    title: 'Total Applications',
    value: 24,
    icon: FaBriefcase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: 2,
    title: 'In Progress',
    value: 12,
    icon: FaClock,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 3,
    title: 'Successful',
    value: 8,
    icon: FaCheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: 4,
    title: 'Rejected',
    value: 4,
    icon: FaTimesCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
];

const ApplicationStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
            <div className={`${stat.bgColor} p-3 rounded-full`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ApplicationStats;