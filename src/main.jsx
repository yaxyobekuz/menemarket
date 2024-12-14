import { createRoot } from "react-dom/client";

// CSS (styles)
import "./css/index.css";
import "./css/fonts.css";

// Components
import App from "./App.jsx";

// Redux
import store from "./store/store.js";
import { Provider } from "react-redux";

// Render the project
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
