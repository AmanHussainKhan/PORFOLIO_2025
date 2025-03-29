const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true, // Use true for port 465
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables
    pass: process.env.EMAIL_PASS,        
  },
});

const sendMail = async (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "amanhussainkhan17@gmail.com",
    subject: "Message from My Website",
    text: "hello ji",
  };

  try {
    const emailRes = await transporter.sendMail(mailOptions);
    console.log("SUCCESS", emailRes);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).send("Error sending email.");
  }
};

module.exports = sendMail;
