import { productsRepository } from "@/core/infrastructure/repository/productsRepository";

export const getFlowerDetail = (id: string) => {
  return productsRepository.detail(id);
}
