import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import logo from "./assets/logo.png";
import "./index.css";

// Ensure favicon uses the bundled asset (works in dev and production).
const existingFavicon = document.querySelector("link[rel='icon']");
if (existingFavicon) {
  existingFavicon.href = logo;
} else {
  const l = document.createElement("link");
  l.rel = "icon";
  l.type = "image/png";
  l.href = logo;
  document.head.appendChild(l);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
