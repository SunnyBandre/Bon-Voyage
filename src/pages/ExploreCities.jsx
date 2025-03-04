import { useNavigate, useParams } from "react-router-dom";
import { MdFlight } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "./Navbar";
import { BiCalendar } from "react-icons/bi";
import citiesData from "../data/citiesData";

function ExploreCities() {
  const navigate = useNavigate();

  const { cityName } = useParams(); // Get city name from URL
  const cityInfo = citiesData[cityName.toLowerCase()] || {}; // Get city details or empty object

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen w-screen text-white flex flex-col px-6 py-4"
      style={{
        backgroundImage: `url('/images/city/${cityName.toLowerCase()}.png')`,
      }}
    >
      {" "}
      <Navbar />
      {/* Back Button */}
      <button className="bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md shadow-black/50 mt-4">
        <FaArrowLeft onClick={() => navigate("/discover")} />
      </button>
      {/* Content Wrapper (Left Aligned) */}
      <div className="flex flex-col items-start justify-center flex-grow ml-20 max-w-[600px] space-y-10">
        {/* City Name */}
        <h2 className="capitalize font-extrabold text-5xl font-roboto">
          {cityName}
        </h2>

        {/* Key Attractions */}
        <p className="text-xl leading-relaxed">
          <span className="font-extrabold">Key Attractions:</span>{" "}
          {cityInfo.attractions || "N/A"}
        </p>

        {/* Other Details */}
        <div className="text-xl space-y-2">
          <p>
            <span className="font-extrabold">Best Time To Visit:</span>{" "}
            {cityInfo.bestTime || "N/A"}
          </p>
          <p>
            <span className="font-extrabold">Ideal Time:</span>{" "}
            {cityInfo.idealTime || "N/A"}
          </p>
          <p>
            <span className="font-extrabold">Currency:</span>{" "}
            {cityInfo.currency || "N/A"}
          </p>
          <p>
            <span className="font-extrabold">Language:</span>{" "}
            {cityInfo.language || "N/A"}
          </p>
        </div>

        {/* Book Now Button (Left Aligned) */}
        <div className="mt-4 mb-4">
          <button className="bg-white/20 text-white px-6 py-3 rounded-lg text-lg font-semibold">
            Book Now
          </button>
        </div>
      </div>
      {/* Check-In/Check-Out Button Centered Below */}
      <div className="flex justify-center w-full mt-2 mb-6">
        <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-3 text-lg font-roboto">
          <BiCalendar size={30} />
          <div className="flex flex-col items-center">
            <span className="font-semibold">Check In</span>
            <span className="text-sm">Add Date</span>
          </div>

          <div className="h-full border-l border-gray-400"></div>

          <BiCalendar size={30} />

          <div className="flex flex-col items-center">
            <span className="font-semibold">Check Out</span>
            <span className="text-sm">Add Date</span>
          </div>

          <div className="h-full border-l border-gray-400"></div>

          <MdFlight size={30} />
        </button>
      </div>
    </div>
  );
}

export default ExploreCities;
