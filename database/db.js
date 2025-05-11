import mongoose from "mongoose";
import listing from "../models/listings.js"


async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/airbnb")
        console.log("Connected DB")
    }catch(err){
        console.log("Fix  this : ",err);
    }
}

export default connectDB;



