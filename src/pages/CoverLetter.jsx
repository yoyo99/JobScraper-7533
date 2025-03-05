import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner, FaCopy, FaDownload } from 'react-icons/fa';
import { generateCoverLetter } from '../services/coverLetter';

const CoverLetter = () => {
  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [jobDetails, setJobDetails] = useState({
    title: '',
    company: '',
    description: ''
  });

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const userProfile = {
        experience: '5 years of web development',
        skills: ['React', 'Node.js', 'TypeScript']
      };
      
      const letter = await generateCoverLetter(jobDetails, userProfile);
      setCoverLetter(letter);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold text-gray-900"
      >
        Cover Letter Generator
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={jobDetails.title}
              onChange={(e) => setJobDetails({ ...jobDetails, title: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={jobDetails.company}
              onChange={(e) => setJobDetails({ ...jobDetails, company: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              className="w-full p-2 border rounded-lg h-32"
              value={jobDetails.description}
              onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })}
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Cover Letter'
            )}
          </button>
        </div>
      </motion.div>

      {coverLetter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Generated Cover Letter</h2>
            <div className="flex gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(coverLetter)}
                className="p-2 text-gray-600 hover:text-primary-600"
              >
                <FaCopy />
              </button>
              <button
                onClick={() => {/* Implement download */}}
                className="p-2 text-gray-600 hover:text-primary-600"
              >
                <FaDownload />
              </button>
            </div>
          </div>
          <div className="prose max-w-none">
            <pre className="whitespace-pre-wrap font-sans">{coverLetter}</pre>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CoverLetter;