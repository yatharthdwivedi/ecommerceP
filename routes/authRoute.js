import express from "express";
import {
  forgotController,
  logincontroller,
  registerController,
  testController,
  updateProfile,
  getOrders,
  getAllOrders,
  orderStatus,
} from "../controllers/authController.js";
import { isAdmin, signIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Register
router.post("/register", registerController);
router.post("/login", logincontroller);
router.post("/forgot-password", forgotController);

// router.get('/hi',signIn,isAdmin ,testController)

router.get("/user-auth", signIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

router.get("/admin-auth", signIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

router.put("/profile", signIn, updateProfile);

router.get("/orders", signIn, getOrders);

router.get("/all-orders", signIn, isAdmin, getAllOrders);

router.put('/order-status/:orderId',signIn,isAdmin, orderStatus)

export default router;
