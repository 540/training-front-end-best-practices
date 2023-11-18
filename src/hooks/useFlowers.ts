import { useQuery } from "react-query";
import { getAllFlowers } from "@/core/usecases/getAllFlowers";

export const useFlowers = () => {
  const { data, error } = useQuery('flowers', getAllFlowers)

  return {
    flowers: data,
    error
  }
}
