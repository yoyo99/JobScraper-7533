import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaBriefcase, FaGraduationCap, FaCog } from 'react-icons/fa';
import { getCurrentUser, updateUserProfile } from '../services/auth';
import { getUserSubscription } from '../services/subscription';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    experience: '',
    education: '',
    skills: [],
    subscription: 'free'
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const user = await getCurrentUser();
      const subscription = await getUserSubscription(user.uid);
      const userData = await getUserProfile(user.uid);
      setProfile({ ...userData, subscription });
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(profile);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700"
          >
            <FaCog className={`h-5 w-5 ${isEditing ? 'rotate-180' : ''} transition-transform`} />
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <FaUser className="h-8 w-8 text-primary-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{profile.name || 'Update your profile'}</h2>
              <p className="text-gray-600">{profile.email}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                {profile.subscription.charAt(0).toUpperCase() + profile.subscription.slice(1)} Plan
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                value={profile.email}
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experience
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={profile.experience}
                onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
                disabled={!isEditing}
                placeholder="e.g., 5 years in web development"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Education
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={profile.education}
                onChange={(e) => setProfile({ ...profile, education: e.target.value })}
                disabled={!isEditing}
                placeholder="e.g., BS in Computer Science"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              value={profile.skills.join(', ')}
              onChange={(e) => setProfile({ ...profile, skills: e.target.value.split(',').map(s => s.trim()) })}
              disabled={!isEditing}
              placeholder="e.g., React, Node.js, TypeScript"
            />
          </div>

          {isEditing && (
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;