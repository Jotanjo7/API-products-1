import { Router } from "express";
import { createProduct } from "../controllers/createProduct.controller.js";
import { patchProducts } from "../controllers/patchProducts.controller.js";

const router = Router();

router.post("/products", createProduct);
router.patch("/products/:id", patchProducts);


export default router;