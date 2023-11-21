import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { apiClient } from "@/core/infrastructure/api/apiClient";
import Detail from "@/pages/detail/[id]";
import { createFlower } from "@/core/domain/model/__builders__/createFlower";

jest.mock('next/navigation', () => ({
  __esModule: true,
  useParams: () => ({
    id: '1',
  }),
}))

describe('Detail', () => {
  beforeEach(() => {
    jest.spyOn(apiClient, 'get')
  })

  it('renders flower detail', async () => {
    const flowerName = 'Awesome flower'
    jest.spyOn(apiClient, 'get').mockResolvedValue(createFlower({ name: flowerName }))

    render(<Detail/>)

    expect(await screen.findByText(flowerName)).toBeInTheDocument();
  });

  it('shows error alert when some error occurs', async () => {
    const mockAlert= jest.fn()
    jest.spyOn(window, 'alert').mockImplementation((text) => {
      mockAlert(text)
    });
    jest.spyOn(apiClient, 'get').mockRejectedValue(new Error('Unexpected error'))

    render(<Detail/>)

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Ha ocurrido un error.')
    })
  })
});
