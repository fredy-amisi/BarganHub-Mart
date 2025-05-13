import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-5 bg-gradient-to-r from-blue-900 via-blue-400 to-red-500 text-white text-white">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Bargain Hub</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex justify-center space-x-4 pr-90">

              <Link to="/" smooth={true} duration={500} className=" cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md text-1.5xl font-medium ">Home</Link>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md text-1xl font-medium">
                About
              </Link>
              <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md text-1xl font-medium">
                Services
              </Link>
              <Link to="reviews" smooth={true} duration={500} className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md text-1xl font-medium">
                Reviews
              </Link>
              <Link to="faqs" smooth={true} duration={500} className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md text-1xl font-medium">
                   FAQs
              </Link>

              <Link to="Contact" smooth={true} duration={500} className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md text-1xl font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-950 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Home
            </Link>
            <Link to="about" className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              About
            </Link>
            <Link to="services" className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Services
            </Link>
            <Link to="/reviews" className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Reviews
            </Link>
            <Link to="/faqs" className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
               FAQs
            </Link>
            <Link to="contact" className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;