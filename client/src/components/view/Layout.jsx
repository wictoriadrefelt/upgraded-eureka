import Header from "./Header";
import Content from "./Content";
import Products from "../pages/Products";
import Product from "../pages/Product";
import { getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      return error;
    }
    dispatch(getProducts());
  }, [dispatch, error]);

  return (
    <>
      <div>
        {products &&
          products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
      </div>
      <Content />
    </>
  );
};

export default Layout;
