import { useQuery } from "react-query";
import { getFlowerDetail } from "@/core/usecases/getFlowerDetail";

export const useFlowerDetail = (id: string) => {
  const { data, error } = useQuery([ 'flower', id ], () => getFlowerDetail(id), {
    onError: () => {
      alert('Ha ocurrido un error');
    }
  })

  return {
    flowerDetail: data,
    error
  }
}
