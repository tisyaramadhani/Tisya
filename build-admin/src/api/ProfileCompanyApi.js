import BaseApi from './axios.js'
import { AuthHeader, AuthHeaderForm } from './AuthHeader.js'

export const getProfileCompany = async () => {
  const { data } = await BaseApi.get('/profile-company')
  return data
}

export const getProfileCompanyById = async (id) => {
  const { data } = await BaseApi.get(`/profile-company/${id}`)
  return data
}

export const putProfileCompany = async (id, formData) => {
  const { data } = await BaseApi.put(`/profile-company/${id}`, formData, {
    headers: AuthHeaderForm(),
  })
  return data
}

export const deleteProfileCompany = async (id) => {
  const { data } = await BaseApi.delete(`/profile-company/${id}`, { headers: AuthHeader() })
  return data
}
