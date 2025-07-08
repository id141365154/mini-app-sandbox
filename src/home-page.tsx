import { Button } from "@maxhub/max-ui";
import { Link, Navbar, Page } from "framework7-react";
import { Cards } from "./cards";

export const HomePage = () => (
  <Page name="home">
    <Navbar title="Home Page" />

    <Cards />
    <Button size="large" mode="primary" asChild>
      <Link href="/about/">About Page</Link>
    </Button>
    <Button size="large" mode="primary" asChild>
      <Link href="/profile/">Profile</Link>
    </Button>
  </Page>
);
