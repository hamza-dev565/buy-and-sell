import axios from 'axios'
import store from 'store'
import agent from './agent'
import apiUrls from './apiUrls'
import { dataURLtoFile, fetchOptions } from './utils'

const baseUrl = `${process.env.REACT_APP_PUBLIC_API_URL}`

export const registerUserl = async params => {
  const { id, categoryIds, type } = params
  const { data } = await agent.post(apiUrls.UPDATE_INSIGHT_CATEGORIES(id), { categoryIds, type })
  return data
}

export const loginUser = async params => {
  // console.log('this is params ',params)
  //   const { data } = await agent.post(apiUrls.LOGIN_USER, params);
  //   console.log('data =-=-=-=', data);
  //   store.set('accessToken', data.access_token);
  //   return data
  try {
    return new Promise((resolve, reject) => {
      // console.log('this is api urls',apiUrls)
      // console.log('this is base url',baseUrl)
      // console.log('this is login',apiUrls.LOGIN_USER)
      try {
        fetch(baseUrl + apiUrls.LOGIN_USER, {
          ...fetchOptions('POST'),
          body: JSON.stringify(params),
        })
          .then(res => {
            res.json().then(data => {
              store.set('accessToken', data.access_token)
              resolve(data)
            })
          })
          .catch(e => {
            resolve(e)
          })
      } catch (e) {
        resolve(e)
      }
    })
  } catch (e) {
    return e
  }
}

export const registerUser = async payload => {
  try {
    const apiUrl = `/register/`
    const userData = new FormData()
    userData.append('profile_image', dataURLtoFile(payload.avatar, 'avatar.jpeg'))
    userData.append('username', payload.username)
    userData.append('language', 'JA')
    userData.append('first_name', 'NA')
    userData.append('last_name', 'NA')
    userData.append('phone', 'NA')
    userData.append('email', payload.email)
    userData.append('password', payload.password)
    userData.append('password2', payload.password)

    const config = {
      method: 'post',
      url: `${baseUrl}${apiUrl}`,
      data: userData,
    }

    const { data } = await agent.post(`${baseUrl}${apiUrl}`, userData)
    return data
  } catch (error) {
    return error.message
  }

  // axios(config)
  //   .then(response => {
  //     console.log(response)
  //     return response
  //   })
  //   .catch(error => {
  //     // console.log(error)
  //     throw new Error(error)
  //   })
  //   try {
  //       const {data} = await axios(config);
  //       console.log('data =-=-=-', data);
  //       return JSON.stringify(data);
  //   } catch (error) {
  //     console.log('error =-=-=-=-', error);
  //     throw new Error(error);
  //   }
}

export const getAdminOrders = async () => {
  try {
    const { data } = await agent.get(`${apiUrls.GET_ORDERS_FOR_ADMIN}`)
    return data
  } catch (error) {
    return error.message
  }
}

export const editPromo = async ({price, description, id}) => {
  try {
    const body = {
      name: "test",
      description,
      offer_price: price
    }

    const { data } = await agent.patch(`${apiUrls.GET_PROMOTIONS}${id}`, body)
    return data

  } catch (error) {
    return error.message
  }
}

export const createPromo = async ({price, description}) => {
  try {
    const body = {
      name : "testing",
      offer_price: price,
      description,
      currency: 'USD'
    }
    const { data } = await agent.post(`${apiUrls.GET_PROMOTIONS}`, body)
    return data
  } catch (error) {
    return error.message
  }
}

export const getPromotions = async () => {
  try {
    const { data } = await agent.get(`${apiUrls.GET_PROMOTIONS}`)
    return data
  } catch (error) {
    return error.message
  }
}

export const createOrder = async (id) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.user.pk
    const  body = {
      user: userId,
      total_amount: '12',
      currency: 'USD',
      products: [id]
    }

    const { data } = await agent.post(`${apiUrls.GET_MY_ORDERS}`, body)

    return data
  } catch (error) {
    return error.message
  }
}

export const getProfile = async payload => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.user.pk
    const { data } = await agent.get(`${apiUrls.GET_PROFILE}${userId}/`)
    return data
  } catch (error) {
    return error.message
  }
}

export const getOrders = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.user.pk
    const { data } = await agent.get(`${apiUrls.GET_MY_ORDERS}${userId}/`)
    return data
  } catch (error) {
    return error.message
  }
}

export const getReviews = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.user.pk
    const { data } = await agent.get(`${apiUrls.GET_MY_REVIEWS}${userId}`)
    return data
  } catch (error) {
    return error.message
  }
}

export const editProfile = async payload => {
  const userData = new FormData()
  if (payload.avatar) {
    userData.append('profile_image', dataURLtoFile(payload.avatar, 'avatar.jpeg'))
  }
  userData.append('first_name', payload.first_name)
  userData.append('last_name', payload.last_name)
  userData.append('phone', payload.phone)

  const user = JSON.parse(localStorage.getItem('user'))
  const userId = user.user.pk
  const { data } = await agent.patch(`${apiUrls.GET_PROFILE}${userId}/`, userData)
  return data
}

export const getUsers = async () => {
  const { data } = await agent.get(`${apiUrls.GET_ALL_USERS}`)
  return data
}

export const deleteUser = async id => {
  const { data } = await agent.delete(`${apiUrls.DELETE_USER}${id}/`)
  return data
}
