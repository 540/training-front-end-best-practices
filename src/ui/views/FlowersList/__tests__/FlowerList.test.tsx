import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { apiClient } from "@/core/infrastructure/api/apiClient";
import { FlowersList } from "@/ui/views/FlowersList";
import { createFlower } from "@/core/domain/model/__builders__/createFlower";
import { QueryClient, QueryClientProvider } from "react-query";

describe('FlowerList', () => {
  beforeEach(() => {
    jest.spyOn(apiClient, 'get')
  })

  it('renders flowers', async () => {
    const flowerName = 'Awesome flower'
    jest.spyOn(apiClient, 'get').mockResolvedValue([ createFlower({ name: flowerName, id: 100 }), createFlower() ])

    renderFlowersList()

    expect(await screen.findByText(flowerName)).toBeInTheDocument()
  });

  it('filter flowers', async () => {
    const flowerName = 'Awesome flower'
    const otherFlowerName = 'Other flower'
    jest.spyOn(apiClient, 'get')
      .mockResolvedValue([ createFlower({ name: flowerName, id: 100 }), createFlower({ name: otherFlowerName }) ])

    renderFlowersList()
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Busca aquí...'), flowerName))

    expect(await screen.findByText(flowerName)).toBeInTheDocument()
    expect(screen.queryByText(otherFlowerName)).not.toBeInTheDocument()
  })

  it('shows error message when there is no flowers', async () => {
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error('FLOWERS_NOT_FOUND'))

    renderFlowersList()

    expect(await screen.findByText('No se han encontrado flores')).toBeInTheDocument()
  })

  it('shows alert message when some unexpected error occurs', async () => {
    const mockAlert = jest.fn()
    jest.spyOn(window, 'alert').mockImplementation((text) => {
      mockAlert(text)
    });
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error('Unexpected error'))

    renderFlowersList()

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Ha ocurrido un error')
    })
  })
});

const renderFlowersList = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        retry: false
      }
    }
  })

  return render(
    <QueryClientProvider client={ queryClient }>
      <FlowersList/>
    </QueryClientProvider>
  )
}
