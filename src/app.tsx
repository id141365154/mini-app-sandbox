// import Framework7 from "framework7";
import { App, View } from "framework7-react";

import type { AppProps } from "framework7-react/components/app.js";
import { routes } from "./routes";

const f7params: AppProps = {
  name: "My App", // App name
  theme: "auto", // Automatic theme detection
  // App routes
  // colorScheme: "auto",
  routes: routes,
};

export function MyApp() {
  return (
    <App className="safe-areas" {...f7params} colorTheme="auto">
      <View main url="/" />
    </App>
  );
}
