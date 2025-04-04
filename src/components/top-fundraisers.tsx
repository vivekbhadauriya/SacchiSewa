"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Timer, User } from "lucide-react";

export interface Fundraiser {
  userID: string;
  title: string;
  description?: string;
  summary?: string;
  category: string;
  patientImage: string;
  goalAmount: number;
  raisedAmount: number;
  daysLeft: number;
  donors: number;
  fundraiserID?: string;
  medicalDocuments?: string[];
}

const formatNumber = (number: number) =>
  `₹${new Intl.NumberFormat("en-IN").format(number)}`;

interface FundraiserCardProps {
  fundraiser: Fundraiser;
  onDonate: (userID: string) => void;
}

function FundraiserCard({ fundraiser, onDonate }: FundraiserCardProps) {
  const raisedAmount = typeof fundraiser.raisedAmount === 'number' ? fundraiser.raisedAmount : 0;
  const percentageRaised = fundraiser.goalAmount > 0 
    ? Math.min(Math.round((raisedAmount / fundraiser.goalAmount) * 100), 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 m-2 p-4 w-[360px]">
      <img
        src={fundraiser.patientImage}
        alt={`Image for ${fundraiser.title}`}
        className="w-full h-48 object-cover rounded-md"
        onError={(e) => {
          e.currentTarget.src = "/placeholder-fundraiser.jpg";
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          <Link href={`/fundraiser/${fundraiser.fundraiserID}`} className="hover:underline">
            {fundraiser.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {fundraiser.description || fundraiser.summary || "Help support this cause"}
        </p>
        <div className="mt-4 space-y-3">
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            <div
              className="absolute top-0 left-0 bg-green-500 h-2 rounded-full"
              style={{ width: `${percentageRaised}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <div>
              <p className="text-gray-500">Raised</p>
              <p className="font-bold">{formatNumber(raisedAmount)}</p>
            </div>
            <div>
              <p className="text-gray-500">Goal</p>
              <p className="font-bold">{formatNumber(fundraiser.goalAmount)}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Timer size={16} /> {fundraiser.daysLeft} days left
            </span>
            <span className="flex items-center gap-1">
              {fundraiser.donors > 0 ? fundraiser.donors : 0} donors <User size={16} />
            </span>
          </div>
          <button
            onClick={() => onDonate(fundraiser.fundraiserID!)} // Use fundraiserID here
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
            aria-label={`Donate to ${fundraiser.title}`}
          >
            <Heart size={18} />
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TopFundraisers() {
  const [topFundraisers, setTopFundraisers] = useState<Fundraiser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams(); // Add this
  const refresh = searchParams.get('refresh');

  useEffect(() => {
    const fetchTopFundraisers = async () => {
      try {
        setIsLoading(true);
        // Add cache-busting query parameter
        console.log('inside the fundraisers of top');
        const response = await fetch(`/api/top-fundraisers?t=${Date.now()}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Top fundraisers data:", data);
        
        // Ensure data is valid and has the expected structure
        if (Array.isArray(data)) {
          setTopFundraisers(data);
        } else {
          console.error("Invalid data format received:", data);
          setError("Invalid data format received from server");
        }
      } catch (error) {
        console.error("Error fetching top fundraisers:", error);
        setError("Failed to load top fundraisers");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopFundraisers();
  }, [refresh]);

  const handleDonate = (fundraiserID: string) => {
    // Navigate to the donate page using fundraiserID
    window.location.href = `/donate/${fundraiserID}`;
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 to-green-200 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="mb-8 text-center text-4xl font-extrabold">
          Our Top Fundraisers
        </h2>
        
        {isLoading && (
          <div className="text-center py-8">
            <p>Loading top fundraisers...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-8 text-red-500">
            <p>{error}</p>
          </div>
        )}
        
        {!isLoading && !error && topFundraisers.length === 0 && (
          <div className="text-center py-8">
            <p>No fundraisers available at the moment.</p>
          </div>
        )}
        
        {!isLoading && topFundraisers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topFundraisers.map((fundraiser) => (
              <FundraiserCard
                key={fundraiser.userID}
                fundraiser={fundraiser}
                onDonate={handleDonate}
              />
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="bg-green-600 hover:bg-green-700 text-white border-transparent shadow-md px-8 py-3"
          >
            <Link href="/fundraisers">See More Fundraisers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}