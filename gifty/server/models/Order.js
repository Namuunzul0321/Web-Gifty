import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customer: {
    name: {
      type: String,
      required: [true, "Хэрэглэгчийн нэр оруулна уу"],
    },
    email: {
      type: String,
      required: [true, "И-мэйл оруулна уу"],
    },
    phone: {
      type: String,
      required: [true, "Утасны дугаар оруулна уу"],
    },
    address: {
      type: String,
      required: [true, "Хүргэлтийн хаяг оруулна уу"],
    },
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["cash", "card", "qpay"],
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "processing", "delivered", "cancelled"],
    default: "pending",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
  },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
