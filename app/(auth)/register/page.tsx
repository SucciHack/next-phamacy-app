import { RegisterForm } from '@/components/Forms/register-form'
import React from 'react'

export default function page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10  relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-sm">
            <RegisterForm/>
        </div>
    </div>
  )
}
