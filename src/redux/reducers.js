import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './user/reducers'
import menu from './menu/reducers'
import settings from './settings/reducers'
import category from './category/reducers'
import product from './product/reducers'
import userReducer from './users/reducer'
import userlistReducer from './userlist/reducers'
import userdataReducer from './userdata/reducers'
import chatReducer from './chat/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    menu,
    settings,
    category,
    product,
    userReducer,
    userlistReducer,
    userdataReducer,
    chatReducer,
  })
