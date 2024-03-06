import { AuthHeader } from './AuthHeader.js'
import BaseApi from './axios.js'

export const getJob = async () => {
  const { data } = await BaseApi.get('/job')
  return data
}

export const getJobById = async (id) => {
  const { data } = await BaseApi.get(`/job/${id}`)
  return data
}

export const postJob = async (formData) => {
  const { data } = await BaseApi.post('/job', formData, { headers: AuthHeader() })
  return data
}

export const putJob = async (id, formData) => {
  const { data } = await BaseApi.put(`/job/${id}`, formData, { headers: AuthHeader() })
  return data
}

export const deleteJob = async (id) => {
  const { data } = await BaseApi.delete(`/job/${id}`, { headers: AuthHeader() })
  return data
}
