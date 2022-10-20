import actions from './actions'

const initialState = {
  loading: false,
  all: [],
  byCategory: [],
  favourite: [],
  own: [],
  beforeSearch: [],
  inReviewMode: false,
  inImageSearchMode: false,
  searchByImageProducts: [],
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
