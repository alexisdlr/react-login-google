import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider domain="dev-5r46fd34.us.auth0.com" 
    redirectUri={window.location.origin}
    clientId="uaCW9g46cjiAiSyzmgcL1LQqDoeP3eqw">
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
