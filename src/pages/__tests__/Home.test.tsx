import { render, screen } from "@testing-library/react";
import Home from "../index";
import { apiClient } from "@/core/infrastructure/api/apiClient";
import { createFlower } from "@/core/domain/model/__builders__/createFlower";

describe('Home', () => {
  beforeEach(() => {
    jest.spyOn(apiClient, 'get')
  })

  it('renders flowers', async () => {
    const flowerName = 'Awesome flower'
    jest.spyOn(apiClient, 'get').mockResolvedValue([ createFlower({ name: flowerName, id: 100 }), createFlower() ])

    render(<Home/>)

    expect(await screen.findByText(flowerName)).toBeInTheDocument()
  });
});
