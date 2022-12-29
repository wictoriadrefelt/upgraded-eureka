import { AppShell } from "@mantine/core";
import Header from "./Header";
import Content from "./Content";

const Layout = () => {
  return (
    <AppShell
      sx={{ backgroundColor: "white" }}
      styles={{
        body: {
          width: "100vw",
        },
      }}
      header={<Header />}
      padding={16}
    >
      <Content />
    </AppShell>
  );
};

export default Layout;
