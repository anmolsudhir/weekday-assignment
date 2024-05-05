import JobSearchPage from "@/Pages/JobSearch";
import { CustomThemeProvider } from "@/components";
import "@/index.css";
import "@fontsource/lexend/300.css";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/500.css";
import "@fontsource/lexend/600.css";
import "@fontsource/lexend/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/lib";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <Provider store={store}>
        <JobSearchPage />
      </Provider>
    </CustomThemeProvider>
  </React.StrictMode>,
);
