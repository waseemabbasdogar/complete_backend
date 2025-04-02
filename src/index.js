// import mongoose from 'mongoose'
// import { DB_NAME } from './constants';


// function connectDB(){};

// connectDB();

// use IIFI 


// require('dotenv').config({path: "./env"})
import connectDB from "./db/index.js";



import dotenv from 'dotenv'

dotenv.config({
    path: "./env"
})

connectDB()








/*

import express from 'express'
const app = express()

// use ; before IIFI professional approach
( async()=> {
    try {
        await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
        app.on("error", ()=>{
            console.log("ERROR", error);
            throw error
        });

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR", error);
        // console.error("ERROR", error);
        throw error
    }
})()

*/