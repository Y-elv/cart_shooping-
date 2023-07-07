import {addToCart, deleteCart, viewCart,updateCart } from "../Controllers/cart";
import express from "express"

const router=express.Router()

router.post("/addToCart", addToCart)
router.delete("/deleteCart/:id", deleteCart)
router.get("/viewCart", viewCart)
router.put("/update/:id",updateCart)

export default router