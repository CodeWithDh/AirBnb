import mongoose from "mongoose";
import connectDB from "./db.js"
import data from "../data.js";
import listing from "../models/listings.js"

connectDB();

const initDB=async()=>{
    await listing.deleteMany({});
    console.log(data.data);
    await listing.insertMany(data.data);
    console.log("Done")
} 

initDB();
