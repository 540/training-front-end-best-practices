import { apiClient } from "@/core/infrastructure/api/apiClient";

describe('apiClient', () => {
  it('returns data when the response is ok', async () => {
    const expectedBody = {
      name: 'John',
      lastName: 'Snow',
      email: 'john.snow@bastard.com'
    }
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expectedBody),
        ok: true
      }),
    ) as jest.Mock;

    const result = await apiClient.get('/endpoint')

    expect(result).toEqual(expectedBody)
  })
});
