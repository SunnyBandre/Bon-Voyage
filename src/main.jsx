import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "@fontsource/roboto"; // Defaults to 400 (Regular)
import "@fontsource/roboto/400.css"; // Specify weight if needed
import "@fontsource/roboto/700.css"; // Example: Bold weight
import "@fontsource/metal-mania"; // Metal Mania Regular

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
