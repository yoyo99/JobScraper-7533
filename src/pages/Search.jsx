import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter } from 'react-icons/fa';
import JobList from '../components/Job/JobList';

const Search = () => {
  const [filters, setFilters] = useState({
    keywords: '',
    location: '',
    jobType: 'all',
  });

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Keywords, job title, or company"
              className="w-full p-3 border rounded-lg"
              value={filters.keywords}
              onChange={(e) => setFilters({ ...filters, keywords: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Location"
              className="w-full p-3 border rounded-lg"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>
          <div className="md:w-48">
            <select
              className="w-full p-3 border rounded-lg bg-white"
              value={filters.jobType}
              onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
            >
              <option value="all">All Types</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="contract">Contract</option>
              <option value="remote">Remote</option>
            </select>
          </div>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2">
            <FaSearch />
            Search
          </button>
        </div>
      </motion.div>

      <div className="flex gap-6">
        <motion.aside 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block w-64 bg-white p-4 rounded-lg shadow-md h-fit"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaFilter className="text-primary-600" />
            <h3 className="font-semibold">Filters</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Experience Level</label>
              <div className="space-y-2">
                {['Entry Level', 'Mid Level', 'Senior', 'Lead'].map((level) => (
                  <label key={level} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-primary-600" />
                    <span>{level}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Salary Range</label>
              <input
                type="range"
                className="w-full"
                min="0"
                max="200000"
                step="10000"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$200k+</span>
              </div>
            </div>
          </div>
        </motion.aside>

        <JobList />
      </div>
    </div>
  );
};

export default Search;