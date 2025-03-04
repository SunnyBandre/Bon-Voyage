import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg">Oops! Page not found.</p>
      <button
        className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded-lg text-lg font-semibold hover:bg-yellow-500 transition"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
}

export default NotFound;
