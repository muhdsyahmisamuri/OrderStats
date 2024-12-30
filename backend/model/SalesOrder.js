import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const SalesOrder = sequelize.define("SalesOrder", {
  orderId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  buyer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  merchant: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default SalesOrder;
