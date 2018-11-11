import { COMMAND_PRESENTATION, SEND_NAV_CMD } from '../actions/commandAction'

const defaultState = {
  cmdPres: '',
}

export default (state = defaultState, action) => {
  switch (action) {
    case COMMAND_PRESENTATION: {
      const { cmdPres } = action
      return {
        ...state,
        cmdPres,
      }
    }
    case SEND_NAV_CMD: return state
    default: return state
  }
}
