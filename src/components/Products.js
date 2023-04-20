import React, { useState, useEffect }from "react";
import{
  addProductToUserCart,
  getProducts,
  getProductsById,
  getUserCart,
  updateQuantity,
} from "../api/index.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Products.css';


export const Shop = () => {
  return <div>Ice-cream</div>
};

export default Shop;