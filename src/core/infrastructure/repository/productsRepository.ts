import { ProductsRepository } from "@/core/domain/repository/ProductsRepository";
import { apiClient } from "@/core/infrastructure/api/apiClient";

export const productsRepository: ProductsRepository = {
  all: async () => apiClient.get('/api/products')
}
