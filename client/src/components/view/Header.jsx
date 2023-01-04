import { useState } from "react";
import {
  Header as MantineHeader,
  MediaQuery,
  Burger,
  useMantineTheme,
  Image,
  Box,
  Flex,
  Menu,
  createStyles,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  dropdown: {
    display: "flex",
    marginLeft: "0",
    marginRight: "0",
    background: "white",
    justifyContent: "center",
    marginTop: "15px",
  },
  menuLinks: {
    textDecoration: "none",
    fontFamily: "Quicksand",
    alignItems: "flex-end",
    color: "black",
  },
}));

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  const link = {
    fontSize: 14,
    color: "#FFFFFF",
    padding: 3,
    paddingRight: 15,
    textDecoration: "none",
  };

  return (
    <MantineHeader
      p={10}
      withBorder={false}
      height={80}
      sx={{
        display: "flex",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={(theme) => ({
          width: "90%",
          [theme.fn.smallerThan(1622)]: {
            width: "85%",
          },
        })}
      >
        <a href="/">
          <Image width={200} height={80} src="..\src\assets\logo.png" />
        </a>
      </Box>
      <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
        <Flex direction="row" justify="flex-end" p="sm" w={180}>
          <Link hidden={opened} style={link} to="/home">
            Logga in
          </Link>
          <Link style={link} hidden={opened} to="/contact">
            Kontakt
          </Link>
        </Flex>
      </MediaQuery>
      <Flex direction="column" justify="center" align="center">
        <MediaQuery largerThan="xs" styles={{ display: "none" }}>
          <Flex>
            <Menu shadow="md" width="100px">
              <Menu.Target>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.brand[0]}
                  mr="xs"
                />
              </Menu.Target>
              <Menu.Dropdown className={classes.dropdown}>
                <Link onClick={() => setOpened((o) => !o)} to="/">
                  <Menu.Item component="a" className={classes.menuLinks}>
                    Hem
                  </Menu.Item>
                </Link>
                <Link onClick={() => setOpened((o) => !o)} to="/login">
                  <Menu.Item component="a" className={classes.menuLinks}>
                    Logga in
                  </Menu.Item>
                </Link>
                <Link onClick={() => setOpened((o) => !o)} to="/contact">
                  <Menu.Item component="a" className={classes.menuLinks}>
                    Kontakt
                  </Menu.Item>
                </Link>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </MediaQuery>
      </Flex>
    </MantineHeader>
  );
}
