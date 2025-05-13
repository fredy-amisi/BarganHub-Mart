import React from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

const About = () => {
  return (
    <>
    <div className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Bargain Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting people through reliable and affordable WiFi solutions
            since 2020.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img
              src={about1}
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              At Bargain Hub, we believe that everyone deserves access to fast,
              reliable, and affordable internet connectivity. Our mission is to
              bridge the digital divide by providing flexible WiFi solutions
              that cater to various needs and budgets.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-globe text-blue-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Global Connectivity
                  </h4>
                  <p className="text-gray-600">
                    Providing seamless internet access across multiple locations
                    worldwide.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-shield-alt text-blue-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Secure Network
                  </h4>
                  <p className="text-gray-600">
                    Enterprise-level security protocols to protect your data and
                    privacy.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-headset text-blue-600 text-xl mt-1 mr-4"></i>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    24/7 Support
                  </h4>
                  <p className="text-gray-600">
                    Round-the-clock technical assistance to ensure uninterrupted
                    connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience in providing WiFi solutions, we
              understand the diverse needs of our customers. Our flexible
              packages and commitment to service excellence make us the
              preferred choice for individuals and businesses alike.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  50K+
                </div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  200+
                </div>
                <div className="text-gray-600">Locations</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden order-1 lg:order-2">
            <img
              src={about2}
              alt="Our Infrastructure"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  

    </>
  )
}

export default About
