import { Calendar, Headphones, Mail, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free Shipping World wide",
  },
  {
    icon: Mail,
    title: "Easy to Track Orders",
    description: "Easy to Track Orders",
  },
  {
    icon: Headphones,
    title: "24hrs Customer Support",
    description: "Free Shipping World wide",
  },
  {
    icon: Calendar,
    title: "On Time Delivery",
    description: "Free Shipping World wide",
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full min-h-[150px] bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent text-black">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

