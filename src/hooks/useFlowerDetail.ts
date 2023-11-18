import { useQuery } from "react-query";
import { getFlowerDetail } from "@/core/usecases/getFlowerDetail";

export const useFlowerDetail = (id: string) => {
  const {data, error} = useQuery(['flower', id], () => getFlowerDetail(id))

  return {
    flowerDetail: data,
    error
  }
}
