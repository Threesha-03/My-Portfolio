const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { sendContactNotification } = require("../utils/mailer");

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Save to MongoDB (best-effort)
  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
  } catch (err) {
    console.error("MongoDB save error:", err.message);
  }

  // Send email notification
  try {
    await sendContactNotification({ name, email, message });
    console.log(`Email notification sent for message from ${name} <${email}>`);
  } catch (err) {
    // Log but don't fail the request — the message is already saved
    console.error("Email send error:", err.message);
  }

  return res.status(201).json({ success: true, message: "Message received!" });
});

// GET /api/contact (retrieve all messages)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages." });
  }
});

module.exports = router;
