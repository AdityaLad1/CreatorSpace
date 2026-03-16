import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import User from "@/models/User";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";

export const POST = async (req) => {
  try {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) {
      return NextResponse.json({
        success: false,
        message: "Order Id not found",
      });
    }

    let user = await User.findOne({ username: p.to_username });
    const secret = user.razorpaykeysecret;

    let xx = validatePaymentVerification(
      {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
      },
      body.razorpay_signature,
      secret,
    );

    if (xx) {
      const updatePayment = await Payment.findOneAndUpdate(
        { oid: body.razorpay_order_id },
        { done: true },
      );
      return NextResponse.redirect(
        `${process.env.NEXTAUTH_URL}/${updatePayment.to_username}?paymentdone=true`,
      );
    } else {
      return NextResponse.json({
        success: false,
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    console.error(`couldn't connect DB`, error);
  }
};
