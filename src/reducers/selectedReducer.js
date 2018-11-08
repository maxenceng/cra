import { UPDATE_SELECTED_SLIDE } from '../actions/selectedAction'

const defaultState = {
  slide: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_SLIDE: {
      const slide = { action }
      return { slide }
    }
    default: return state
  }
}
