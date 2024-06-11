/*import axios from 'axios';

const viacepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  timeout: 10000, // Timeout de 10 segundos
});

export const getAddressByCep = async (cep: string) => {
  try {
    const response = await viacepApi.get(`${cep}/json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching address:', error);
    throw error;
  }
};
*/
export {};