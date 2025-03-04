import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function ExploreCities() {
  const { cityName } = useParams(); // Get city name from URL

  return (
    <div className="bg-[url('/images/Home.png')] bg-cover bg-center bg-no-repeat h-screen w-screen text-white flex flex-col justify-between px-10 py-6">
      {/* Navbar */}
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-metalMania uppercase">Traveltree</h3>
        <div className="font-roboto font-semibold text-lg flex gap-6">
          <p className="cursor-pointer hover:text-yellow-400">Home</p>
          <p className="cursor-pointer hover:text-yellow-400">Blog</p>
          <p className="cursor-pointer hover:text-yellow-400">About</p>
          <p className="cursor-pointer hover:text-yellow-400">Contact</p>

          <p className="cursor-pointer hover:text-yellow-400 flex items-center gap-1">
            IND
            {/* <MdKeyboardArrowDown /> */}
          </p>
          <CgProfile size={30} />
        </div>
      </div>
    </div>
  );
}

export default ExploreCities;
