import { ProductsRepository } from "@/core/domain/repository/ProductsRepository";
import { apiClient } from "@/core/infrastructure/api/apiClient";
import { FlowersNotFoundError } from "@/core/domain/model/FlowersNotFoundError";

export const productsRepository: ProductsRepository = {
  all: async () => {
    try {
      return await apiClient.get('/api/products');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'FLOWERS_NOT_FOUND') {
          throw new FlowersNotFoundError('FLOWERS_NOT_FOUND')
        }

        throw error
      }

      throw error
    }
  },
  detail: async (id: string) => apiClient.get(`https://dulces-petalos.herokuapp.com/api/product/${id}`),
}
