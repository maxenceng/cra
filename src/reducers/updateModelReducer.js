import {
  UPDATE_PRESENTATION,
  UPDATE_PRESENTATION_SLIDES,
  UPDATE_CONTENT_MAP,
  ADD_CONTENT,
} from '../actions/updateModelAction'

const defaultState = {
  presentation: {},
  presentationSlides: {},
  contentMap: [],
  content: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PRESENTATION: {
      const { presentation } = action
      return {
        ...state,
        presentation,
      }
    }
    case UPDATE_PRESENTATION_SLIDES: return state
    case UPDATE_CONTENT_MAP: {
      const { contentMap } = action
      return {
        ...state,
        contentMap,
      }
    }
    case ADD_CONTENT: return state
    default: return state
  }
}
