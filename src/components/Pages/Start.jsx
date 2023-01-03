import { Text, Title, Image, Box, Button, Flex } from "@mantine/core";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <Link to={"/home/"}>
        <Flex justify="flex-start" align="flex-start">
          <Flex
            justify="flex-start"
            align="flex-start"
            direction="column"
            sx={(theme) => ({
              position: "absolute",
              left: 0,
              top: 80,
              zIndex: 10,
              width: "100vw",
              height: "100vh",
              background: "pink",
              [theme.fn.smallerThan(930)]: {
                marginTop: "-30px",
              },
            })}
          ></Flex>
        </Flex>
      </Link>
    </>
  );
};

export default Start;
