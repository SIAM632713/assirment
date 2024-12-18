const express = require('express');
const router=require('./src/routes/api')
const app=new express();


const rateLimit=require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const path=require('path');
const mongoose = require("mongoose");


let URL="mongodb+srv://RAS808:siam123@cluster0.2suav.mongodb.net/project";
let option={user:'RAS808',pass:"siam123",autoIndex:true}
mongoose.connect(URL,option).then((res)=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log("mongodb disconnected");
})


app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ extended: '50mb' }));


const limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

app.set('etag',false)
app.use("/api",router)

module.exports = app;