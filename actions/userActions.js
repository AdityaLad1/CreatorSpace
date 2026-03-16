"use server";

import Razorpay from "razorpay";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";

export const initiate = async (amount, to_username, paymentForm) => {
  try {
    await connectDB();
    let user = await User.findOne({ username: to_username });
    const secret = user.razorpaykeysecret;
    const rid = user.razorpaykeyid;
    var instance = new Razorpay({
      key_id: rid,
      key_secret: secret,
    });

    let options = {
      amount: Number(amount),
      currency: "INR",
    };

    let x = await instance.orders.create(options);
    await Payment.create({
      oid: x.id,
      amount: amount / 100,
      to_username: to_username,
      name: paymentForm.name,
      message: paymentForm.message,
    });
    return x;
  } catch (error) {
    console.error("Couldn't connet to DB", error);
  }
};

export const fetchuser = async (username) => {
  try {
    await connectDB();
    const user = await User.findOne({ username: username }).lean();
    return JSON.parse(JSON.stringify(user)) || null;
  } catch (error) {
    console.error("User fetch error:", error);
    return null;
  }
};

export const fetchPayments = async (username) => {
  await connectDB();
  let p = await Payment.find({ to_username: username, done: true })
    .sort({ amount: -1 })
    .lean();
  return JSON.parse(JSON.stringify(p)) || null;
};

export const updateProfile = async (data, oldUsername) => {
  await connectDB();
  let ndata = data;
  if (oldUsername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "User already exists" };
    }
    await User.updateOne({ email: ndata.email }, ndata);
    await Payment.updateMany(
      { to_username: oldUsername },
      { to_username: ndata.username },
    );
  } else {
    await User.updateOne({ email: ndata.email }, { $set: ndata });
  }
};
