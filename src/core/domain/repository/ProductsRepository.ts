import { Flower } from "@/core/domain/model/Flower";

export interface ProductsRepository {
  all: () => Promise<Flower[]>
}
