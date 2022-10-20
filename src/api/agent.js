import axios from 'axios'
import store from 'store'
import { notification } from 'antd'
import generateQueryParams from './utils'

// const apiClient = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api',
//   // timeout: 1000,
//   // headers: { 'X-Custom-Header': 'foobar' }
// })

const apiUrl = `${process.env.REACT_APP_PUBLIC_API_URL}`
console.log('apiUrl =-=-=', apiUrl)

const agent = axios.create({
  baseURL: `${apiUrl}`,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1NzM4NzM3LCJpYXQiOjE2NjQ4NzQ3MzcsImp0aSI6IjRkYTJkZjY4NWQxMzQzOGY4NzZiZWQ4YjAzYmExYzE2IiwidXNlcl9pZCI6Mn0.QvLX4SfsMvIBW0uSAqFF4kPs9GJWnKlcU_qogaMHL54',
  },
})

agent.interceptors.request.use(request => {
  const accessToken = store.get('accessToken')
  const user = JSON.parse(localStorage.getItem('user'))
  // if (accessToken) {
  request.headers.Authorization = `Bearer ${user.access_token}`
  // }
  return request
})

// export const get = ({url, queryParams}) => {
//     const formattedUrl = queryParams ? generateQueryParams(url, queryParams) : url;

//     return agent.get(formattedUrl).then(response => response.data);
// };

// export const post = ({url, data, isFormData}) => {
//     if (isFormData) {
//         delete agent.defaults.headers.post['Content-Type'];
//     }

//     return agent.post(url, data).then(response => response.data);
// };

export default agent
