import { getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Products from "../pages/Products";
import ProductCard from "./ProductCard";

const Start = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      return error;
    }
    dispatch(getProducts());
  }, [dispatch, error]);
  console.log(products);
  return (
    <>
      <div className="container--product" id="container--product">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </>
  );
};
export default Start;
