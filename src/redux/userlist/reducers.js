import actions from './actions'

const initialState = {
  userList: [],
  loading: false,
}

export default function userlistReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
