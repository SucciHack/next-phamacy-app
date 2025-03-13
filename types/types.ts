import { Category, Medication } from "@prisma/client";
export interface newCategory extends Category{
  medications:Medication[]
}
export type QueriesResponse = {
    data: newCategory[] | null;
    error?: string | null;
  };
export type MedicationResponse = {
    data: Medication[] | null;
    error?: string | null;
  };


