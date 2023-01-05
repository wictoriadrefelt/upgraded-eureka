import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Landing from "../pages/Landing";
import { Box } from "@mantine/core";
import Product from "../pages/Product";
import Products from "../pages/ProductCard";

const product = {
  _id: "12",
  name: "white",
  price: "2000",
  image: "bahe.jpg",
};

const Content = () => {
  return (
    <>
      <Product product={product} />
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
    </>
  );
};

export default Content;
