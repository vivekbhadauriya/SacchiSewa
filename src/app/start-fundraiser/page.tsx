'use client'

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  CheckCircle2 } from 'lucide-react'

type FormData = {
  email: string
  password: string
  fundType: string
  beneficiary: string
  phone: string
  countryCode: string
  fundraiserName: string
  goalAmount: string
  title: string
  category: string
  bankDetails: {
    accountNumber: string
    ifscCode: string
    branchAddress: string
  }
  deadline: string
  fundraiserImage: FileList
  medicalDocuments: FileList
}

const steps = [
  { title: "Basic Info", icon: "1" },
  { title: "Fundraiser Details", icon: "2" },
  { title: "Documents", icon: "3" },
]

export default function FundraiserForm() {
  const [step, setStep] = useState(1)
  const { register, handleSubmit, formState: { errors, isValid }, trigger } = useForm<FormData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Handle fundraiser image upload
      if (data.fundraiserImage?.[0]) {
        const imageFormData = new FormData()
        imageFormData.append('file', data.fundraiserImage[0])
        imageFormData.append('upload_preset', 'fundraiser_images')
        const imageRes = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: imageFormData
          }
        )
        const imageData = await imageRes.json()
        data.fundraiserImage = imageData.secure_url
      }

      // Handle multiple medical documents upload
      if (data.medicalDocuments && data.medicalDocuments.length > 0) {
        const uploadPromises = Array.from(data.medicalDocuments).map(file => {
          const docFormData = new FormData()
          docFormData.append('file', file)
          docFormData.append('upload_preset', 'medical_documents')
          return fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: 'POST',
              body: docFormData
            }
          ).then(res => res.json())
        })

        const uploadedDocs = await Promise.all(uploadPromises)
        data.medicalDocuments = uploadedDocs.map(doc => doc.secure_url) as unknown as FileList
      }

      // Send data to backend
      const response = await fetch('/api/fundraiser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      // handle error 
     //  if (!response.ok) throw new Error('Failed to create fundraiser')
      
      // Handle success (e.g., redirect to success page)
      console.log('Fundraiser created successfully')
    } catch (error) {
      console.error('Error:', error)
      // Handle error (show error message to user)
    }
  }

  const nextStep = async () => {
    const fields = getFieldsForStep(step)
    const isStepValid = await trigger(fields as (keyof FormData)[])
    if (isStepValid) {
      setStep(prev => Math.min(prev + 1, 3))
    }
  }

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1:
        return ['email', 'password', 'fundType', 'beneficiary', 'countryCode', 'phone']
      case 2:
        return ['fundraiserName', 'goalAmount', 'title', 'category', 'deadline', 'bankDetails.accountNumber', 'bankDetails.ifscCode', 'bankDetails.branchAddress']
      case 3:
        return ['fundraiserImage', 'medicalDocuments']
      default:
        return []
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-200 py-16 flex items-center justify-center ">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Start a Fundraiser</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {steps.map((s, index) => (
                <div key={s.title} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step > index
                        ? 'bg-green-500 text-white'
                        : step === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step > index ? <CheckCircle2 className="w-6 h-6" /> : s.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-1 ${
                        step > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((s) => (
                <div key={s.title} className="text-center">
                  <p className="text-sm font-medium">{s.title}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <div>
                  <Label htmlFor="fundType">I am raising fund for</Label>
                  <Select onValueChange={(value) => register("fundType").onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fund type"  />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-600">
                      <SelectItem value="medical " className="text-white">Medical</SelectItem>
                      <SelectItem value="education" className="text-white">Education</SelectItem>
                      <SelectItem value="emergency" className="text-white">Emergency</SelectItem>
                      <SelectItem value="other" className="text-white">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.fundType && <p className="text-red-500 text-sm mt-1">{errors.fundType.message}</p>}
                </div>
                <div>
                  <Label htmlFor="beneficiary">I am raising fund to help</Label>
                  <Select onValueChange={(value) => register("beneficiary").onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select beneficiary" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-600">
                      <SelectItem value="myself" className="text-white">Myself</SelectItem>
                      <SelectItem value="family" className="text-white">Family Member</SelectItem>
                      <SelectItem value="friend" className="text-white">Friend</SelectItem>
                      <SelectItem value="other" className="text-white">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.beneficiary && <p className="text-red-500 text-sm mt-1">{errors.beneficiary.message}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex">
                    <Input
                      className="w-20 mr-2"
                      placeholder="+91"
                      {...register("countryCode", { required: "Country code is required" })}
                    />
                    <Input
                      className="flex-1"
                      placeholder="Enter your mobile number"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                  </div>
                  {(errors.countryCode || errors.phone) && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fundraiserName">Fundraiser Name</Label>
                  <Input
                    id="fundraiserName"
                    {...register("fundraiserName", { required: "Fundraiser name is required" })}
                  />
                  {errors.fundraiserName && <p className="text-red-500 text-sm mt-1">{errors.fundraiserName.message}</p>}
                </div>
                <div>
                  <Label htmlFor="goalAmount">Goal Amount</Label>
                  <Input
                    id="goalAmount"
                    type="number"
                    {...register("goalAmount", { required: "Goal amount is required" })}
                  />
                  {errors.goalAmount && <p className="text-red-500 text-sm mt-1">{errors.goalAmount.message}</p>}
                </div>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    {...register("title", { required: "Title is required" })}
                  />
                  {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => register("category").onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-600">
                      <SelectItem value="heart" className="text-white">Heart</SelectItem>
                      <SelectItem value="kidney" className="text-white">Kidney</SelectItem>
                      <SelectItem value="medical" className="text-white">Medical</SelectItem>
                      <SelectItem value="other" className="text-white">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>
                <div>
                  <Label htmlFor="deadline">Fundraiser Deadline</Label>
                  <Input
                    id="deadline"
                    type="date"
                    {...register("deadline", { required: "Deadline is required" })}
                  />
                  {errors.deadline && <p className="text-red-500 text-sm mt-1">{errors.deadline.message}</p>}
                </div>
                <div>
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input
                    id="accountNumber"
                    {...register("bankDetails.accountNumber", { required: "Account number is required" })}
                  />
                  {errors.bankDetails?.accountNumber && <p className="text-red-500 text-sm mt-1">{errors.bankDetails.accountNumber.message}</p>}
                </div>
                <div>
                  <Label htmlFor="ifscCode">IFSC Code</Label>
                  <Input
                    id="ifscCode"
                    {...register("bankDetails.ifscCode", { required: "IFSC code is required" })}
                  />
                  {errors.bankDetails?.ifscCode && <p className="text-red-500 text-sm mt-1">{errors.bankDetails.ifscCode.message}</p>}
                </div>
                <div>
                  <Label htmlFor="branchAddress">Branch Address</Label>
                  <Textarea
                    id="branchAddress"
                    {...register("bankDetails.branchAddress", { required: "Branch address is required" })}
                  />
                  {errors.bankDetails?.branchAddress && <p className="text-red-500 text-sm mt-1">{errors.bankDetails.branchAddress.message}</p>}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fundraiserImage">Fundraiser Image</Label>
                  <Input
                    id="fundraiserImage"
                    type="file"
                    accept="image/*"
                    {...register("fundraiserImage", { required: "Fundraiser image is required" })}
                  />
                  {errors.fundraiserImage && <p className="text-red-500 text-sm mt-1">{errors.fundraiserImage.message}</p>}
                </div>
                <div>
                  <Label htmlFor="medicalDocuments">Medical Documents (JPG)</Label>
                  <Input
                    id="medicalDocuments"
                    type="file"
                    accept=".jpg,.jpeg"
                    multiple
                    {...register("medicalDocuments", { required: "At least one medical document is required" })}
                  />
                  {errors.medicalDocuments && <p className="text-red-500 text-sm mt-1">{errors.medicalDocuments.message}</p>}
                </div>
                <p className="text-sm text-gray-500">You can upload multiple documents. Select all the files you want to upload at once.</p>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button type="button" onClick={nextStep} className="ml-auto" disabled={!isValid}>
                  Next
                </Button>
              ) : (
                <Button type="submit" className="ml-auto" disabled={!isValid}>
                  Submit
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

