import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema(
  {
    donationID: { type: String, required: true, unique: true }, // Razorpay Order ID
    fundraiserID: { type: String, required: true }, // References VerifiedCamp fundraiserID
    amount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ["pending", "success", "failed"], default: "pending" },
    razorpay_payment_id: { type: String }, // Updated after successful payment
    name: { type: String, required: true }, // Donor's name
    email: { type: String, required: true }, // Donor's email
    pancardNumber: { type: String, default: "" }, // PAN card is optional (default empty string)
  },
  { timestamps: true }
);

const Donation = mongoose.models.Donation || mongoose.model("Donation", DonationSchema);
export default Donation;