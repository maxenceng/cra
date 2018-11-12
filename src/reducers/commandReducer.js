import { COMMAND_PRESENTATION } from '../actions/commandAction'

const defaultState = {
  cmdPres: '',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case COMMAND_PRESENTATION: {
      const { cmdPres } = action
      return {
        ...state,
        cmdPres,
      }
    }
    default: return state
  }
}
