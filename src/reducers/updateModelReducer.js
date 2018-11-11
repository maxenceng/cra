import {
  UPDATE_PRESENTATION_SUCCESS,
  UPDATE_PRESENTATION_ERROR,
  UPDATE_PRESENTATION_SLIDES,
  UPDATE_CONTENT_MAP_SUCCESS,
  UPDATE_CONTENT_MAP_ERROR,
  ADD_CONTENT,
  ADD_SLIDE,
  REMOVE_SLIDE,
} from '../actions/updateModelAction'
import Tools from '../services/Tools'

const defaultState = {
  presentation: {
    data: undefined,
    hasError: false,
    error: null,
  },
  presentationSlides: [],
  contentMap: {
    data: undefined,
    hasError: false,
    error: null,
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PRESENTATION_SUCCESS: {
      const { data } = action
      return {
        ...state,
        presentation: {
          data,
          hasError: false,
          error: null,
        },
      }
    }
    case UPDATE_PRESENTATION_ERROR: {
      const { error } = action
      return {
        ...state,
        presentation: {
          data: undefined,
          hasError: true,
          error,
        },
      }
    }
    case UPDATE_CONTENT_MAP_SUCCESS: {
      const { data } = action
      return {
        ...state,
        contentMap: {
          data,
          hasError: false,
          error: null,
        },
      }
    }
    case UPDATE_CONTENT_MAP_ERROR: {
      const { error } = action
      return {
        ...state,
        contentMap: {
          data: undefined,
          hasError: true,
          error,
        },
      }
    }
    case UPDATE_PRESENTATION_SLIDES: return state
    case ADD_SLIDE: {
      const { slide } = action
      return {
        ...state,
        presentationSlides: [
          ...state.presentationSlides,
          slide,
        ],
      }
    }
    case REMOVE_SLIDE: {
      const { slideId } = action
      return {
        ...state,
        presentationSlides: state.presentationSlides.filter(slide => slide.id === slideId),
      }
    }
    case ADD_CONTENT: {
      const { content } = action
      const data = state.contentMap.data || []
      const tools = new Tools()
      const id = tools.generateUUID()
      return {
        ...state,
        contentMap: {
          ...state.contentMap,
          data: [
            ...data,
            {
              ...content,
              id,
            },
          ],
        },
      }
    }
    default: return state
  }
}
