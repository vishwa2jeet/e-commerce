// api.js
export const fetchDataFromAPI = async ({ url }) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return response.json();
  };