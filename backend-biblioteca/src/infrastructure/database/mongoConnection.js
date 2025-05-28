require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📦 Conectado a MongoDB Atlas correctamente");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB Atlas:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
