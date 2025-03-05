import React from 'react';
import { motion } from 'framer-motion';

const applications = [
  {
    id: 1,
    company: 'TechCorp',
    position: 'Senior Frontend Developer',
    date: '2024-03-15',
    status: 'Applied',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    company: 'StartupHub',
    position: 'Full Stack Engineer',
    date: '2024-03-14',
    status: 'Interview Scheduled',
    color: 'bg-green-500'
  },
  {
    id: 3,
    company: 'InnovateInc',
    position: 'React Developer',
    date: '2024-03-12',
    status: 'Rejected',
    color: 'bg-red-500'
  }
];

const ApplicationTimeline = () => {
  return (
    <div className="space-y-4">
      {applications.map((application, index) => (
        <motion.div
          key={application.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4"
        >
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full ${application.color}`} />
            {index !== applications.length - 1 && (
              <div className="w-0.5 h-full bg-gray-200" />
            )}
          </div>
          <div className="flex-1 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{application.position}</h3>
                <p className="text-sm text-gray-600">{application.company}</p>
              </div>
              <span className={`text-sm ${
                application.status === 'Rejected' ? 'text-red-600' :
                application.status === 'Interview Scheduled' ? 'text-green-600' :
                'text-blue-600'
              }`}>
                {application.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(application.date).toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ApplicationTimeline;