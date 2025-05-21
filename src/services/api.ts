import axios from 'axios';
import { ToastService } from './toast';

let api = axios.create({
  baseURL: process.env.BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config: any) => {
  try {
    config.headers['Authorization'] = `Bearer 123`;
  } catch (e) {
    console.log(`Erro no token: ${e}`);
  }

  return config;
});

api.interceptors.response.use((response: any) => {
  if (!response.data.success) {
    ToastService.showSuccess('Sucesso', response.data.message);
    return Promise.reject(response.data.message)
  } else {
    return response;
  }
}, (error: any) => {
  if (error.response) {
    if (typeof error !== 'undefined') {
      if (error.response.status === 500) {
        // toast.error(error.response.data.message);
      }

      if (error.response.status === 400) {
        if (error.response?.data?.errors) {
          const erros = Object.values<string>(error.response?.data?.errors).flat()
          const errosUnicos = [...new Set(erros)];
          errosUnicos.forEach(x => ToastService.showError('Erro', x))
        } else if (error.response?.data?.message) {
          ToastService.showError('Erro', error.response?.data?.message)
        }
      }
    }
  }

  return Promise.reject(error)
})
export default api;