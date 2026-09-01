import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import uploadRoutes from "./routes/uploadRoutes.js";
import saveRoutes from "./routes/saveRoutes.js";
import deployRoutes from "./routes/deployRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" })); // for large HTML

// Routes
app.use("/api", uploadRoutes);
app.use("/api", saveRoutes);
app.use("/api", deployRoutes);

// Start server AFTER DB connect
async function startServer() {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB");

    // console.log("✅ MongoDB Connected");

    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });

  } catch (err) {
    console.error("❌ DB Error:", err);
  }
}

startServer();
