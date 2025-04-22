import express from "express";
import cors from "cors";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from 'bcrypt';
import { GoogleGenAI } from "@google/genai";
import nodemailer from "nodemailer";
import RegisterUser from './Model/CommunityUsers.js';

dotenv.config({ path: "./config/config.env" });

// console.log(RegisterUser)


const SecretKey = process.env.JWT_SECRET;
if (!SecretKey) {
  console.error("Missing JWT_SECRET in environment variables!");
  process.exit(1); // Prevent server from starting
}


const app = express();
const PORT = process.env.PORT || 3001;
const PASSWORD = process.env.EMAIL_PASS
// email functionality
const transporter= nodemailer.createTransport({
  secure:true,
  host:"smtp.gmail.com",
  port: 465,
  auth:{
    user:'amanhussainkhan3@gmail.com',
    pass: PASSWORD
  }
});

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());

// Email route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    await transporter.sendMail({
      to: "amanhussainkhan3@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.get('/',(req,res)=>{
    res.json({message:"Backend is running..."});
})

// community login register API
app.get('/community/members',async(req,res)=>{
  try {
    const allMembers = await RegisterUser.find();
    res.status(200).json({success:true,message:"All members data",data:allMembers})
    
  } catch (error) {
    res.status(500).json({success:false,message:"server api error",error:error})
  }
})

app.post('/community/login',async(req,res)=>{
  try {
    const {Username,Password} = req.body;
    if(!Username || !Password){
      return res.status(404).json({ success: false, message: "All field required!" });
    }

    const existUser = await RegisterUser.findOne({Username});
    if(!existUser){
      return res.status(404).json({ success: false, message: "User not found" });
    }
    // compare hashed password

    console.log(Password)
    console.log(existUser.Password)

    const comparePassword = await bcrypt.compare(Password,existUser.Password);

    if(!comparePassword){
      return res.status(401).json({success:false,message:"Incorrect Password!"});
    }
    const token = await jwt.sign({id:existUser._id,Email:existUser.Email},SecretKey,{expiresIn:'1h'})

    res.status(200).json({ success: true, message: "Login successful!",token:token });
  } catch (error) {  
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
     
})
app.post('/community/register',async(req,res)=>{
     try {
      const {Username,Email,Password} =req.body;
      if(!Username || !Email || !Password){
       return res.status(400).json({success:false,message:"Missing credentials"})       
      }
      const isUserExist = await RegisterUser.findOne({Email});
       if(isUserExist){
       return res.status(401).json({success:false,message:"User Already Exists!"})
       }
    // encrypt password ==>
      const hashedPassword = await bcrypt.hash(Password,10);


      const newRegisteredUser = await RegisterUser.create({Username,Email,Password:hashedPassword});
       res.status(200).json({success:true,message:"New User Registered!"})
     } catch (error) {
        res.status(500).json({success:false,message:"server api error",error:error})
     }
})
app.post('/community/user/profile',async(req,res)=>{
  try {
      const token = req.headers.authorization.split(' ')[1]
      if(!token) return res.status(200).json({success:false,message:"Access Denied",data:token})

        jwt.verify(token,SecretKey, async(err,decoded)=>{
          const user = await RegisterUser.findById(decoded?.id);
          if (err) {
            return res.status(401).json({ success: false, message: "Invalid or expired token" });
          }
          const userData = {
            id:user?.id,
            name:user?.Username,
            email:user?.Email
          }
          res.status(200).json({success:true,message:"User Data",data:userData})
        })
      } catch (error) {
        
     return  res.status(500).json({success:false,error:error})
  }
})


// db connection 

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>{
  console.log("DB: New Portfolio 2025 is connected")
  // Start server
  app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
  });
}).catch((error)=>{
  console.log(error,"error connecting db and server")
})

