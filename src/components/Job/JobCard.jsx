import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaBriefcase } from 'react-icons/fa';

const JobCard = ({ job }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
          <p className="text-primary-600 font-medium">{job.company}</p>
        </div>
        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
          {job.type}
        </span>
      </div>

      <div className="flex gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaBriefcase />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaClock />
          <span>{job.posted}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Apply Now
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;