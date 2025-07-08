import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import Framework7
import Framework7 from "framework7/lite-bundle";

// Import Framework7-React Plugin
import Framework7React from "framework7-react";
// Import Framework7 Styles
//@ts-expect-error: work only this way
import "framework7/css/bundle";
import "framework7-icons/css/framework7-icons.css";
import "@maxhub/max-ui/dist/styles.css";
import { MyApp } from "./app";
// eslint-disable-next-line react-hooks/rules-of-hooks
Framework7.use(Framework7React);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);
