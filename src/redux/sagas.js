import { all } from 'redux-saga/effects'
import user from './user/sagas'
import category from './category/sagas'
import menu from './menu/sagas'
import settings from './settings/sagas'
import product from './product/sagas'
import userlist from './userlist/sagas'
import userdata from './userdata/sagas'
import chat from './chat/sagas'

export default function* rootSaga() {
  yield all([user(), menu(), settings(), category(), product(), userlist(), userdata(), chat()])
}
