import LoginForm from "@/components/Forms/login-form";

export default async function page() {

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-white relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10">
        <LoginForm />
      </div>
    </div>
  )
}