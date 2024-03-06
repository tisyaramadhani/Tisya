import { AuthHeader, AuthHeaderForm } from './AuthHeader.js'
import BaseApi from './axios.js'

export const getApplication = async () => {
  const { data } = await BaseApi.get('/application', { headers: AuthHeader() })
  return data
}

export const getApplicationById = async (id) => {
  const { data } = await BaseApi.get(`/application/${id}`, { headers: AuthHeader() })
  return data
}

export const getApplicationByJob = async (id) => {
  const { data } = await BaseApi.get(`/application-job/${id}`, { headers: AuthHeader() })
  return data
}

export const importApplication = async (formData) => {
  const { data } = await BaseApi.post(`/application-job-import`, formData, {
    headers: AuthHeaderForm(),
  })
  return data
}

export const exportGetApplicationByJob = async (id) => {
  const { data } = await BaseApi.get(`/application-job-export/${id}`, { headers: AuthHeader() })
  return data
}

export const getApplicationByJobStatus = async (id) => {
  const { data } = await BaseApi.get(`/application-job-status/${id}`, {
    headers: AuthHeader(),
  })
  return data
}

export const exportGetApplicationByJobStatusLulus = async (id) => {
  const { data } = await BaseApi.get(`/application-job-status-lulus-export/${id}`, {
    headers: AuthHeader(),
  })
  return data
}

export const exportGetApplicationByJobStatusGagal = async (id) => {
  const { data } = await BaseApi.get(`/application-job-status-gagal-export/${id}`, {
    headers: AuthHeader(),
  })
  return data
}

export const getApplicationByStatusLulus = async (id) => {
  const { data } = await BaseApi.get(`/application-status-lulus/${id}`, {
    headers: AuthHeader(),
  })
  return data
}

export const getApplicationByStatusGagal = async (id) => {
  const { data } = await BaseApi.get(`/application-status-gagal/${id}`, {
    headers: AuthHeader(),
  })
  return data
}

export const exportGetApplicationByStatusLulus = async () => {
  const { data } = await BaseApi.get(`/application-status-lulus-export`, { headers: AuthHeader() })
  return data
}

export const exportGetApplicationByStatusGagal = async () => {
  const { data } = await BaseApi.get(`/application-status-gagal-export`, { headers: AuthHeader() })
  return data
}

export const getApplicationInterview = async (id) => {
  const { data } = await BaseApi.get(`/application-interview/${id}`, { headers: AuthHeader() })
  return data
}

export const postApplication = async (formData) => {
  const { data } = await BaseApi.post('/application', formData, { headers: AuthHeader() })
  return data
}

export const putApplication = async (datass) => {
  const { data } = await BaseApi.put(`/application/${datass.id}`, datass.row, {
    headers: AuthHeader(),
  })
  return data
}

export const putApplicationAll = async (datass) => {
  const { data } = await BaseApi.put(`/application-all`, datass, { headers: AuthHeader() })
  return data
}

export const putApplicationByJob = async (datas) => {
  const { data } = await BaseApi.put(`/application-job/${datas.id}`, datas.row, {
    headers: AuthHeader(),
  })
  return data
}

export const putApplicationByJobAll = async (datas) => {
  const { data } = await BaseApi.put(`/application-job-all`, datas, {
    headers: AuthHeader(),
  })
  return data
}

export const deleteApplication = async (id, jobid, nik) => {
  const { data } = await BaseApi.delete(`/application/${id}/${jobid}/${nik}`, {
    headers: AuthHeader(),
  })
  return data
}

export const getApplicant = async (nik) => {
  const { data } = await BaseApi.get(`/applicant/${nik}`, {
    headers: AuthHeader(),
  })
  return data
}

export const getDocument = async (nik) => {
  const { data } = await BaseApi.get(`/document/${nik}`, {
    headers: AuthHeader(),
  })
  return data
}

export const getDocumentJob = async (nik, jobid) => {
  const { data } = await BaseApi.get(`/document-job/${nik}/${jobid}`, {
    headers: AuthHeader(),
  })
  return data
}

export const getDocumentFile = (file) => {
  const { data } = window.open(`http://62.72.1.134:8000/uploads/${file}`)
  return data
}

export const getApplicationByApplicant = async (nik) => {
  const { data } = await BaseApi.get(`/application-applicant/${nik}`, {
    headers: AuthHeader(),
  })
  return data
}

export const getApplicationByApplicantJob = async (nik, job_id) => {
  const { data } = await BaseApi.get(`/application-applicant/${nik}/${job_id}`, {
    headers: AuthHeader(),
  })
  return data
}

export const getApplicationByJobAtten = async (id) => {
  const { data } = await BaseApi.get(`/application-job-atten/${id}`, {
    headers: AuthHeader(),
  })
  return data
}

export const exportGetApplicationByAttenYa = async () => {
  const { data } = await BaseApi.get(`/application-atten-ya-export`, { headers: AuthHeader() })
  return data
}

export const exportGetApplicationByAttenTidak = async () => {
  const { data } = await BaseApi.get(`/application-atten-tidak-export`, { headers: AuthHeader() })
  return data
}

export const getApplicationFile = async (name) => {
  const response = await BaseApi.get(`/uploads/${name}`, {
    responseType: 'blob',
    headers: AuthHeader(),
  })
  return URL.createObjectURL(response.data)
}

export const deleteAttendance = async (id) => {
  const { data } = await BaseApi.post(`/application-atten/delete`, id, { headers: AuthHeader() })
  return data
}
