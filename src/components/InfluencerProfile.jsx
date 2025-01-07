import React, { useState } from 'react';

const InfluencerProfile = () => {
  const [activeTab, setActiveTab] = useState('Claims Analysis');
  const tabs = ['Claims Analysis', 'Recommended Products', 'Monetization'];
  const categories = [
    'All Categories',
    'Sleep',
    'Performance',
    'Hormones',
    'Nutrition',
    'Exercise',
    'Stress',
    'Cognition',
    'Motivation',
    'Recovery',
    'Mental Health',
  ];
  const statuses = ['All Statuses', 'Verified', 'Questionable', 'Debunked'];

  const claims = [
    {
      date: '14/01/2024',
      content: 'Viewing sunlight within 30-60 minutes of waking enhances cortisol release',
      trustScore: '92%',
      analysis: 'Multiple studies confirm morning light exposure affects cortisol rhythms. Timing window supported by research.',
    },
    {
      date: '09/12/2023',
      content: 'Non-sleep deep rest (NSDR) protocols can accelerate learning and recovery',
      trustScore: '88%',
      analysis: 'NSDR techniques have been shown to promote neural plasticity and aid in memory retention.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Andrew Huberman</h1>
        <p className="text-gray-400 mt-2">Stanford Professor of Neurobiology and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration. Known for evidence-based approaches to performance, stress, and brain optimization.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['Neuroscience', 'Sleep', 'Performance', 'Hormones', 'Stress Management', 'Exercise Science', 'Light Exposure', 'Circadian Biology'].map((tag, index) => (
            <span key={index} className="bg-gray-800 text-sm px-3 py-1 rounded-lg">{tag}</span>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold">89%</h2>
          <p className="text-gray-400">Trust Score</p>
          <p className="text-sm text-gray-500">Based on 127 verified claims</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold">$5.0M</h2>
          <p className="text-gray-400">Yearly Revenue</p>
          <p className="text-sm text-gray-500">Estimated earnings</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold">1</h2>
          <p className="text-gray-400">Products</p>
          <p className="text-sm text-gray-500">Recommended products</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold">4.2M+</h2>
          <p className="text-gray-400">Followers</p>
          <p className="text-sm text-gray-500">Total following</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-6">
        <div className="flex border-b border-gray-700">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`p-4 text-sm font-medium ${activeTab === tab ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Claims Section */}
      {activeTab === 'Claims Analysis' && (
        <div>
          <div className="mb-4 flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search claims..."
              className="bg-gray-800 text-white p-2 rounded-lg flex-1"
            />
            <select className="bg-gray-800 text-white p-2 rounded-lg">
              {categories.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>
            <select className="bg-gray-800 text-white p-2 rounded-lg">
              {statuses.map((status, index) => (
                <option key={index}>{status}</option>
              ))}
            </select>
            <select className="bg-gray-800 text-white p-2 rounded-lg">
              <option>Date</option>
              <option>Trust Score</option>
            </select>
          </div>

          {/* Claims List */}
          <div className="space-y-4">
            {claims.map((claim, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-green-500 font-medium">Verified</span>
                  <span className="text-sm text-gray-500">{claim.date}</span>
                </div>
                <p className="mt-2 font-medium">{claim.content}</p>
                <p className="mt-2 text-sm text-gray-400">{claim.analysis}</p>
                <div className="mt-4 text-right text-green-500 font-bold">{claim.trustScore}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfluencerProfile;
