import express from "express";
const  app=express();
import path from "path";
import connectDB from "./database/db.js"
import ejsMate from "ejs-mate";
import { fileURLToPath } from 'url';
import methodOverride from "method-override";

connectDB();

// models
import listing from "./models/listings.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.set("include",(path.join(__dirname,"/views/include")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs",ejsMate);
app.use(methodOverride("_method"));

// Routes
import home from "./routes/home.js";
import listings from "./routes/listings.js";



app.use("/",home);
app.use("/listings",listings)


app.listen(8080,()=>{
    console.log("http://127.0.0.1:8080");
})



