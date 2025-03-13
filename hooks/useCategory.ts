"use client";

import { fetchCategories, fetchMedications } from "@/actions/action";
import { useQuery,useQueryClient } from "@tanstack/react-query";

export function useCategories() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryClient = useQueryClient();

  // Query for fetching all contacts
  const categoryQuery = useQuery({
    queryKey: ["categories"],
    queryFn:fetchCategories
  });
  

  console.log("Categories Data:", categoryQuery);

  return {
    // Queries
    categories: categoryQuery.data ?? [],
    isLoading: categoryQuery.isLoading,
    error: categoryQuery.error || categoryQuery.data,
  };
}
export function useMedications() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryClient = useQueryClient();

  // Query for fetching all contacts
  const medicationQuery = useQuery({
    queryKey: ["medications"],
    queryFn:fetchMedications
  });
  

  console.log("medication Data:", medicationQuery);

  return {
    // Queries
    medications: medicationQuery.data ?? [],
    isLoading: medicationQuery.isLoading,
    error: medicationQuery.error || medicationQuery.data,
  };
}

// Hook for fetching a single contact

