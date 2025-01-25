import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function NewsletterDownload() {
  return (
    <section className="bg-[#F8FAFF] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Newsletter Signup */}
          <div className="w-full md:w-auto">
            <h2 className="text-[#003087] text-3xl font-bold mb-2">Sign Up For Newsletter</h2>
            <p className="text-gray-600 mb-6">Join 60,000+ Subscribers and get a new discount coupon every saturday</p>
            <div className="flex justify-start sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-6 py-2 w-full sm:w-80 border-0 rounded-full bg-white"
              />
              <Button className="bg-[#003087] hover:bg-[#002266] text-white rounded-full px-8">SUBSCRIBE</Button>
            </div>
          </div>

          {/* App Download */}
          <div className="text-center md:text-right">
            <h2 className="text-2xl font-bold mb-4">Download the app now!</h2>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <a href="#" className="inline-block">
                <Image
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-[53px] w-auto"
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src="/app-store-removebg-preview.png"
                  alt="Download on the App Store"
                  width={180}
                  height={53}
                  className="h-[53px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

