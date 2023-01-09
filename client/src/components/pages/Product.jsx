import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <Link
      className="productCard"
      to={`/product/${product._id}`}
      key={product._id}
    >
      <p>{product.name}</p>
      <p>{product.price}</p>
    </Link>
  );
};

export default Products;
