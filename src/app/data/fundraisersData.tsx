
export interface Fundraiser {
  userID: string;
  fundraiserID:string,
  title: string;
  description: string;
  category: string;
  patientImage: string;
  goalAmount: number;
  raisedAmount: number;
  deadline: Date;
  donors: number;
  document?: string[];
}
// Function to fetch fundraiser data from the API without transforming
export const fundraisersData = async (): Promise<Fundraiser[]> => {
  try {
    console.log("Fetching Fundraiser data...");

    const response = await fetch(`/api/verifiedFundraiser?timestamp=${new Date().getTime()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const fundData: Fundraiser[] = await response.json();
    console.log("Fetched Fundraiser Data:", fundData);

    return fundData; // Return raw data without transformation
  } catch (error) {
    console.error("Error fetching fundraiser data:", error);
    return []; // Return empty array on error
  }
};

