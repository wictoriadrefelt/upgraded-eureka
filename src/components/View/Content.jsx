import { Route, Routes } from "react-router-dom";
import Start from "../Pages/Start";
import { Box } from "@mantine/core";

const Content = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1680, backgroundColor: "black" }}>
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Content;
