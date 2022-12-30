import { Route, Routes } from "react-router-dom";
import Start from "../Pages/Start";
import { Box } from "@mantine/core";

const Content = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "none",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1680, backgroundColor: "none" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home/" element={<Start />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Content;
