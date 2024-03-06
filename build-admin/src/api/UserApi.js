import { AuthHeader } from './AuthHeader.js'
import BaseApi from './axios.js'

export const getUser = async () => {
  const { data } = await BaseApi.get('/user')
  return data
}

export const deleteUser = async (id) => {
  const { data } = await BaseApi.delete(`/user/${id}`)
  return data
}

export const getInterviewer = async () => {
  const { data } = await BaseApi.get('/interviewer')
  return data
}

export const postInterviewer = async (formData) => {
  const { data } = await BaseApi.post('/interviewer', formData)
  return data
}

export const signin = async (formData) => {
  const { data } = await BaseApi.post('/signin', formData)
  return data
}

//tes change password
export const putChangePasswordUser = async (id, formData) => {
  const { data } = await BaseApi.put(`/change-password-user/${id}`, formData, {
    headers: AuthHeader(),
  })
  return data
}
