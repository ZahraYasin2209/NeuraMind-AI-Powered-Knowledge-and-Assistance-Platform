// import { createRoot } from "react-dom/client"
// import App from "./App.jsx"
// import "./index.css"
// import ContextProvider from "./context/Context.jsx"

// createRoot(document.getElementById("root")).render(
//   <ContextProvider>
//     <App />
//   </ContextProvider>
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import ContextProvider from "./context/Context.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <ContextProvider>
        <App />
      </ContextProvider>
    </ClerkProvider>
  </StrictMode>
);
