import { createRoot } from "react-dom/client";

// CSS (styles)
import "./css/index.css";
import "./css/fonts.css";

// Components
import App from "./App.jsx";

// Render the project
createRoot(document.getElementById("root")).render(<App />);
