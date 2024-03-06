import { AuthHeader, AuthHeaderForm } from './AuthHeader.js'
import BaseApi from './axios.js'

export const getSWS = async () => {
  const { data } = await BaseApi.get('/sws')
  return data
}

export const getSWSById = async (id) => {
  const { data } = await BaseApi.get(`/sws/${id}`)
  return data
}

export const putSWS = async (id, formData) => {
  const { data } = await BaseApi.put(`/sws/${id}`, formData, {
    headers: AuthHeaderForm(),
  })
  return data
}

export const deleteSWS = async (id) => {
  const { data } = await BaseApi.delete(`/sws/${id}`, { headers: AuthHeader() })
  return data
}
