import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar({ showBook }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <h3 className="text-3xl font-metalMania uppercase">Traveltree</h3>
      <div className="font-roboto font-semibold text-lg flex gap-6 items-center">
        <p
          className="cursor-pointer hover:text-yellow-400"
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <p className="cursor-pointer hover:text-yellow-400">Blog</p>
        <p className="cursor-pointer hover:text-yellow-400">About</p>
        <p className="cursor-pointer hover:text-yellow-400">Contact</p>

        {!showBook && (
          <>
            <p className="cursor-pointer hover:text-yellow-400 flex items-center gap-1">
              IND
              <MdKeyboardArrowDown />
            </p>
            <CgProfile size={30} className="hover:text-yellow-400" />
          </>
        )}
        {showBook && (
          <>
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg">
              Book Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
