import  mongoose from "mongoose";
const Schema=mongoose.Schema

let listingSchema=new Schema({
    title: {
        type:String,
        required:true
    },
    description: String,
    image:{
        type:String,
        filename:String,
        url:String,
        default:"https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs=",
        set:(v)=>{
           return v===""?"https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs=":v; 
        }
    },
    price:Number,
    location:String,
    country:String,
});

const listing=mongoose.model("listing",listingSchema)
 export default listing;