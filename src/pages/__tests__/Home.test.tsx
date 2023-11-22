import { act, render, screen, waitFor } from "@testing-library/react";
import Home from "../index";
import { apiClient } from "../../core/infrastructure/api/apiClient";
import { createFlower } from "../../core/domain/model/__builders__/createFlower";
import userEvent from '@testing-library/user-event'

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

  it('filter flowers', async () => {
    const flowerName = 'Awesome flower'
    const otherFlowerName = 'Other flower'
    jest.spyOn(apiClient, 'get')
      .mockResolvedValue([ createFlower({ name: flowerName, id: 100 }), createFlower({ name: otherFlowerName }) ])

    render(<Home/>)
    await act(async () =>  await userEvent.type(screen.getByPlaceholderText('Busca aquí...'), flowerName))

    expect(await screen.findByText(flowerName)).toBeInTheDocument()
    expect(screen.queryByText(otherFlowerName)).not.toBeInTheDocument()
  })

  it('shows error message when there is no flowers', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error('FLOWERS_NOT_FOUND'))

    render(<Home/>)

    expect(await screen.findByText('No se han encontrado flores')).toBeInTheDocument()
  })

  it('shows alert message when some unexpected error occurs', async () => {
    const mockAlert= jest.fn()
    jest.spyOn(window, 'alert').mockImplementation((text) => {
      mockAlert(text)
    });
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error('Unexpected error'))

    render(<Home/>)

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Ha ocurrido un error')
    })
  })
});
