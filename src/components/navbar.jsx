import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 w-6 h-6 rounded-full"></div>
            <span className="font-bold text-lg">VerifyInfluencers</span>
          </div>
        </div>
        <div className="flex space-x-6">
          {[
            "Leaderboard",
            "Products",
            "Monetization",
            "About",
            "Contact",
            "Admin",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#signout"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Sign Out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
