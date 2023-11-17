interface ApiClient {
  get: <T>(endpoint: string) => Promise<T>
}

export const apiClient: ApiClient = {
  get: async <T>(endpoint: string) => {
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();

    if (!response.ok) {
      throw new Error(jsonResponse.code)
    }

    return jsonResponse as T;
  }
}
