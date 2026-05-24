const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const contactRouter = require("./routes/contact");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// MongoDB connection (optional – app works without it)
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
