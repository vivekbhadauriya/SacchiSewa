"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { fundraisersData, Fundraiser } from "../../data/fundraisersData";

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayError {
  code: string;
  description: string;
  source: string;
  step: string;
  reason: string;
  metadata: {
    order_id: string;
    payment_id: string;
  };
}

interface RazorpayInstance {
  open: () => void;
  on: <T extends "payment.failed">(
    event: T,
    handler: T extends "payment.failed" ? (response: RazorpayError) => void : never
  ) => void;
  close: () => void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export default function Donate() {
  const { id } = useParams(); // Get fundraiser ID from the URL
  const [amount, setAmount] = useState<number | "">("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [panCard, setPanCard] = useState<string>("");
  const [fundraiserTitle, setFundraiserTitle] = useState<string>(""); // Fundraiser title state
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state
  const router = useRouter();

  

  // Fetch fundraiser details when component mounts
  useEffect(() => {
    // Fetch fundraiser details using fundraisersData
    const fetchFundraiserDetails = async () => {
      try {
        const fundraisers: Fundraiser[] = await fundraisersData(); // Fetch all fundraisers
        const fundraiser = fundraisers.find((f) => f.fundraiserID === id); // Find the fundraiser by ID

        if (fundraiser) {
          setFundraiserTitle(fundraiser.title); // Set the fundraiser title
        } else {
          setFundraiserTitle("Unknown Fundraiser"); // Fallback if not found
        }
      } catch (error) {
        console.error("Error fetching fundraiser details:", error);
        setFundraiserTitle("Unknown Fundraiser"); // Fallback on error
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    if (id) {
      fetchFundraiserDetails();
    }
  }, [id]);

  // Form validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    amount: ""
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", amount: "" };
    
    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    
    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }
    
    // Amount validation
    if (amount === "" || Number(amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const createOrder = async () => {
    // Validate form before proceeding
    if (!validateForm()) {
      return;
    }
  
    if (!fundraiserTitle) {
      alert("Fundraiser not found for this user.");
      return;
    }

    try {
      const res = await fetch("/api/createdonation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, fundraiserID: id, name, email, pancardNumber: panCard }),
      });

      const data = await res.json();
      console.log("Order Created:", data);

      if (!data.order || !data.order.id) {
        console.error("Invalid order response:", data);
        return;
      }

      const paymentData = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: Number(amount) * 100,
        currency: "INR",
        order_id: data.order.id,
        name: "Donation",
        description: `Support: ${fundraiserTitle}`,
        handler: async function (response: any) {
          console.log("Payment successful:", response);

          const verify = await fetch("/api/verifyDonation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyResult = await verify.json();
          if (verifyResult.success) {
            console.log("Verification Result:", verifyResult);
            router.push("/");
          }
        },
        prefill: {
          name,
          email,
          contact: "",
        },
        theme: { color: "#3399cc" },
      };

      if (typeof window !== "undefined") {
        const payment = new window.Razorpay(paymentData);
        payment.open();

        payment.on("payment.failed", function (response: any) {
          console.error("Payment failed:", response);
        });
      }
    } catch (error) {
      console.error("Error during payment flow:", error);
    }
  };

  return (
    <div className="flex w-screen items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-green-200">
      <Script id="razorpay-checkout" src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="flex flex-col items-center gap-6 p-8 bg-white shadow-lg rounded-md border border-gray-300 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900">
          {isLoading ? "Loading fundraiser details..." : `Donate to Support: ${fundraiserTitle}`}
        </h1>
        {/* Form fields */}
        <div className="w-full">
          <input
            type="text"
            className={`w-full p-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="w-full">
          <input
            type="email"
            className={`w-full p-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={panCard}
          onChange={(e) => setPanCard(e.target.value)}
          placeholder="Enter your PAN card number (optional)"
        />
        
        <div className="w-full">
          <input
            type="number"
            className={`w-full p-3 border ${errors.amount ? "border-red-500" : "border-gray-300"} rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={amount}
            onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
            placeholder="Enter donation amount"
          />
          {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
        </div>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md w-full transition duration-200"
          onClick={createOrder}
        >
          Donate
        </button>
      </div>
    </div>
  );
}