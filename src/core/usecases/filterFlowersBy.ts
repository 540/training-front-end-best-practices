import { Flower } from "@/core/domain/model/Flower";

export const filterFlowersBy = (query: string, flowers: Flower[]) => {
  if (query === '') {
    return flowers;
  }

  return flowers.filter(
    flower => {
      return flower.name.toLowerCase().startsWith(query.toLowerCase()) ||
        flower.binomialName.toLowerCase().startsWith(query.toLowerCase());
    },
  );
}
