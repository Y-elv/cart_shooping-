import {addToCart, deleteCart, viewCart,updateCart } from "../Controllers/cart";
import express from "express"

const router=express.Router()

router.post("/addToCart", addToCart)
router.delete("/deleteCart", deleteCart)
router.get("/viewCart", viewCart)
router.put("/update",updateCart)

export default router