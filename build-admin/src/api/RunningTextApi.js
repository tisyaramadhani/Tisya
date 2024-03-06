import { AuthHeader } from './AuthHeader.js'
import BaseApi from './axios.js'

export const getRunningText = async () => {
  const { data } = await BaseApi.get('/running-text')
  return data
}

export const getRunningTextById = async (id) => {
  const { data } = await BaseApi.get(`/running-text/${id}`)
  return data
}

export const putRunningText = async (id, formData) => {
  const { data } = await BaseApi.put(`/running-text/${id}`, formData, { headers: AuthHeader() })
  return data
}

export const deleteRunningText = async (id) => {
  const { data } = await BaseApi.delete(`/running-text/${id}`, { headers: AuthHeader() })
  return data
}
