import BaseApi from './axios.js'
import { AuthHeader, AuthHeaderForm } from './AuthHeader.js'

export const getPresidentText = async () => {
  const { data } = await BaseApi.get('/president-text')
  console.log(data)
  return data
}

export const getPresidentTextById = async (id) => {
  const { data } = await BaseApi.get(`/president-text/${id}`)
  console.log(data)
  return data
}

export const putPresidentText = async (id, formData) => {
  const { data } = await BaseApi.put(`/president-text/${id}`, formData, {
    headers: AuthHeaderForm(),
  })
  return data
}

export const deletePresidentText = async (id) => {
  const { data } = await BaseApi.delete(`/president-text/${id}`, { headers: AuthHeader() })
  return data
}
