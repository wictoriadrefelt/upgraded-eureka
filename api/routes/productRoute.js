const express = require("express");
const app = express();
const cors = require("cors");

// use me for admin things, authorizedRole sets so that only admin can create new products.
/* const { isAuthenticated, authorizedRole } = require("../middleware/auth"); */

app.use(cors());

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");

const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/new").post(createProduct);
router.route("/product/:id").delete(deleteProduct);

module.exports = router;
