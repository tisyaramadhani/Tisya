import axios from 'axios'
import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setAccessToken,
  setRefreshToken,
} from './AuthService'

const BaseApi = axios.create({
  baseURL: 'http://62.72.1.134:8000/api/v1',
  withCredentials: true,
})

BaseApi.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

let refreshPromise = null
const clearPromise = () => (refreshPromise = null)

async function refreshToken(refreshtoken) {
  try {
    const response = await axios.post(`http://localhost:5000/api/v1/refresh`, {
      refreshtoken,
    })
    return response
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return error.response
    }
    throw error
  }
}

async function redirectToLoginPage() {
  window.location.replace('http://localhost:3001')
}

BaseApi.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const refreshtoken = getRefreshToken()

      if (refreshtoken) {
        if (!refreshPromise) {
          refreshPromise = refreshToken(refreshtoken).finally(clearPromise)
        }

        const res = await refreshPromise

        if (res.status === 200) {
          const { token, refreshtoken } = res.data

          setAccessToken(token)
          setRefreshToken(refreshtoken)

          originalRequest.headers.Authorization = `Bearer ${token}`

          return BaseApi(originalRequest)
        } else {
          removeTokens()
          redirectToLoginPage()
        }
      } else {
        redirectToLoginPage()
      }
    }

    return Promise.reject(error)
  },
)

export default BaseApi
