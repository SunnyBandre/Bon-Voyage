import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaArrowRight, FaSearch } from "react-icons/fa"; // Import Search Icon
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('/images/Home.png')] bg-cover bg-center bg-no-repeat h-screen w-screen text-white flex flex-col justify-between px-10 py-6">
      <Navbar />

      {/* Center Content */}
      <div className="text-center space-y-4">
        <h1 className="text-white font-extrabold text-6xl font-roboto leading-tight">
          Get Ready to Explore The World
          <br /> with <span className="text-[#FFB904]">Traveltree</span>
        </h1>
        <p className=" italic opacity-80 text-4xl">
          “Where the journey becomes a story and every path <br /> leads to a
          new adventure....”
        </p>
        <br />

        {/* Search Box */}
        <div className="flex items-center justify-center mt-4">
          <div className="flex w-1/3 bg-white rounded-md shadow-md overflow-hidden">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 px-4 py-2 text-gray-800 focus:outline-none bg-white"
            />
            {/* Search Button */}
            <button className="bg-[#FFB904] px-6 py-2 flex items-center justify-center font-semibold hover:bg-yellow-500 transition text-white">
              <FaSearch className="mr-2" color="white" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end pb-4 px-2">
        {/* Left: Travel Features with Left Space */}
        <div className="text-left text-lg">
          <p>· Wide Range of travel options</p>
          <p>· Affordable Prices</p>
          <p>· Personalized travel planning</p>
          <p>· 24/7 support</p>
          <p>· Contact us: 1800-266-872</p>
        </div>

        {/* Right: Explore Button on Extreme Bottom Right */}
        <button
          className="bg-[#FFB904] text-white font-bold text-lg px-5 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition flex items-center gap-3"
          onClick={() => navigate("/discover")}
        >
          Explore <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Landing;
