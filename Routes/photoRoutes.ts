import uploadPhoto from "../Controllers/photoUploaderr";
import express from "express"

const router=express.Router()

router.post("/add",uploadPhoto )
router.get("/allphoto")


export default router