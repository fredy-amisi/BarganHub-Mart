import React from 'react'
import service1 from '../assets/service1.jpg'

const Services = () => {
  return (
    <div className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Barganhubmart Services
          </h2>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <i className="fas fa-router text-blue-600 mr-3"></i>
                WiFi Router Installation Services
              </h3>
              <p className="text-gray-700 mb-4">
                We provide professional WiFi router installation services to
                ensure optimal connectivity in your space:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-blue-600"></i>
                  <span>Expert router setup and configuration</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-blue-600"></i>
                  <span>Network security implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-blue-600"></i>
                  <span>Signal optimization and coverage analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-blue-600"></i>
                  <span>Hardware recommendations and sales</span>
                </li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap">
                Request Installation
              </button>
            </div>
            <div className="w-96 h-64 rounded-lg overflow-hidden">
              <img
                src={service1}
                alt="Router Installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            <i className="fas fa-shopping-cart text-pink-600 mr-3"></i>
            How to purchase:
          </h3>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-pink-600 font-semibold">1.</span>
              <span>Tap the package you want to purchase</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-600 font-semibold">2.</span>
              <span>Enter your Mobile Money phone number</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-600 font-semibold">3.</span>
              <span>Click subscribe</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-600 font-semibold">4.</span>
              <span>Enter your Mobile Money PIN in the prompt</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-600 font-semibold">5.</span>
              <span>Wait a few seconds to be connected</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pink-600 font-semibold">6.</span>
              <span>If not connected, contact customer care 0781463185</span>
            </li>
          </ol>

          <div className="mt-8 flex items-center gap-3">
            <i className="fas fa-user-circle text-pink-600"></i>
            <span className="text-gray-700">Already subscribed?</span>
            <button className="text-white bg-pink-600 px-4 py-2 rounded-button hover:bg-pink-700 transition-colors whitespace-nowrap">
              Click to login
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">Test @ Ksh 6</h3>
            <p className="text-gray-500">30m</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">Speedy Hour @ Ksh 10</h3>
            <p className="text-gray-500">1h</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">Bamba @ Ksh 26</h3>
            <p className="text-gray-500">6h</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">
              Full Day Pass @ Ksh 31
            </h3>
            <p className="text-gray-500">1d</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">
              Farasi [ 2 devices] @ Ksh 31
            </h3>
            <p className="text-gray-500">8h</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">
              Special Offer @ Ksh 56
            </h3>
            <p className="text-gray-500">2d</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">
              Daily special [ 2 devices] @ Ksh 56
            </h3>
            <p className="text-gray-500">1d</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">
              Weekly saver @ Ksh 210
            </h3>
            <p className="text-gray-500">7d</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">
              Monthly Unlimited [2 devices] @ Ksh 510
            </h3>
            <p className="text-gray-500">30d</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="font-semibold text-lg mb-2">
              Monthly special [ 3 devices] @ Ksh 710
            </h3>
            <p className="text-gray-500">30d</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
