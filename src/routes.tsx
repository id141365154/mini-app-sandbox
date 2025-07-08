import { HomePage } from "./home-page";
import { AboutPage } from "./about-page";
import { ProfilePage } from "./profile-page";
import { AutocompletePage } from "./autocompleete";
import { Modals } from "./modals";
import { Calendars } from "./calendars";

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
  {
    path: "/search/",
    component: AutocompletePage,
  },
  {
    path: "/modals/",
    component: Modals,
  },
  {
    path: "/calendar/",
    component: Calendars,
  },
];
