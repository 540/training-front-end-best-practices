import { filterFlowersBy } from "@/core/usecases/filterFlowersBy";
import { createFlower } from "@/core/domain/model/__builders__/createFlower";

describe('filterFlowersBy', () => {
  it('returns same flowers when the query is empty', () => {
    const flowers = [createFlower(), createFlower()]

    const result = filterFlowersBy('', flowers);

    expect(result).toEqual(flowers)
  });

  it('filters by name', () => {
    const query = 'Awesome'
    const flowers = [createFlower({name: 'Awesome flower'}), createFlower()]

    const result = filterFlowersBy(query, flowers);

    expect(result).toEqual([flowers[0]])
  })

  it('filters by binomial name', () => {
    const query = 'Awesome'
    const flowers = [createFlower({binomialName: 'Awesome flower'}), createFlower()]

    const result = filterFlowersBy(query, flowers);

    expect(result).toEqual([flowers[0]])
  })
});
