import apiClient from 'services/axios'
import store from 'store'

export async function login(email, password) {
  return apiClient
    .post('/auth/token/', {
      email,
      password,
    })
    .then(response => {
      if (response) {
        const { access } = response.data
        if (access) {
          store.set('accessToken', access)
        }
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function register(username, email, password, zipcode, language, avatar, phoneNumber) {
  return apiClient
    .post('/auth/register/', {
      username,
      email,
      password,
      zipcode,
      language,
      avatar,
      phoneNumber
    })
    .then(response => {
      if (response) {
        const { accessToken } = response.data
        if (accessToken) {
          store.set('accessToken', accessToken)
        }
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function currentAccount() {
  return apiClient
    .get('/auth/account')
    .then(response => {
      if (response) {
        const { accessToken } = response.data
        if (accessToken) {
          store.set('accessToken', accessToken)
        }
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}


export async function logout() {
  return apiClient
    .get('/auth/logout')
    .then(() => {
      store.remove('accessToken')
      return true
    })
    .catch(err => console.log(err))
}