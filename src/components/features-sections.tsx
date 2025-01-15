import { Card, CardContent } from "@/components/ui/card"
import { Percent, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Percent,
    title: "0% Platform Fees",
    description: "We don't charge any platform fees on your fundraiser"
  },
  {
    icon: Clock,
    title: "Quick Funds Disbursal",
    description: "Get your funds quickly and securely"
  },
  {
    icon: Users,
    title: "1000+ People Supported",
    description: "Join our growing community of changemakers"
  }
]

export function FeaturesSection() {
  return (
    <section className="container py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Why Choose SacchiSewa?</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <CardContent className="flex flex-col items-center p-6 text-center h-full">
              <div className="bg-green-100 p-4 rounded-full mb-6">
                <feature.icon className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
