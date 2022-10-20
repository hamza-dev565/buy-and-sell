import axios from 'axios'
import store from 'store'
import agent from './agent'
import apiUrls from './apiUrls'
import { dataURLtoFile, fetchOptions } from './utils'

const baseUrl = `${process.env.REACT_APP_PUBLIC_API_URL}`

export const createRoom = async ({ productId, productUserId }) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.user.pk
    const body = {
      created_by: userId,
      joined_by: productUserId,
      product: productId,
      name: `${userId}_${productUserId}`,
      description: `room for product ${productId} by user ${userId}`,
    }

    const { data } = await agent.post(`${apiUrls.CREATE_ROOM}`, body)
    return data
  } catch (error) {
    console.log('error ,', error)
    return error.message
  }
}

export const getMyRooms = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.user.pk

    const { data } = await agent.get(`${apiUrls.CREATE_ROOM}/${userId}`)

    return data
  } catch (error) {
    return error.message
  }
}
