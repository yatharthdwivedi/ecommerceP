import express from "express";
import {
  braintreePayment,
  braintreeToken,
  createProduct,
  getProduct,
  getSingleProduct,
  productCategory,
  productCount,
  productDelete,
  productFilter,
  productList,
  productPhotoController,
  searchProductController,
  similarProducts,
  updateProduct,
} from "../controllers/productControllers.js";
import { isAdmin, signIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

router.post("/create-product", signIn, isAdmin, formidable(), createProduct);

router.get("/get-product", getProduct);

router.get("/get-product/:slug", getSingleProduct);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/product-delete/:pid", signIn, isAdmin, productDelete);

router.put(
  "/update-product/:pid",
  signIn,
  isAdmin,
  formidable(),
  updateProduct
);

router.post("/product-filter", productFilter);

router.get("/product-count", productCount);

router.get("/product-list/:page", productList);

router.get("/search/:keyword", searchProductController);

router.get("/similar-product/:pid/:cid", similarProducts);

router.get("/product-category/:slug", productCategory);

router.get("/braintree/token", braintreeToken);

router.post("/braintree/payment", signIn, braintreePayment);

export default router;
