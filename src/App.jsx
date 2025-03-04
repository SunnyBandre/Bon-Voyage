import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Discover from "./pages/Discover";
import ExploreCities from "./pages/ExploreCities";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/explore/:cityName" element={<ExploreCities />} />
          {/* Redirect /explore without a city to NotFound */}
          <Route
            path="/explore"
            element={<Navigate to="/not-found" replace />}
          />

          {/* Not Found Route */}
          <Route path="/not-found" element={<NotFound />} />

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
