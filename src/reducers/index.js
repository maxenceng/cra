import { combineReducers } from 'redux'

import selected from './selectedReducer'
import updateModel from './updateModelReducer'

export default combineReducers({
  selected,
  updateModel,
})
