import { LoginForm } from "@/components/login-form"
export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-[url('/nurse-wearing-scrubs.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 md:p-10 backdrop-blur-sm">
        <LoginForm />
      </div>
    </div>
  )
}