import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.scss";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/*<ThemeProvider theme={theme}>*/}
    <CssBaseline />
    {/* The rest of your application */}
    <App />
  </React.StrictMode>
);
