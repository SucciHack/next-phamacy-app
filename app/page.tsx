import Header from '@/components/header'
import Hero from '@/components/hero'
import NavigationBar from '@/components/navigationBar'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0">
        <Header />
        <NavigationBar />
      </div>
      <Hero/>
    </div>
  )
}
