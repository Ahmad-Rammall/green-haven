import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from 'src/theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LoginPage from "./pages/login";

import App from "./app";

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<ThemeProvider><LoginPage /></ThemeProvider>} />
          <Route path="/main/*" element={<App />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
