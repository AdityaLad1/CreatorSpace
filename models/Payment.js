import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const PaymentSchema = new Schema({
  name: { type: String, require: true },
  to_username: { type: String, require: true },
  oid: { type: String, require: true },
  message: String,
  amount: { type: Number, require: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
});

export default mongoose.models.Payment || model("Payment", PaymentSchema);
