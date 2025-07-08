import { HomePage } from "./home-page";
import { AboutPage } from "./about-page";
import { ProfilePage } from "./profile-page";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/profile/",
    component: ProfilePage,
  },
];
