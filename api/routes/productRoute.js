const express = require("express");
const app = express();
const cors = require("cors");

// use me for admin things, authorizedRole sets so that only admin can create new products.
const { isAuthenticated, authorizedRoles } = require("../middleware/auth");

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
router.route("/product/:id").put(authorizedRoles("admin"), updateProduct);
router.route("admin/product/new").post(authorizedRoles("admin"), createProduct);
router.route("/product/:id").delete(authorizedRoles("admin"), deleteProduct);

module.exports = router;
