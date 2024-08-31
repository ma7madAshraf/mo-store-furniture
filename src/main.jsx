import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { store } from "./store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" theme="dark" autoClose={3000} />
  </Provider>
);
