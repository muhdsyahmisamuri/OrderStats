import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sequelize from "./config/database.js";
import salesRoutes from "./routes/salesRoutes.js";
import initDatabase from "./config/initDatabase.js";
import SalesOrder from "./model/SalesOrder.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", salesRoutes);

// Initialize database and start the server
const startServer = async () => {
  try {
    // Ensure the database exists
    await initDatabase();

    // Sync Sequelize models
    await sequelize.sync({ alter: true });
    console.log("Database connected and synchronized");

    // Get the __dirname equivalent for ES Modules
    const __filename = fileURLToPath(import.meta.url); // Get current file path
    const __dirname = path.dirname(__filename); // Get the directory name

    // Read mock data from JSON file and insert into the database
    const mockDataFile = path.join(__dirname, "mock", "mockData.json");
    const rawMockData = JSON.parse(fs.readFileSync(mockDataFile, "utf-8"));

    // Ensure you're accessing the 'salesOrders' array in the mock data
    const mockOrders = rawMockData.salesOrders;

    // Insert mock data into the database
    await SalesOrder.bulkCreate(mockOrders, { ignoreDuplicates: true });
    console.log("Mock data inserted");

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();
