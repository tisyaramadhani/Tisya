import { AuthHeader } from './AuthHeader.js'
import BaseApi from './axios.js'

export const getSection = async () => {
  const { data } = await BaseApi.get('/section', { headers: AuthHeader() })
  return data
}

export const postSection = async (formData) => {
  const { data } = await BaseApi.post('/section', formData, { headers: AuthHeader() })
  return data
}

export const putSection = async (id, formData) => {
  const { data } = await BaseApi.put(`/section/${id}`, formData, { headers: AuthHeader() })
  return data
}

export const deleteSection = async (id) => {
  const { data } = await BaseApi.delete(`/section/${id}`, { headers: AuthHeader() })
  return data
}
