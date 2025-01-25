"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What kind of services do you offer?",
    answer:
      "Proin porttitor non magna eget convallis. Nam posuere rhoncus nisi, consequat porttitor felis blandit sit amet. Morbi dignissim blandit ligula ut tincidunt. Morbi dolor felis, placerat a maximus vitae, placerat ut magna. Cras bibendum dignissim mauris ut blandit. Phasellus dictum volutpat tincidunt. Praesent at nisl dictum, rhoncus arcu vel, maximus metus. Proin eu hendrerit lacus.",
  },
  {
    question: "Is your clinic open 24 hours?",
    answer:
      "Yes, our clinic provides 24/7 medical services to ensure continuous care for our patients. We maintain a full staff of medical professionals around the clock to handle any medical situations that may arise.",
  },
  {
    question: "Do you provide an ambulance service?",
    answer:
      "Yes, we offer emergency ambulance services available 24/7 with rapid response times. Our ambulances are fully equipped with state-of-the-art medical equipment and staffed by trained paramedics.",
  },
  {
    question: "Do you provide emergency care?",
    answer:
      "Yes, we have a fully equipped emergency department staffed with experienced medical professionals. Our emergency care unit is prepared to handle all types of medical emergencies with immediate response capabilities.",
  },
]

export default function FAQSection() {
  return (
    <section className="container mx-auto py-3">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative h-[600px] w-full p-2">
          <Image
            src="/consultationDoctor.webp"
            alt="Doctor consulting with patient"
            fill
            className="object-cover rounded-lg p-8 py-8"
            priority
          />
        </div>

        <div className="h-[600px] overflow-y-auto">
          <Accordion type="single" defaultValue="item-0" className="p-6 space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-4 bg-white data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-200 data-[state=open]:h-[320px]"
              >
                <AccordionTrigger className="text-lg font-semibold py-4 text-blue-800 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

