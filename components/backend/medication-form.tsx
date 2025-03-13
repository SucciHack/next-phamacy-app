"use client"

import type React from "react"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { Check, Info, Pill} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import ImageInput from "./image-upload"
import toast from "react-hot-toast"
import { useCategories } from "@/hooks/useCategory"

// Based on the provided schema
type MedicationFormData = {
  name: string
  price: number
  image: string
  description: string
  stock: number
  requiresPrescription: boolean
  categoryId: string
}

// Sample categories for the dropdown
// const categories = [
//   { id: "1", name: "Antibiotics" },
//   { id: "2", name: "Pain Relief" },
//   { id: "3", name: "Cardiovascular" },
//   { id: "4", name: "Diabetes" },
//   { id: "5", name: "Respiratory" },
//   { id: "6", name: "Gastrointestinal" },
//   { id: "7", name: "Vitamins & Supplements" },
// ]

export default function MedicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
    const initialImage = "/placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);
  const {categories} = useCategories()
    console.log(categories)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<MedicationFormData>({
    defaultValues: {
      name: "",
      price: 0,
      image: "/placeholder.svg",
      description: "",
      stock: 0,
      requiresPrescription: false,
      categoryId: "",
    },
  })

  const onSubmit = async (data: MedicationFormData) => {
    setIsSubmitting(true)
    data.image = imageUrl
    data.price = Number(data.price)
    data.stock = Number(data.stock)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    console.log(data)
    try {
        setIsSubmitting(true)
        const response = await fetch(`${baseUrl}/api/v1/medications`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if(response.status === 201){
          toast.success("product created successfully")
        }
        if(response.status === 500){
          toast.error("something went wrong")
        }
        
        await new Promise((resolve) => setTimeout(resolve, 1000))
        reset()
    } catch (error) {
        console.log(error)
    }finally{
        setIsSubmitting(false)
    }
    console.log("Form data submitted:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    reset()
    setIsSubmitting(false)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6">
      <Card className="shadow-md">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 border-b">
          <div className="flex items-center gap-2">
            <Pill className="h-6 w-6 text-blue-600" />
            <CardTitle className="text-xl text-blue-800">Add New Medication</CardTitle>
          </div>
          <CardDescription>Create a new medication entry in your pharmacy inventory</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Medication Name */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Medication Name
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">Enter the full medication name including strength if applicable</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="name"
                  placeholder="e.g., Amoxicillin 500mg"
                  {...register("name", {
                    required: "Medication name is required",
                    maxLength: {
                      value: 100,
                      message: "Name cannot exceed 100 characters",
                    },
                  })}
                  className={errors.name ? "border-red-300" : ""}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="categoryId" className="text-sm font-medium">
                  Category
                </Label>
                <Controller
                  name="categoryId"
                  control={control}
                  rules={{ required: "Category is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="categoryId" className={`w-full ${errors.categoryId ? "border-red-300" : ""}`}>
                        <SelectValue placeholder="Select medication category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.categoryId && <p className="text-sm text-red-500 mt-1">{errors.categoryId.message}</p>}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter medication details, usage instructions, side effects, etc."
                rows={3}
                {...register("description")}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Price */}
              <div className="space-y-2">
                <Label htmlFor="price" className="text-sm font-medium">
                  Price (in cents)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="0"
                    className="pl-8"
                    {...register("price", {
                      required: "Price is required",
                      valueAsNumber: true,
                      min: {
                        value: 0,
                        message: "Price cannot be negative",
                      },
                    })}
                  />
                </div>
                {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>}
                <p className="text-xs text-gray-500">Enter price in cents (e.g., 1999 for $19.99)</p>
              </div>

              {/* Stock */}
              <div className="space-y-2">
                <Label htmlFor="stock" className="text-sm font-medium">
                  Stock Quantity
                </Label>
                <Input
                  id="stock"
                  type="number"
                  min="0"
                  placeholder="0"
                  {...register("stock", {
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Stock cannot be negative",
                    },
                  })}
                />
                {errors.stock && <p className="text-sm text-red-500 mt-1">{errors.stock.message}</p>}
              </div>
            </div>

            {/* Requires Prescription */}
            <div className="space-y-2">
              <Label htmlFor="requiresPrescription" className="text-sm font-medium">
                Prescription Required
              </Label>
              <div className="flex items-center justify-between border rounded-md p-3">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                  </svg>
                  <span className="text-sm">This medication requires a prescription</span>
                </div>
                <Controller
                  name="requiresPrescription"
                  control={control}
                  render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
                />
              </div>
              <p className="text-xs text-gray-500">
                Toggle on if this medication requires a valid prescription for dispensing
              </p>
            </div>
              <ImageInput
                title="Category Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="categoryImage"
              />
          </CardContent>

          <CardFooter className="flex justify-between border-t bg-gray-50 px-6 py-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset()
              }}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Creating...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Add Medication</span>
                </div>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

