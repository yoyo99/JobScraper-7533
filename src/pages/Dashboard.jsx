import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';
import ApplicationStats from '../components/Dashboard/ApplicationStats';
import ApplicationTimeline from '../components/Dashboard/ApplicationTimeline';
import UpcomingInterviews from '../components/Dashboard/UpcomingInterviews';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <motion.h1 
        className="text-2xl font-bold text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Dashboard
      </motion.h1>

      <ApplicationStats />

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
          <ApplicationTimeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
          <UpcomingInterviews />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;