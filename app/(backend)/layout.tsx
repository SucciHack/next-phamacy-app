import PharmacyHeader from '@/components/backend/phamacy-header'
import PharmacySidebar from '@/components/backend/phamacy-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
    
  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
      <PharmacySidebar />
          <main className='mt-12 w-full'>
          <PharmacyHeader />
          <div className='flex flex-col justify-between'>
            {children}
          </div>
          </main>

      </SidebarProvider>
    </div>
  )
}
