import SalesOrder from "../model/SalesOrder.js";

// Get all sales orders
export const getSalesOrders = async (req, res) => {
  try {
    const orders = await SalesOrder.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch records" });
  }
};

// Create a new sales order
export const createSalesOrder = async (req, res) => {
  const { orderId, buyer, merchant, status, dateTime, amount } = req.body;
  try {
    const newOrder = await SalesOrder.create({
      orderId,
      buyer,
      merchant,
      status,
      dateTime,
      amount,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: "Failed to create order" });
  }
};

// Delete a sales order by orderId
export const deleteSalesOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const deleted = await SalesOrder.destroy({
      where: { orderId },
    });
    if (deleted) {
      res.status(200).json({ message: "Delete successful" });
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};
