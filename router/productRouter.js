const express = require("express");

const {
  getAllProducts,
  getProductById,
  addToCard,
  addProduct,
  getProductByCategory,
  getProductBySubcategory,
  deleteProduct,
  updateProduct
} = require("../controllers/ProductController");
const { addReview } = require("../controllers/reviewController");
const { auth, admin } = require("../middleware/authMiddleware");

const router = express.Router();

//ENDPOINT: /api/products/categoryValue
//GET Method
router.get("/bysubcategory/:subcategory", getProductBySubcategory);
router.get("/bycategory/:category", getProductByCategory);
//ENDPOINT: /api/products/
//GET Method
//public
router.get("/:id", getProductById);
//ENDPOINT: /api/products/
//POT Method
//public -- it should canged to protected route
router.post("/",auth, admin,addProduct);

//ENDPOINT: /api/products/
//GET Method
//public

router.get("/", getAllProducts);
//ADD Review
//ENDPOINT: /api/products/:id/reviews
//Post Method
//private
router.post("/:id/reviews", auth, addReview);

//ENDPOINT: /api/products/
//GET Method
//public
router.delete("/:proName", deleteProduct);
router.put("/:id",updateProduct)
module.exports = router;
