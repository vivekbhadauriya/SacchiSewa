import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Fundraiser from "@/models/fundraiser";
import VerifiedCamp from "../../../models/verifiedFundCamp"
export async function GET() {
  try {
    await connectToDB();

    // Fetch the top 3 fundraisers sorted by raisedAmount (descending)
    const topFundraisers = await VerifiedCamp.find({})
      .sort({ raisedAmount: -1 }) // Highest raisedAmount first
      .limit(3)
      .lean();
      console.log(topFundraisers);

    // Process fundraisers for frontend response
    const processedFundraisers = topFundraisers.map((fundraiser) => {
      const today = new Date();
      const deadline = new Date(fundraiser.deadline);
      const daysLeft = Math.max(
        Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
        0
      );

      const raisedAmount = fundraiser.raisedAmount || 0;
      const percentageRaised = fundraiser.goalAmount
        ? Math.min(Math.round((raisedAmount / fundraiser.goalAmount) * 100), 100)
        : 0;

      return {
        userID: fundraiser.userID || fundraiser._id.toString(),
        fundraiserID: fundraiser.fundraiserID,
        title: fundraiser.title,
        description: fundraiser.summary || "",
        category: fundraiser.category,
        patientImage: fundraiser.patientImage,
        goalAmount: fundraiser.goalAmount,
        raisedAmount,
        daysLeft,
        donors: fundraiser.donors || 0,
        percentageRaised,
      };
    });

    return NextResponse.json(processedFundraisers);
  } catch (error) {
    console.error("Error fetching top fundraisers:", error);
    return NextResponse.json({ error: "Failed to fetch top fundraisers" }, { status: 500 });
  }
}
