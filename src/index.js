import 'antd/lib/style/index.less' // antd core styles
import './@kit/vendors/antd/themes/default.less' // default theme antd components
import './@kit/vendors/antd/themes/dark.less' // dark theme antd components
import './global.scss' // app & third-party component styles

import React from 'react'
import ReactDOM from 'react-dom'
import { createHashHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import App from 'app'
import reducers from './redux/reducers'
import sagas from './redux/sagas'
import Localization from './localization'

import * as serviceWorker from './serviceWorker'

// mocking api
import 'services/axios/fakeApi'

// middlewared
const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware]
if (process.env.NODE_ENV === 'development') {
  // middlewares.push(logger)
}
const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <Localization>
      <App history={history} />
    </Localization>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
export { store, history }
