import { Button } from "@maxhub/max-ui";
import { Link, Navbar, Page } from "framework7-react";
import { Cards } from "./cards";
import { TakePicture } from "./take-picture";

export const HomePage = () => (
  <Page className="safe-areas" name="home">
    <Navbar title="Home Page" />

    <Cards />
    <TakePicture />
    <Button size="large" mode="primary" asChild>
      <Link href="/about/">About Page</Link>
    </Button>
    <Button size="large" mode="primary" asChild>
      <Link href="/profile/">Profile</Link>
    </Button>
    <Button size="large" mode="primary" asChild>
      <Link href="/search/">search</Link>
    </Button>
    <Button size="large" mode="primary" asChild>
      <Link href="/modals/">Modals</Link>
    </Button>
    <Button size="large" mode="primary" asChild>
      <Link href="/calendar/">calendar</Link>
    </Button>
  </Page>
);
