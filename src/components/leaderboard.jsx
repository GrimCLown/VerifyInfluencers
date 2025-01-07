import React from 'react'
import { useState } from 'react';

const leaderboard = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const data = [
      { rank: 1, name: "Dr. Peter Attia", category: "Medicine", trustScore: "95%", trend: "up", followers: "1.2M", verified: 203 },
      { rank: 2, name: "Dr. Rhonda Patrick", category: "Nutrition", trustScore: "91%", trend: "up", followers: "940K", verified: 190 },
      { rank: 3, name: "Dr. Chris Palmer", category: "Mental Health", trustScore: "90%", trend: "up", followers: "630K", verified: 150 },
      { rank: 4, name: "Andrew Huberman", category: "Neuroscience", trustScore: "89%", trend: "up", followers: "4.2M", verified: 127 },
      { rank: 5, name: "Dr. Dominic D'Agostino", category: "Nutrition", trustScore: "87%", trend: "neutral", followers: "500K", verified: 89 },
      { rank: 6, name: "Dr. Gabrielle Lyon", category: "Muscle Health", trustScore: "85%", trend: "neutral", followers: "1.8M", verified: 64 },
      { rank: 7, name: "Dr. David Sinclair", category: "Longevity", trustScore: "80%", trend: "down", followers: "2.5M", verified: 41 },
    ];
  
    const categories = ['All', 'Medicine', 'Nutrition', 'Mental Health', 'Neuroscience', 'Muscle Health', 'Longevity'];
  
    const filteredData = selectedCategory === 'All' ? data : data.filter(item => item.category === selectedCategory);
  
    return (
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Influencer Trust Leaderboard</h1>
          <p className="text-gray-400">Real-time rankings of health influencers based on scientific accuracy, predictability, and transparency. Updated daily using AI-powered analysis.</p>
        </div>
  
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold">1,234</h2>
            <p className="text-gray-400">Active Influencers</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold">25,431</h2>
            <p className="text-gray-400">Claims Verified</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold">85.7%</h2>
            <p className="text-gray-400">Average Trust Score</p>
          </div>
        </div>
  
        {/* Categories Filter */}
        <div className="mb-6">
          <label htmlFor="categoryFilter" className="block text-sm font-medium text-gray-400 mb-2">Filter by Category:</label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded-lg w-full"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
  
        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="p-4">Rank</th>
                <th className="p-4">Influencer</th>
                <th className="p-4">Category</th>
                <th className="p-4">Trust Score</th>
                <th className="p-4">Trend</th>
                <th className="p-4">Followers</th>
                <th className="p-4">Verified Claims</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-4">#{item.rank}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.category}</td>
                  <td className="p-4">{item.trustScore}</td>
                  <td className="p-4">
                    {item.trend === 'up' && <span className="text-green-500">▲</span>}
                    {item.trend === 'neutral' && <span className="text-gray-500">●</span>}
                    {item.trend === 'down' && <span className="text-red-500">▼</span>}
                  </td>
                  <td className="p-4">{item.followers}</td>
                  <td className="p-4">{item.verified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
  )
}

export default leaderboard