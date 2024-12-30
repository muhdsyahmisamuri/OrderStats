import express from "express";
import {
  getSalesOrders,
  createSalesOrder,
  deleteSalesOrder,
} from "../controller/salesController.js";

const router = express.Router();

// GET all sales orders
router.get("/sales-orders", getSalesOrders);

// POST a new sales order
router.post("/sales-orders", createSalesOrder);

// DELETE a sales order by orderId
router.delete("/del-sales-orders/:orderId", deleteSalesOrder);

export default router;
