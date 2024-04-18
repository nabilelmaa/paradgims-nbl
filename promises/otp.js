const { randomInt } = require("crypto");
const nodemailer = require("nodemailer");

// Generate OTP
const otp = randomInt(10000, 100000);

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "",
    pass: ""
  }
});

// Email message options
const mailOptions = {
  from: "",
  to: "",
  subject: "OTP Verification",
  text: `Your OTP is: ${otp}`
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
