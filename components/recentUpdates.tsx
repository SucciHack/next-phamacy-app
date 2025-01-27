import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function RecentUpdates() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003087] mb-4">Recent Updation</h2>
          <p className="text-gray-600 mb-2">Accumsan lacus vel facilisis volutpat est velit egestas dui id.</p>
          <p className="text-gray-600">Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/nurse-wearing-scrubs.jpg" alt="Emergency Preparedness"
               className="object-cover" 
               width={500}  height={500}
               />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span>June 23, 2023</span>
                <span>|</span>
                <span>2 Comments</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003087] mb-4">Enhancing Emergency Preparedness</h3>
              <Button
                variant="default"
                className="bg-[#003087] hover:bg-[#002266] text-white rounded-full px-6"
                asChild
              >
                <a href="#">READ MORE</a>
              </Button>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/consultationDoctor.webp" alt="Patient Advocacy" fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span>June 23, 2023</span>
                <span>|</span>
                <span>2 Comments</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003087] mb-4">The Importance Of Patient Advocacy</h3>
              <Button
                variant="default"
                className="bg-[#003087] hover:bg-[#002266] text-white rounded-full px-6"
                asChild
              >
                <a href="#">READ MORE</a>
              </Button>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/doctors-doing-surgical.jpg" alt="Standing With Patients" fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span>June 23, 2023</span>
                <span>|</span>
                <span>1 Comment</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003087] mb-4">Standing With Patients Beyond The Clinic</h3>
              <Button
                variant="default"
                className="bg-[#003087] hover:bg-[#002266] text-white rounded-full px-6"
                asChild
              >
                <a href="#">READ MORE</a>
              </Button>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image src="/hero-doctor.jpg" alt="Multidisciplinary Research" fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span>June 23, 2023</span>
                <span>|</span>
                <span>1 Comment</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003087] mb-4">Doctors Driving Multidisciplinary Research</h3>
              <Button
                variant="default"
                className="bg-[#003087] hover:bg-[#002266] text-white rounded-full px-6"
                asChild
              >
                <a href="#">READ MORE</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

