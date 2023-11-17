import { Flower } from "@/core/domain/model/Flower";

export interface ProductsRepository {
  all: () => Promise<Flower[]>
  detail: (id: string) => Promise<Flower>
}
