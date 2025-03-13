// import CampaignContainer from '@/components/campaign-container'
import { CarouselSize } from '@/components/category-corousel'
import FAQSection from '@/components/faq'
import FeaturesSection from '@/components/features-section'
import FollowerSection from '@/components/follower-section'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import MedicalBanner from '@/components/medical-banner'
import NewsletterDownload from '@/components/news-letter'
// import ProductsContainer from '@/components/productsContainer'
import RecentUpdates from '@/components/recentUpdates'
import React from 'react'

export default function page() {
  return (
      <div>
        <Hero/>
        <CarouselSize/>
        {/* <ProductsContainer/> */}
        <MedicalBanner/>
        <FollowerSection/>
        {/* <CampaignContainer/> */}
        <FeaturesSection/>
        <FAQSection/>
        <RecentUpdates/>
        <NewsletterDownload/>
        <Footer/>
      </div>
  )
}
