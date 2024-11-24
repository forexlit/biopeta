import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: String,
    lastName: String,
    email: String,
  },
  { collection: "cortiway" }
); // Explicitly specifying the collection name

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
