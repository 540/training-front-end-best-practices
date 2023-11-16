import { productsRepository } from "@/core/infrastructure/repository/productsRepository";

export const getAllFlowers = () => {
  return productsRepository.all()
}
