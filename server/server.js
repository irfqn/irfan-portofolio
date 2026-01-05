/* eslint-disable no-undef */
const express = require("express");
const { Resend } = require("resend");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Init Resend
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// Endpoint kirim email
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validasi sederhana
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["irfanalrasyid96@gmail.com"], // ganti kalau mau
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully via Resend");
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Error sending email",
    });
  }
});

app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
