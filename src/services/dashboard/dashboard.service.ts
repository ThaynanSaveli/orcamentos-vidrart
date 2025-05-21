import api from '../api'

export const buscarDadosDashboard = async () => {
  const { data } = await api.get(`dados-indicadores/buscar`);

  return data
}