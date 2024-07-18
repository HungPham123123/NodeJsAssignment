const express = require("express");
const router = express.Router();
const product_controller = require("./../controller/product.controller")

router.get("/", product_controller.product_get);

router.get("/create", product_controller.open_createProduct)

router.post("/create_product", product_controller.create_Product)
router.get('/delete/:id', product_controller.delete_Product)

router.get('/edit/:id', product_controller.show_edit)
router.post('/edit/:id', product_controller.update_Product)
  
module.exports = router;