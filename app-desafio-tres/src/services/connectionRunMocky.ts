import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://run.mocky.io/v3/',
  timeout: 10000,
});

export const getProducts = async () => {
  try {
    const response = await apiClient.get('19aa9d64-f673-4027-9692-c71b86db2927');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};