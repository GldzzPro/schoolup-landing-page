import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
