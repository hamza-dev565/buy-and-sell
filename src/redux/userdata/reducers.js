import actions from './actions'

const initialState = {
  loading: false,
  orders: [],
  reviews: [],
  adminOrders: [],
  promos: []
}

export default function userdataReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
