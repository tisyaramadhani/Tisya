import { AuthHeader } from './AuthHeader'
import BaseApi from './axios'

export const getCertification = async () => {
  const { data } = await BaseApi.get('/certification')
  return data
}

export const postCertification = async (formData) => {
  const { data } = await BaseApi.post('/certification', formData, { headers: AuthHeader() })
  return data
}

export const putCertification = async (id, formData) => {
  const { data } = await BaseApi.put(`/certification/${id}`, formData, { headers: AuthHeader() })
  return data
}

export const deleteCertification = async (id) => {
  const { data } = await BaseApi.delete(`/certification/${id}`, { headers: AuthHeader() })
  return data
}

// major
export const getMajor = async () => {
  const { data } = await BaseApi.get('/major')
  return data
}

export const postMajor = async (formData) => {
  const { data } = await BaseApi.post('/major', formData, { headers: AuthHeader() })
  return data
}

export const putMajor = async (id, formData) => {
  const { data } = await BaseApi.put(`/major/${id}`, formData, { headers: AuthHeader() })
  return data
}

export const deleteMajor = async (id) => {
  const { data } = await BaseApi.delete(`/major/${id}`, { headers: AuthHeader() })
  return data
}

// skill
export const getSkill = async () => {
  const { data } = await BaseApi.get('/skill')
  return data
}

export const postSkill = async (formData) => {
  const { data } = await BaseApi.post('/skill', formData, { headers: AuthHeader() })
  return data
}

export const putSkill = async (id, formData) => {
  const { data } = await BaseApi.put(`/skill/${id}`, formData, { headers: AuthHeader() })
  return data
}

export const deleteSkill = async (id) => {
  const { data } = await BaseApi.delete(`/skill/${id}`, { headers: AuthHeader() })
  return data
}

export const getUniversity = async () => {
  const { data } = await BaseApi.get('/university')
  return data
}

export const postUniversity = async (formData) => {
  const { data } = await BaseApi.post('/university', formData, { headers: AuthHeader() })
  return data
}

export const putUniversity = async (id, formData) => {
  const { data } = await BaseApi.put(`/university/${id}`, formData, { headers: AuthHeader() })
  return data
}

export const deleteUniversity = async (id) => {
  const { data } = await BaseApi.delete(`/university/${id}`, { headers: AuthHeader() })
  return data
}
