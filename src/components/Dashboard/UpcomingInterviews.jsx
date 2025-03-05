import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaBuilding, FaClock } from 'react-icons/fa';

const interviews = [
  {
    id: 1,
    company: 'TechCorp',
    position: 'Senior Frontend Developer',
    date: '2024-03-20',
    time: '14:00',
    type: 'Video Call'
  },
  {
    id: 2,
    company: 'StartupHub',
    position: 'Full Stack Engineer',
    date: '2024-03-22',
    time: '10:30',
    type: 'On-site'
  }
];

const UpcomingInterviews = () => {
  return (
    <div className="space-y-4">
      {interviews.map((interview, index) => (
        <motion.div
          key={interview.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="border p-4 rounded-lg hover:border-primary-500 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{interview.position}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <FaBuilding />
                <span>{interview.company}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-primary-600">
              <FaVideo />
              <span className="text-sm">{interview.type}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
            <FaClock />
            <span>
              {new Date(interview.date).toLocaleDateString()} at {interview.time}
            </span>
          </div>
          
          <div className="mt-3 flex justify-end">
            <button className="text-sm text-primary-600 hover:text-primary-700">
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UpcomingInterviews;