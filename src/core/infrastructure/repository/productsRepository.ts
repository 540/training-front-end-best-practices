import { ProductsRepository } from "@/core/domain/repository/ProductsRepository";
import { apiClient } from "@/core/infrastructure/api/apiClient";

export const productsRepository: ProductsRepository = {
  all: async () => apiClient.get('/api/products'),
  detail: async (id: string) => apiClient.get(`https://dulces-petalos.herokuapp.com/api/product/${id}`),
}
