'use client';

import { useState, useEffect, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Heart, User, Timer, ChevronLeft, ChevronRight } from 'lucide-react';
import { fundraisersData, Fundraiser } from '../../data/fundraisersData';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Main component to export
export default function FundraiserDetailsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8 text-center">Loading fundraiser details...</div>}>
      <FundraiserDetailsContent />
    </Suspense>
  );
}

// Component that uses useSearchParams
function FundraiserDetailsContent() {
  const [fundraisers, setFundraisers] = useState<Fundraiser[]>([]);
  const router = useRouter();
  const { id } = useParams();
  // Move useSearchParams inside the component wrapped by Suspense
  const { useSearchParams } = require("next/navigation");
  const searchParams = useSearchParams();
  const refresh = searchParams.get('refresh');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fundraisersData();
        setFundraisers(data);
      } catch (error) {
        console.error('Error fetching fundraisers:', error);
      }
    }
    fetchData();
  }, [refresh]);

  const fundraiser = fundraisers.find((f) => f.userID === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!fundraiser) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-gray-500">Fundraiser not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const percentageRaised = Math.min(
    Math.round((fundraiser.raisedAmount / fundraiser.goalAmount) * 100),
    100
  );

  const formatNumber = (number: number) =>
    `₹${new Intl.NumberFormat("en-IN").format(number)}`;

  const handleDonate = () => {
    router.push(`/donate/${fundraiser.fundraiserID}`);
  };

  const images = fundraiser.medicalDocuments?.filter((img) => img) || [];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  console.log(fundraiser.summary,"summ")
  const deadline = fundraiser.deadline
    ? Math.max(0, Math.ceil((new Date(fundraiser.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : 0;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{fundraiser.title}</CardTitle>
          <CardDescription>{fundraiser.category}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={images[currentImageIndex] || '/placeholder.svg'}
                alt={`Image ${currentImageIndex + 1} for ${fundraiser.title}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <Button variant="outline" size="icon" onClick={prevImage} className="rounded-full bg-white/70 hover:bg-white/90">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextImage} className="rounded-full bg-white/70 hover:bg-white/90">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">About this fundraiser</h2>
                <p className="text-gray-600">{fundraiser.description}</p>
              </div>
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
                    <p className="font-bold">{formatNumber(fundraiser.raisedAmount)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Goal</p>
                    <p className="font-bold">{formatNumber(fundraiser.goalAmount)}</p>
                  </div>
                </div>
      
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Timer size={16} /> {deadline} days left
                  </span>
                  <span className="flex items-center gap-1">
                      {fundraiser.donors > 0 ? fundraiser.donors : 0} donors <User size={16} />
                    </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">More details</h3>
             
                  {fundraiser.summary !== "" ? (
                    <p>{fundraiser.summary}</p>
                  ) : (
                    <></>
                  )}
                </div>

                <button
                  onClick={handleDonate}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
                  aria-label={`Donate to ${fundraiser.title}`}
                >
                  <Heart size={18} />
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}