/* eslint-disable */
import store from 'store'

import agent from './agent'

import apiUrls from './apiUrls'
import { generateQueryParams, fetchOptions, dataURLtoFile } from './utils'

const baseUrl = `${process.env.REACT_APP_PUBLIC_API_URL}`

export async function addProduct(payload) {
  try {
    const { data } = agent.post(`${baseUrl}${apiUrls.CREATE_PRODUCT}`, payload)
    return data
  } catch (error) {
    return error.message
  }
}

export async function addReview({id, review}){
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    let body = {
      user: user.user.pk,
      product: id,
      message: review,
      rating: 5
    }
    const {data} = await agent.post(`${apiUrls.REVIEW_PRODUCT}`, body)
    return data
  } catch (error) {
    return error.message
  }
}

export async function getProductsByCategory(id) {
  const { data } = await agent.get(generateQueryParams(apiUrls.PRODUCTS, { categories: id }))
  return data
}

export async function searchProductsByImage(values) {
  try {
    const body = new FormData()
    body.append('query_img', dataURLtoFile(values.product.images[0].data_url, 'avatar.jpeg'))
    const { data } = await agent.post(`${apiUrls.SEARCH_PRODUCT}`, body)
    return data
  } catch (error) {
    return error.message
  }
}

export async function getOwnProductsByStatus(status) {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const { data } = await agent.get(
      `${baseUrl}${apiUrls.PRODUCTS}?user=${user.user.pk}&product_status=${status}`,
    )
    return data
  } catch (error) {
    return error.message
  }
}

export const getProducts = async params => {
  try {
    const { data } = await agent.get(apiUrls.PRODUCTS)
    return data
  } catch (error) {
    return error.message
  }

  // const accessToken = store.get('accessToken')
  // try {
  //   return new Promise((resolve, reject) => {
  //     const token = localStorage.getItem('user')

  //     console.log(typeof token)
  //     try {
  //       fetch(baseUrl + apiUrls.PRODUCTS, {
  //         ...fetchOptions(token.access_token),
  //         body: JSON.stringify(params),
  //       })
  //         .then(res => {
  //           res.json().then(data => resolve(data))
  //         })
  //         .catch(e => {
  //           console.log('this is errror', e)
  //         })
  //     } catch (e) {
  //       reject(e)
  //     }
  //   })
  // } catch (e) {
  //   return e
  // }
}

export const addToFavourite = async params => {
  try {
    console.log(params, 'params')
    const user = JSON.parse(localStorage.getItem('user'))
    const payload = {
      user: user.user.pk,
      product: params,
    }
    const { data } = await agent.post(`${baseUrl}${apiUrls.FAVOURITES}`, payload)
    return data
  } catch (e) {
    return e.message
  }
}

export const getFavourites = async params => {
  console.log('here I am =-=--=-=-=-', baseUrl)

  // const accessToken = store.get('accessToken')
  const user = JSON.parse(localStorage.getItem('user'))
  const favt = `${apiUrls.FAVOURITES + user.user.pk}/`
  const { data } = await agent.get(favt)
  store.set('accessToken', data.access_token)
  return data
  // try {
  //   return new Promise((resolve, reject) => {
  //     const token = localStorage.getItem('user')

  //     console.log(typeof token)
  //     try {
  //       // eslint-disable-next-line prefer-template
  //       fetch(baseUrl + apiUrls.FAVOURITES + user.user.pk +'/', {
  //         ...fetchOptions('GET',token.access_token),
  //       })
  //         .then(res => {
  //           res.json().then(data => resolve(data))
  //         })
  //         .catch(e => {
  //           console.log('this is errror', e)
  //         })
  //     } catch (e) {
  //       reject(e)
  //     }
  //   })
  // } catch (e) {
  //   return e
  // }
}

export const uploadImages = async images => {
  try {
    const imagesData = new FormData()
    for (const im of images) {
      imagesData.append('image', im.file)
    }
    const { data } = await agent.post(`${baseUrl}${apiUrls.UPLOAD_IMAGES}`, imagesData)
    return data
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}
