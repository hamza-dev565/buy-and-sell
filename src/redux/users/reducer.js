import getMenuData from 'services/menu'

const initialState = {
  role: 'admin',
  menuData: [],
  account_type: '',
  email: '',
  first_name: '',
  is_superuser: false,
  language: '',
  last_name: '',
  username: 'test8',
}

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TEST':
      if (payload.is_superuser) {
        return { ...state, ...payload, role: 'admin', menuData: getMenuData('admin') }
      }
      return { ...state, ...payload, role: 'user', menuData: getMenuData('user') }
    default:
      return state
  }
}

export default UserReducer
