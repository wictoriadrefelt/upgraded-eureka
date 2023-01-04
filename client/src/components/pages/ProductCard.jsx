import { getProducts } from "../../actions/productAction";

const Products = ({ data }) => {
  return (
    <div className="products">
      {data && data.map((product) => ({ product }))}
    </div>
  );
};

export default Products;
