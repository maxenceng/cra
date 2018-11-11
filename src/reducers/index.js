import { combineReducers } from 'redux'

import selected from './selectedReducer'
import updateModel from './updateModelReducer'
import command from './commandReducer'

export default combineReducers({
  selected,
  updateModel,
  command,
})
