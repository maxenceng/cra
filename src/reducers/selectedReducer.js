import { UPDATE_SELECTED_SLIDE, UPDATE_DRAGGED_ELT } from '../actions/selectedAction'

const defaultState = {
  slide: {},
  id: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_SLIDE: {
      const { slide } = action
      return {
        ...state,
        slide,
      }
    }
    case UPDATE_DRAGGED_ELT: {
      const { id } = action
      return {
        ...state,
        id,
      }
    }
    default: return state
  }
}
