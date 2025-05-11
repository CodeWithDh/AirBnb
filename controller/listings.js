import express from 'express';
import connectDB from "../database/db.js";
import listing from "../models/listings.js";

connectDB();

export async function allListings(){
    let data= await listing.find({});
    return data;
}


export async function getListing(id){
    let idListing=await listing.findById(id);
    return idListing;
}

export async function updateListing(id,title,description,price,image,location,country){
    let status=await listing.findByIdAndUpdate(id,{title,description,price,image,location,country});
    return status;
}
export async function deleteListing(id){
    let status=await listing.findByIdAndDelete(id);
    return status;
}
export async function insertListing(title , description , price ,image, location ,country){
    let status=await new listing({title , description , price , image, location ,country});
    status.save();
    return status;
}

