import Cart from "../models/Cart.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const addCart = async (req, res) => {
  try {
    // const userId = req.user._id
    const { productId, quantity, price } = req.body;
    const user = req.user._id;

    const cart = await new Cart({
      products: productId,
      quantity: quantity,
      price: price,
      user: req.user._id,
    }).save();

    res.status(200).send({
      success: true,
      message: "Item Added",
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in add item to cart",
      error,
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId);
    const cartItem = await Cart.find({ user: userId }).populate("products");

    res.status(200).send({
      success: true,
      message: "Cart",
      cartItem,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting the cart",
      error,
    });
  }
};

export const deleteCart = async (req, res) => {
  // const {cartId} = req.params
  try {
    const cart = await Cart.findByIdAndDelete(req.params.cid);
    res.status(200).send({
      success: true,
      message: "deleted",
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting the cart",
      error,
    });
  }
};
