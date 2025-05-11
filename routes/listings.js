import express from "express";
const router=express.Router();
import {allListings,getListing,updateListing,deleteListing,insertListing} from "../controller/listings.js"

router.get("/",async(req,res)=>{
    let data=await allListings();
    res.render("listings.ejs",{data});
})
router.get("/add",async(req,res)=>{
    res.render("add.ejs");
})
router.post("/add",async(req,res)=>{
    let {title,description,price,image,location,country}=req.body;
    let status=await insertListing(title,description,price,image,location,country);
    res.redirect("/listings");
})

router.get("/:id",async(req,res)=>{
    let {id}=req.params;
    let listing=await getListing(id);
    res.render("show.ejs",{listing});
})
router.put("/:id",async(req,res)=>{
    let {id}=req.params;
    let {title , description , price , image, location ,country}=req.body;
    let status=await updateListing(id,title,description,price,image,location,country);
    res.redirect(`/listings/${id}`);
})
router.delete("/:id",async(req,res)=>{
    let {id}=req.params;
    let status=await deleteListing(id);
    res.redirect("/listings");
})
router.post("/:id",async(req,res)=>{
    let {id}=req.params;
    let listing=await getListing(id);
    res.render("edit.ejs",{listing});
})

export default router;