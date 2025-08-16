import express from "express";
const router = express.Router();
import {allListings} from "../controller/listings.js"


router.get("/",async(req,res)=>{
    let data=await allListings();
    res.render("listings.ejs",{data});
})

export default router;