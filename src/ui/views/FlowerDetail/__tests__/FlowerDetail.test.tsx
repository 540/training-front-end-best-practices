import { render, screen, waitFor } from "@testing-library/react";
import { apiClient } from "@/core/infrastructure/api/apiClient";
import { createFlower } from "@/core/domain/model/__builders__/createFlower";
import { QueryClient, QueryClientProvider } from "react-query";
import { FlowerDetail } from "@/ui/views/FlowerDetail";

jest.mock('next/navigation', () => ({
  __esModule: true,
  useParams: () => ({
    id: '1',
  }),
}))

describe('FlowerDetail', () => {
  beforeEach(() => {
    jest.spyOn(apiClient, 'get')
  })

  it('renders flower detail', async () => {
    const flowerName = 'Awesome flower'
    jest.spyOn(apiClient, 'get').mockResolvedValue(createFlower({ name: flowerName }))

    renderFlowerDetail()

    expect(await screen.findByText(flowerName)).toBeInTheDocument();
  });

  it('shows error alert when some error occurs', async () => {
    const mockAlert = jest.fn()
    jest.spyOn(window, 'alert').mockImplementation((text) => {
      mockAlert(text)
    });
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error('Unexpected error'))

    renderFlowerDetail()

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Ha ocurrido un error')
    })
  })
});

const renderFlowerDetail = () => {
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
      <FlowerDetail/>
    </QueryClientProvider>
  )
}
