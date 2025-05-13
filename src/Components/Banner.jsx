import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";
import bg2 from "../assets/bg2.jpg";

const Banner = () => {
  const swiperModules = [Pagination, Autoplay];
  return (
    <div className=" bg-gray-50">
      <div className="max-w-[1440px] mx-auto min-h-[500px]">
        {/* Banner Section */}
        <div className="w-full h-[500px] relative">
          <Swiper
            modules={swiperModules}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="h-full w-full"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden">
              <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${bg2})`,
    filter: "brightness(0.7)",
  }}
></div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent">
                  <div className="flex flex-col justify-center h-full max-w-5xl px-20 text-white  ml-4">
                    <div className="flex items-center gap-3 mb-6 ">
                      <i className="fas fa-wifi text-4xl text-blue-400"></i>
                      <h2 className="text-4xl font-bold">Bargain Hub</h2>
                    </div>
                    <h1 className="text-5xl font-bold mb-4">
                      High-Speed WiFi Solutions for Every Need
                    </h1>
                    <p className="text-xl mb-8">
                      Choose from flexible packages based on your timing and
                      device requirements. Connect multiple devices with our
                      premium plans.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                        <span>
                          Packages starting from 1 hour to unlimited monthly
                          access
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                        <span>Connect up to 10 devices simultaneously</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                        <span>24/7 customer support</span>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button className="bg-white text-blue-900 px-8 py-3 rounded-button font-medium hover:bg-blue-50 transition duration-300 cursor-pointer whitespace-nowrap">
                        Sign Up
                      </button>
                      <button className="border-2 border-white text-white px-8 py-3 rounded-button font-medium hover:bg-white/10 transition duration-300 cursor-pointer whitespace-nowrap">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Multiple%20connected%20devices%20showing%20wifi%20signal%2C%20smartphones%2C%20tablets%2C%20and%20laptops%20with%20glowing%20network%20connections%20between%20them%2C%20modern%20digital%20lifestyle%20visualization%2C%20blue%20technology%20theme%2C%20clean%20and%20professional%20background%20with%20abstract%20network%20lines&width=1440&height=600&seq=2&orientation=landscape')`,
                    filter: "brightness(0.7)",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent">
                  <div className="flex flex-col justify-center h-full max-w-3xl px-12 text-white">
                    <div className="flex items-center gap-3 mb-6">
                      <i className="fas fa-wifi text-4xl text-blue-400"></i>
                      <h2 className="text-4xl font-bold">Bargain Hub</h2>
                    </div>
                    <h1 className="text-5xl font-bold mb-4">
                      Retail Network Services Tailored for You
                    </h1>
                    <p className="text-xl mb-8">
                      Discover our comprehensive range of retail network
                      solutions designed for businesses and individuals.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                        <span>Customizable bandwidth options</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                        <span>Secure and encrypted connections</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                        <span>
                          Pay-as-you-go or subscription plans available
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button className="bg-white text-blue-900 px-8 py-3 rounded-button font-medium hover:bg-blue-50 transition duration-300 cursor-pointer whitespace-nowrap">
                        Sign Up
                      </button>
                      <button className="border-2 border-white text-white px-8 py-3 rounded-button font-medium hover:bg-white/10 transition duration-300 cursor-pointer whitespace-nowrap">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </div>
  );
};
export default Banner;
