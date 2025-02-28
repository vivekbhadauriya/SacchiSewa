
export interface Fundraiser {
  userID: string;
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

        const response = await fetch("/api/verifiedFundraiser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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


  // Fundraiser Api Call from backend
//   export const fundraisersData2: Fundraiser[] = [
//     {
//       userID: "1",
//       title: "Kidney Transplant Fund",
//       description:
//         "Support John Doe, a father of two, in his journey to receive a life-saving kidney transplant. Every contribution brings hope.",
//       category: "Health",
      
// patientImage:
//         "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//       goalAmount: 75000,
//       raisedAmount: 25000,
//       deadline: 30,
//       donors: 200,
//       document: [
//         "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//         "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&height=200&width=300",
//       ],
//     },
//     {
//       userID: "2",
//       title: "Heart Surgery for Jane",
//       description:
//         "Help Jane Smith undergo urgent heart surgery to treat her critical condition. Your donation will save a life.",
//       category: "Health",
      
// patientImage:
//         "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&height=200&width=300",
//       goalAmount: 100000,
//       raisedAmount: 45000,
//       deadline: 20,
//       donors: 350,
//       document: [
//         "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//         "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&height=200&width=300",
//       ],
//     },
//     {
//       userID: "3",
//       title: "Cancer Treatment for Emily",
//       description:
//         "Emily is battling cancer and needs funds for her chemotherapy sessions. Let’s come together to support her fight.",
//       category: "Health",
      
// patientImage:
//         "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//       goalAmount: 60000,
//       raisedAmount: 32000,
//       deadline: 15,
//       donors: 180,
//       document: [
//         "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//         "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&height=200&width=300",
//       ],
//     },
//     {
//       userID: "4",
//         title: "Cancer Treatment for Emily",
//         description:
//           "Emily is battling cancer and needs funds for her chemotherapy sessions. Let’s come together to support her fight.",
//         category: "Health",
        
// patientImage:
//           "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//         goalAmount: 60000,
//         raisedAmount: 32000,
//         deadline: 15,
//         donors: 180,
//         document: [
//           "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//           "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&height=200&width=300",
//         ],
//       },
//       {
//         userID: "5",
//         title: "Cancer Treatment for Emily",
//         description:
//           "Emily is battling cancer and needs funds for her chemotherapy sessions. Let’s come together to support her fight.",
//         category: "Health",
        
// patientImage:
//           "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//         goalAmount: 60000,
//         raisedAmount: 32000,
//         deadline: 15,
//         donors: 180,
//         document: [
//           "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//           "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&height=200&width=300",
//         ],
//       },
//       {
//         userID: "6",
//         title: "Cancer Treatment for Emily",
//         description:
//           "Emily is battling cancer and needs funds for her chemotherapy sessions. Let’s come together to support her fight.",
//         category: "Health",
        
// patientImage:
//           "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//         goalAmount: 60000,
//         raisedAmount: 32000,
//         deadline: 15,
//         donors: 180,
//         document: [
//           "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//           "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&height=200&width=300",
//         ],
//       },
//       {
//         userID: "7",
//         title: "Cancer Treatment for Emily",
//         description:
//           "Emily is battling cancer and needs funds for her chemotherapy sessions. Let’s come together to support her fight.",
//         category: "Health",
        
// patientImage:
//           "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//         goalAmount: 60000,
//         raisedAmount: 32000,
//         deadline: 15,
//         donors: 180,
//         document: [
//           "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&height=200&width=300",
//           "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&height=200&width=300",
//         ],
//       },
//   ];
  