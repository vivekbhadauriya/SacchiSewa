import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema(
  {
    donationID: { type: String, required: true, unique: true }, // Razorpay Order ID
    fundraiserID: { type: mongoose.Schema.Types.ObjectId, ref: "Fundraiser", required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ["pending", "success", "failed"], default: "pending" },
    razorpay_payment_id: { type: String }, // Updated after successful payment
  },
  { timestamps: true }
);

// Check if model already exists to prevent overwriting in hot-reloading environments
const Donation = mongoose.models.Donation || mongoose.model("Donation", DonationSchema);

export default Donation;
