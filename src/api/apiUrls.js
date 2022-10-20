const users = {
  REGISTER_USER: `/register/`,
  LOGIN_USER: `/login/`,
  GET_PROFILE: '/profile/',
  GET_ALL_USERS: '/users/',
  DELETE_USER: '/user/',
}

const products = {
  PRODUCTS: `/products/`,
  FAVOURITES: `/favourites/`,
  UPLOAD_IMAGES: '/images/',
  CREATE_PRODUCT: '/product/',
  SEARCH_PRODUCT: '/search_by_image',
}

const category = {
  CATEGORY: `/categories/`,
}

const orders = {
  GET_MY_ORDERS: '/order/',
  GET_ORDERS_FOR_ADMIN: '/orders/',
  GET_PROMOTIONS: '/promotion/'
}

const reviews = {
  GET_MY_REVIEWS: '/review/received/',
  REVIEW_PRODUCT: '/review/',
}

const chat = {
  CREATE_ROOM: '/room',
}

export default {
  ...users,
  ...products,
  ...category,
  ...orders,
  ...reviews,
  ...chat,
}
