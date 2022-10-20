import actions from './actions'

const initialState = {
  loading: false,
  currentRoom: '',
  messages: [],
  myRooms: [],
}

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
