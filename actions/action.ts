import { newCategory } from "@/types/types"
import { Medication } from "@prisma/client"


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const API = `${baseUrl}/api/v1/categories`
export async function fetchCategories(){
    const response = await fetch(API)
    const categories = await response.json()
    console.log(categories)
    return categories.data as newCategory[]
}

const newAPI = `${baseUrl}/api/v1/medications`
export async function fetchMedications(){
    const response = await fetch(newAPI)
    const medications = await response.json()
    console.log(medications)
    return medications.data as Medication[]
}
