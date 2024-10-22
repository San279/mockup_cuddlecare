import React, { useState } from 'react';
import { Search, MessageCircle, Bell, User, MapPin, Heart, Calendar } from 'lucide-react';

const CuddleWebsiteMockup = () => {
  const [activeTab, setActiveTab] = useState('browse');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-purple-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">CuddleCare</div>
          <div className="flex space-x-6 items-center">
            <button className="flex items-center space-x-2 hover:text-purple-200">
              <Search size={20} />
              <span>Search</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-purple-200">
              <MessageCircle size={20} />
              <span>Messages</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-purple-200">
              <Bell size={20} />
            </button>
            <button className="flex items-center space-x-2 hover:text-purple-200">
              <User size={20} />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-8 p-4">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {['browse', 'requests', 'availability'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start space-x-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Sarah M.</h3>
                  <div className="flex items-center text-gray-500 mt-1">
                    <MapPin size={16} className="mr-1" />
                    <span>New York City</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      Professional
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Experienced cuddler offering platonic comfort and support. Open to both giving and receiving.
              </p>
              <div className="flex justify-between mt-4 pt-4 border-t">
                <button className="flex items-center text-purple-600 hover:text-purple-700">
                  <Heart size={20} className="mr-2" />
                  <span>Save</span>
                </button>
                <button className="flex items-center text-purple-600 hover:text-purple-700">
                  <Calendar size={20} className="mr-2" />
                  <span>Request</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuddleWebsiteMockup;
