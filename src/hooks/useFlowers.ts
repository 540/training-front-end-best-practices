import { useQuery } from "react-query";
import { getAllFlowers } from "@/core/usecases/getAllFlowers";
import { FlowersNotFoundError } from "@/core/domain/model/FlowersNotFoundError";

export const useFlowers = () => {
  const { data, error } = useQuery('flowers', getAllFlowers, {
    retry: false,
    onError: error => {
      if (error instanceof FlowersNotFoundError) {
        return error
      } else {
        alert('Ha ocurrido un error');
      }
    }
  })

  return {
    flowers: data,
    error
  }
}
