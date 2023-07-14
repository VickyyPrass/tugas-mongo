const router = require("express").Router();
const productController = require("../controller/productController");

router.get("/product", productController.getProduct);
router.get("/product/:id", productController.getProductByID);
router.post("/product", productController.saveProduct);
router.patch("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
