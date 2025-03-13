"use client"

import type React from "react"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { Check, FolderPlus, Info, Layers } from "lucide-react"

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

type ProductCategoryFormData = {
  name: string
  description: string
  parentCategory: string
  displayOrder: number
  isActive: boolean
  image: string
}

// Sample parent categories for the dropdown
const parentCategories = [
  { id: "1", name: "Prescription Medications" },
  { id: "2", name: "Over-the-Counter" },
  { id: "3", name: "Supplements" },
  { id: "4", name: "Medical Supplies" },
  { id: "5", name: "Personal Care" },
]

export default function ProductCategoryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const initialImage = "/placeholder.svg";
const [imageUrl, setImageUrl] = useState(initialImage);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ProductCategoryFormData>({
    defaultValues: {
      name: "",
      description: "",
      parentCategory: "",
      displayOrder: 0,
      isActive: true,
      image:"/placeholder.svg"
    },
  })

  const onSubmit = async (data: ProductCategoryFormData) => {
    data.image = imageUrl
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    try {
        setIsSubmitting(true)
        const response = await fetch(`${baseUrl}/api/v1/categories`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if(response.status === 409){
          toast.error("category already exists")
        }
        if(response.status === 201){
          toast.success("category created successfully")
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
  }

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6">
      <Card className="shadow-md">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 border-b">
          <div className="flex items-center gap-2">
            <FolderPlus className="h-6 w-6 text-blue-600" />
            <CardTitle className="text-xl text-blue-800">Create Pharmacy Category</CardTitle>
          </div>
          <CardDescription>Add a new product category to organize your pharmacy inventory</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Category Name */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Category Name
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">Enter a unique, descriptive name for this category</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="name"
                  placeholder="e.g., Antibiotics"
                  {...register("name", {
                    required: "Category name is required",
                    maxLength: {
                      value: 50,
                      message: "Name cannot exceed 50 characters",
                    },
                  })}
                  className={errors.name ? "border-red-300" : ""}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
              </div>

              {/* Parent Category */}
              <div className="space-y-2">
                <Label htmlFor="parentCategory" className="text-sm font-medium">
                  Parent Category
                </Label>
                <Controller
                  name="parentCategory"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="parentCategory" className="w-full">
                        <SelectValue placeholder="Select parent category (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None (Top Level)</SelectItem>
                        {parentCategories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter a detailed description of this category..."
                rows={3}
                {...register("description")}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Display Order */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="displayOrder" className="text-sm font-medium">
                    Display Order
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Lower numbers will appear first in the category list</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="displayOrder"
                  type="number"
                  min="0"
                  {...register("displayOrder", {
                    valueAsNumber: true,
                  })}
                />
              </div>

              {/* Active Status */}
              <div className="space-y-2">
                <Label htmlFor="isActive" className="text-sm font-medium">
                  Status
                </Label>
                <div className="flex items-center justify-between border rounded-md p-3">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Active</span>
                  </div>
                  <Controller
                    name="isActive"
                    control={control}
                    render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <div className="px-6 pb-2">
          <ImageInput
            title="Category Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImage"
        />
          </div>

          <CardFooter className="flex justify-between border-t bg-gray-50 px-6 py-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset()
                setImageUrl("")
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
                  <span>Create Category</span>
                </div>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

