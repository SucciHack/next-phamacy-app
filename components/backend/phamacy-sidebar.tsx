import { ShoppingCart, Home, Users, Package, FileText, HelpCircle, User, Pill } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import Link from "next/link"

export default function PharmacySidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-md">
            <ShoppingCart className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-primary">MediPOS</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3">
              <Link href="/dashboard" className="flex gap-3">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3" isActive>
              <Package className="h-5 w-5" />
              <Link href="/dashboard/medications">
              <span>Products</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3">
              <FileText className="h-5 w-5" />
              <span>Prescriptions</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3">
              <Users className="h-5 w-5" />
              <Link href="/dashboard/category-form">
              <span>Category Form</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3">
              <Pill className="h-5 w-5" />
              <Link href="/dashboard/medication-form">
              <span>Medication Form</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5" />
              <span>Help</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-medium">Pharmacist</p>
            <p className="text-xs text-gray-500">John Smith</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

