import Axios from 'axios'
import { logger } from '../utils/Logger'

export const api = Axios.create({
  baseURL: 'https://getform.io/f/',
  timeout: 8000,
  headers: {'Accept': 'application/json'}
})

export const slack = Axios.create({
    baseURL: 'https://hooks.slack.com/services/',
    timeout: 8000,
    headers: {'Content-Type': 'text/html'}
})

api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  }else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]',error.message)
  }
  return Promise.reject(error)
}