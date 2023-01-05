import { getProducts } from "../../actions/productAction";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  getProducts();
  return (
    <Link className="productCard" to={product._id}>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </Link>
  );
};

export default Products;
