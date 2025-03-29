import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import nodemailer from "nodemailer";

dotenv.config({ path: "./config/config.env" });

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

// function sendMail(to,sub,msg){
//   transporter.sendMail({
//     to:to,
//     subject:sub,
//     html:msg
//   })
//   console.log("email sent!")
// }
// sendMail("amanhussainkhan3@gmail.com","this is subject","this is some message")

// Configure CORS

app.use(cors({
  origin: "https://porfolio-2025-frontend.vercel.app/",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
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


// Contact form API
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  console.log("Received message:", req.body);
  res.json({ success: true, message: "Message sent successfully!" });
});

// Initialize AI
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

// AI Chatbot API
app.post("/api/ai-chat", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: message }] }],
    });

    const aiReply = response?.text || "Sorry, I couldn't understand that. 🤖";
    res.json({ success: true, reply: aiReply });
  } catch (error) {
    console.error("AI Chat Error:", error);
    res.status(500).json({ error: "Failed to get AI response" });
  }
});

app.get('/',(req,res)=>{
    res.json({message:"Backend is running..."});
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
