import Razorpay from "razorpay";
import mongoose from "mongoose";
import { connectToDB } from "@/utils/database";
import Donation from "@/models/donations";
import VerifiedCamp from "@/models/verifiedCamp"; // Replaced Fundraiser with VerifiedCamp
import { NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fundraiserID, userID, amount } = req.body;

  if (!fundraiserID || !userID || !amount) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const token = await req.cookies.get("authToken");
    if (!token) {
      return NextResponse.json({ error: "Unauthorized: Token not provided" }, { status: 401 });
    }

    let decoded;
    try {
      decoded = verifyToken(token.value);
    } catch (err) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    const userID = decoded.id;
    await connectToDB();

    // Create Razorpay Order
    const options = {
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: `receipt_${Math.random() * 10000}`,
    };
    const order = await razorpay.orders.create(options);

    // Save Donation details in MongoDB
    const donation = new Donation({
      donationID: order.id,
      fundraiserID,
      userID,
      amount,
      paymentStatus: "pending",
    });
    await donation.save();

    res.status(200).json({ success: true, order, donationID: donation._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
}