import { Router } from "express";
import { createProduct } from "../controllers/createProduct.controller.js";
import { patchProducts } from "../controllers/patchProducts.controller.js";
import { idProduct } from "../controllers/idProduct.controller.js";

const router = Router();

router.post("/products", createProduct);
router.patch("/products/:id", patchProducts);
router.get("products/:id", idProduct);

export default router;