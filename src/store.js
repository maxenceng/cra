import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducers from './reducers'

export default createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger),
)
