import { getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../../Styles/p.css";
import StartpageLayout from "../view/StartpageLayout";
import Header from "../view/Header";

const Start = () => {
  document.title = "IneedIT";
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
      <Header />
      <main>
        <div className="container--product" id="container--product">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
        <StartpageLayout></StartpageLayout>
      </main>
    </>
  );
};
export default Start;
