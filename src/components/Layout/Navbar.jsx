import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaUser, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaBriefcase className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-800">JobScraper</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-600 hover:text-primary-600">
              Dashboard
            </Link>
            <Link to="/search" className="text-gray-600 hover:text-primary-600">
              Search
            </Link>
            <Link to="/cover-letter" className="text-gray-600 hover:text-primary-600">
              <FaFileAlt className="h-5 w-5" />
            </Link>
            <Link to="/profile" className="p-2 text-gray-600 hover:text-primary-600">
              <FaUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;