import { Search, Bell, WifiIcon, User, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PharmacyHeader() {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between w-[85%] fixed top-0 z-30">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search products..."
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Customer
        </Button>
        <div className="flex items-center gap-3">
          <WifiIcon className="h-5 w-5 text-green-500" />
          <Bell className="h-5 w-5 text-gray-500" />
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  )
}

