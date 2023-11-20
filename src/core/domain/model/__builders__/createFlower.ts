import { Flower } from "@/core/domain/model/Flower";

export const createFlower = (options: Partial<Flower> = {}): Flower => {
  const defaultFlower: Flower = {
    id: 0,
    name: 'Default Flower',
    binomialName: 'Default Binomial Name',
    price: 0,
    imgUrl: 'https://default-image-url.com',
    wateringsPerWeek: 0,
    fertilizerType: 'nitrogen',
    heightInCm: 0,
  };

  return {
    ...defaultFlower,
    ...options,
  };
};
