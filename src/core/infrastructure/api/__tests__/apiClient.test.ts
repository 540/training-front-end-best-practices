import { apiClient } from "@/core/infrastructure/api/apiClient";

describe('apiClient', () => {
  it('throws error when the response is not ok', async () => {
    const errorCode = 'FLOWERS_NOT_FOUND'
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ code: errorCode }),
        ok: false,
      }),
    ) as jest.Mock;

    const getPromise = apiClient.get('/endpoint')

    await expect(getPromise).rejects.toThrow(new Error(errorCode))
  });

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
