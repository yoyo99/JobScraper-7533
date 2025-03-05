import React from 'react';
import { motion } from 'framer-motion';
import JobCard from './JobCard';

const MOCK_JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Paris, France',
    salary: '€65,000 - €85,000',
    type: 'Full Time',
    description: 'We are looking for an experienced Frontend Developer to join our team...',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    posted: '2d ago'
  },
  {
    id: 2,
    title: 'Full Stack Engineer',
    company: 'StartupHub',
    location: 'Remote',
    salary: '€55,000 - €75,000',
    type: 'Contract',
    description: 'Join our dynamic team as a Full Stack Engineer...',
    skills: ['Node.js', 'React', 'MongoDB'],
    posted: '5d ago'
  }
];

const JobList = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 space-y-4"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Found {MOCK_JOBS.length} jobs</h2>
        <select className="p-2 border rounded-lg bg-white">
          <option>Most Recent</option>
          <option>Highest Paid</option>
          <option>Most Relevant</option>
        </select>
      </div>

      <div className="space-y-4">
        {MOCK_JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </motion.div>
  );
};

export default JobList;