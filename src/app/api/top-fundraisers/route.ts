import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Fundraiser from "@/models/fundraiser";

export async function GET() {
  try {
    // Connect to the database
    await connectToDB();

    // Fetch fundraisers
    const fundraisers = await Fundraiser.find({});
    
    // Filter out fundraisers with zero donations and process data
    const processedFundraisers = fundraisers
      .map((fundraiser) => {
        // Calculate days left
        const today = new Date();
        const deadline = new Date(fundraiser.deadline);
        const daysLeft = Math.max(
          Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
          0
        );

        // Calculate percentage raised
        const raisedAmount = fundraiser.raisedAmount || 0;
        const percentageRaised = Math.min(
          Math.round((raisedAmount / fundraiser.goalAmount) * 100),
          100
        );

        return {
          userID: fundraiser.userID || fundraiser._id.toString(),
          fundraiserID: fundraiser.fundraiserID,
          title: fundraiser.title,
          description: fundraiser.summary || "",
          summary: fundraiser.summary,
          category: fundraiser.category,
          patientImage: fundraiser.patientImage,
          goalAmount: fundraiser.goalAmount,
          raisedAmount: raisedAmount,
          daysLeft,
          donors: fundraiser.donors || 0,
          percentageRaised,
        };
      })
      // Filter out fundraisers with zero donations/amount
      .filter(item => item.raisedAmount > 0)
      // First sort by raisedAmount then by percentageRaised for tiebreakers
      .sort((a, b) => {
        // First compare by raised amount (descending)
        if (b.raisedAmount !== a.raisedAmount) {
          return b.raisedAmount - a.raisedAmount;
        }
        // If raised amounts are equal, compare by percentage (descending)
        return b.percentageRaised - a.percentageRaised;
      })
      .slice(0, 3); // Get top 3
    
    // If we don't have enough fundraisers with donations, get some without donations
    if (processedFundraisers.length < 3) {
      const remainingNeeded = 3 - processedFundraisers.length;
      
      const noDonatationFundraisers = fundraisers
        .filter(fundraiser => !fundraiser.raisedAmount || fundraiser.raisedAmount === 0)
        .map((fundraiser) => {
          const today = new Date();
          const deadline = new Date(fundraiser.deadline);
          const daysLeft = Math.max(
            Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
            0
          );

          return {
            userID: fundraiser.userID || fundraiser._id.toString(),
            fundraiserID: fundraiser.fundraiserID,
            title: fundraiser.title,
            description: fundraiser.summary || "",
            summary: fundraiser.summary,
            category: fundraiser.category,
            patientImage: fundraiser.patientImage,
            goalAmount: fundraiser.goalAmount,
            raisedAmount: 0,
            daysLeft,
            donors: 0,
            percentageRaised: 0,
          };
        })
        .slice(0, remainingNeeded);
      
      // Combine both arrays
      processedFundraisers.push(...noDonatationFundraisers);
    }

    return NextResponse.json(processedFundraisers);
  } catch (error) {
    console.error("Error fetching top fundraisers:", error);
    return NextResponse.json(
      { error: "Failed to fetch top fundraisers" },
      { status: 500 }
    );
  }
}