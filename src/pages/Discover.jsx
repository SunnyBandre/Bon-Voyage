import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const images = [
  { src: "/images/Sydney.png", name: "Sydney" },
  { src: "/images/Switzerland.png", name: "Switzerland" },
  { src: "/images/Dubai.png", name: "Dubai" },
  { src: "/images/NYC.png", name: "New York City" },
  { src: "/images/Paris.png", name: "Paris" },
  { src: "/images/India.png", name: "India" },
  { src: "/images/Singapore.png", name: "Singapore" },
];

function Discover() {
  const navigate = useNavigate();

  const [visibleImages, setVisibleImages] = useState(images);

  const nextSlide = () => {
    setVisibleImages((prev) => [...prev.slice(1), prev[0]]);
  };

  const prevSlide = () => {
    setVisibleImages((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <div className="bg-[url('/images/Home.png')] bg-cover bg-center bg-no-repeat h-screen w-screen text-white flex flex-col px-10 py-6 overflow-hidden">
      <Navbar showBook={true} />

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Heading */}
        <h1 className="text-white font-extrabold text-5xl md:text-6xl font-roboto leading-tight text-center mb-8">
          Discover The World
          <br /> with <span className="text-[#FFB904]">Traveltree</span>
        </h1>

        {/* Image Carousel */}
        <div className="relative flex flex-col items-center w-full">
          {/* Image Container */}
          <div className="relative flex justify-center items-center gap-6 w-full h-[50vh]">
            {visibleImages.slice(0, 5).map((img, i) => (
              <div
                key={i}
                className={`relative transition-all duration-500 mx-0 ${
                  i === 2
                    ? "scale-90 z-10" // Center image
                    : i === 1 || i === 3
                    ? "scale-95 opacity-90" // Second & Fourth images
                    : "scale-90 opacity-80" // First & Fifth images (smaller)
                }`}
                style={{
                  width: i === 2 ? "20%" : i === 1 || i === 3 ? "17%" : "15%",
                }} // Width also adjusted
                onClick={() =>
                  i === 2 && navigate(`/explore/${img.name.toLowerCase()}`)
                }
              >
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-full h-[80%] object-cover rounded-lg"
                />
                <div className="absolute text-white px-2 py-1 bottom-2 rounded-md text-3xl font-bold text-center w-full">
                  {img.name}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-10 mt-4">
            <button
              onClick={prevSlide}
              className="absolute p-3 bg-white/30 rounded-full left-[60px] bottom-[-70px] z-10 hover:bg-white/50 transition"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute p-3 bg-white/30 right-[60px] bottom-[-70px] rounded-full z-10 hover:bg-white/50 transition"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Quote & Button */}
      <div className="text-center mt-6">
        <p className="italic opacity-80 text-xl md:text-2xl">
          “Where the journey becomes a story and every path <br />
          leads to a new adventure....”
        </p>
      </div>
    </div>
  );
}

export default Discover;
