import Header from "./Header";
import Content from "./Content";
import Products from "../pages/Products";
import { getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Content />
    </>
  );
};

export default Layout;
