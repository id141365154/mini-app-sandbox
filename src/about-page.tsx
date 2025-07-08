import {
  Avatar,
  Button,
  CellList,
  CellSimple,
  Container,
  Flex,
  Grid,
  MaxUI,
  Panel,
  Typography,
} from "@maxhub/max-ui";
import { Link, Navbar, Page } from "framework7-react";

export const AboutPage = () => {
  return (
    <Page name="about">
      <Navbar title="About" />
      <MaxUI>
        <Panel mode="secondary">
          <Grid gap={12} cols={1}>
            <Container className="me">
              <Flex direction="column" align="center">
                <Avatar.Container
                  size={72}
                  form="squircle"
                  className="me__avatar"
                >
                  <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
                </Avatar.Container>

                <Typography.Title>Иван Иванов</Typography.Title>
              </Flex>
            </Container>
          </Grid>
        </Panel>

        <CellList filled mode="island">
          <CellSimple
            before={
              <Avatar.Container
                size={40}
                form="squircle"
                className="me__avatar"
              >
                <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
              </Avatar.Container>
            }
            onClick={() => {}}
            showChevron
            title="Igor Foxik"
          />
          <CellSimple
            before={
              <Avatar.Container
                size={40}
                form="squircle"
                className="me__avatar"
              >
                <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
              </Avatar.Container>
            }
            onClick={() => {}}
            showChevron
            title="Vadim Tregubenko"
          />
          <CellSimple
            before={
              <Avatar.Container
                size={40}
                form="squircle"
                className="me__avatar"
              >
                <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
              </Avatar.Container>
            }
            onClick={() => {}}
            showChevron
            title="Ira Grishina"
          />
        </CellList>

        <Button size="large" mode="primary" asChild>
          <Link href="/">Home</Link>
        </Button>
      </MaxUI>
    </Page>
  );
};
