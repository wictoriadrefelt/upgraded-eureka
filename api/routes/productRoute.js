const express = require("express");
const app = express();
const cors = require("cors");
/* const { isAutchenticated } = require("../middleware/auth"); */

app.use(cors());

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/new").post(createProduct);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;
