/* eslint-disable */

import { all, takeEvery, put, call, takeLatest } from 'redux-saga/effects'
import { notification } from 'antd'
import store from 'store'
import qs from 'qs'
import { history, store as reduxStore } from 'index'
import * as ProductApi from 'api/product'
import actions from './actions'

export function* ADD_PRODUCT({ payload: { product } }) {
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: true,
    },
  })

  // uploading images first
  const imagesResponse = yield call(ProductApi.uploadImages, product.images)
  if (imagesResponse.message === 'Success') {
    const userJSON = localStorage.getItem('user')
    const userData = JSON.parse(userJSON)
    const imagesData = imagesResponse.Data
    const productToSend = {
      name: product.name,
      description: product.description,
      market_price: product.market_price,
      categories: [product.categories],
      user: userData.user.pk,
      images: [],
    }
    for (const im of imagesData) {
      productToSend.images.push(im.id)
    }

    const response = yield call(ProductApi.addProduct, productToSend)
    if (response !== 'Request failed with status code 400') {
      yield put({
        type: 'product/SET_STATE',
        payload: {
          loading: false,
        },
      })
      notification.success({
        message: 'Success',
        description: 'Product created Successfully',
      })
      yield history.push('/main-page')
    } else {
      yield put({
        type: 'product/SET_STATE',
        payload: {
          loading: false,
        },
      })
      notification.error({
        message: 'Error',
        description: 'Error occured while creating product',
      })
    }
  } else {
    yield put({
      type: 'product/SET_STATE',
      payload: {
        loading: false,
      },
    })
    notification.error({
      message: 'Error',
      description: 'Error occured while uploading images',
    })
  }

  // const response = yield call(ProductApi.addProduct, product)
  // if (response) {
  //   notification.success({
  //     duration: 200,
  //     message: 'Added Product',
  //     description: 'You have successfully added product!',
  //   })
  //   yield put({
  //     type: 'product/SET_STATE',
  //     payload: {
  //       items: [],
  //     },
  //   })
  // }
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* GET_PRODUCTS_BY_CATEGORY({ payload: { id } }) {
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: true,
    },
  })
  // when category type is all, call function to get all products, otherwise, call another function related to getting products by category
  const response =
    id === -1
      ? yield call(ProductApi.getProducts)
      : yield call(ProductApi.getProductsByCategory, id)
  // const response = 1
  if (response && response !== 'Request failed with status code 401') {
    if (id === -1) {
      yield put({
        type: 'product/SET_STATE',
        payload: {
          all: response,
          beforeSearch: response,
        },
      })
    } else {
      yield put({
        type: 'product/SET_STATE',
        payload: {
          byCategory: response,
        },
      })
    }
  } else {
    localStorage.removeItem('user')
    yield history.push('/auth/login')
  }
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* ADD_FAVOURITE({ payload }) {
  const { id } = payload
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const response = yield call(ProductApi.addToFavourite, id)
  if (response) {
    notification.success({
      duration: 200,
      message: 'Added to Favourite',
      description: 'You have successfully added product to Favourites!',
    })
  }
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* GET_FAVOURITE_PRODUCTS() {
  // console.log('id here =-=-=- fvt get', id)
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: true,
    },
  })
  // when category type is all, call function to get all products, otherwise, call another function related to getting products by category
  const response = yield call(ProductApi.getFavourites)
  if (response) {
    yield put({
      type: 'product/SET_STATE',
      payload: {
        favourite: response,
      },
    })
  }
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* SEARCH_PRODUCTS_BY_IMAGE({ payload }) {
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const response = yield call(ProductApi.searchProductsByImage, payload)
  if (response && response.message && response.message === 'Images not found ') {
    let products = []

    yield put({
      type: 'product/SET_STATE',
      payload: {
        searchByImageProducts: products,
        inImageSearchMode: true,
      },
    })
  } else {
    let products = response.map(el => {
      return el[0]
    })

    yield put({
      type: 'product/SET_STATE',
      payload: {
        searchByImageProducts: products,
        inImageSearchMode: true,
      },
    })
  }

  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* SEARCH_PRODUCTS({ payload: { searchTerm, products } }) {
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: true,
    },
  })

  products = products.filter(product => {
    if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }
    return false
  })

  yield put({
    type: 'product/SET_STATE',
    payload: {
      all: products,
    },
  })

  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* ADD_REVIEW({ payload: { id, review } }) {
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const response = yield call(ProductApi.addReview, { id, review })
  notification.success({
    duration: 200,
    message: 'Success',
    description: 'Review Added Successfully!',
  })
  yield put({
    type: 'product/SET_STATE',
    payload: {
      inReviewMode: false,
    },
  })

  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* GET_OWN_PRODUCTS_BY_STATUS({ payload: { status } }) {
  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const response = yield call(ProductApi.getOwnProductsByStatus, status)

  yield put({
    type: 'product/SET_STATE',
    payload: {
      own: response,
    },
  })

  yield put({
    type: 'product/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.ADD_PRODUCT, ADD_PRODUCT),
    takeEvery(actions.GET_PRODUCTS_BY_CATEGORY, GET_PRODUCTS_BY_CATEGORY),
    takeEvery(actions.ADD_FAVOURITE, ADD_FAVOURITE),
    takeEvery(actions.GET_FAVOURITE, GET_FAVOURITE_PRODUCTS),
    takeEvery(actions.GET_OWN_PRODUCTS_BY_STATUS, GET_OWN_PRODUCTS_BY_STATUS),
    takeEvery(actions.SEARCH_PRODUCTS_BY_IMAGE, SEARCH_PRODUCTS_BY_IMAGE),
    takeEvery(actions.ADD_REVIEW, ADD_REVIEW),
    takeLatest(actions.SEARCH_PRODUCTS, SEARCH_PRODUCTS),
    // takeEvery(actions.SET_THEME, SET_THEME),
    // SETUP(), // run once on app load to init listeners
  ])
}
