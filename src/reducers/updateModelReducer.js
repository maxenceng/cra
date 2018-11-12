import {
  UPDATE_PRESENTATION_SUCCESS,
  UPDATE_PRESENTATION_ERROR,
  LOCAL_UPDATE_PRESENTATION,
  UPDATE_CONTENT_MAP_SUCCESS,
  UPDATE_CONTENT_MAP_ERROR,
  UPDATE_SLIDE,
  ADD_CONTENT,
  ADD_SLIDE,
  REMOVE_SLIDE,
} from '../actions/updateModelAction'
import Tools from '../services/Tools'
import { COMMAND_PRESENTATION } from '../actions/commandAction'

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
  slide: {
    id: 0,
    title: '',
    txt: '',
    contentId: 0,
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PRESENTATION_SUCCESS: {
      const { data } = action
      const firstSlide = data.slides.length !== 0 && data.slides[0]
      return {
        ...state,
        presentation: {
          data,
          hasError: false,
          error: null,
        },
        slide: firstSlide,
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
      const formattedData = Object.values(data)
      return {
        ...state,
        contentMap: {
          data: formattedData,
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
    case LOCAL_UPDATE_PRESENTATION: {
      const { data } = action
      return {
        ...state,
        presentation: {
          ...state.presentation,
          data,
        },
      }
    }
    case UPDATE_SLIDE: {
      const { slide } = action
      return {
        ...state,
        slide,
      }
    }
    case ADD_SLIDE: {
      const { slide } = action
      const { data } = state.presentation
      return {
        ...state,
        presentation: {
          ...state.presentation,
          data: {
            ...data,
            slides: [...data.slides, slide],
          },
        },
      }
    }
    case REMOVE_SLIDE: {
      const { slideId } = action
      const { data } = state.presentation
      return {
        ...state,
        presentation: {
          ...state.presentation,
          data: {
            ...data,
            slides: data.slides.filter(slide => slide.id !== slideId),
          },
        },
      }
    }
    case COMMAND_PRESENTATION: {
      return state
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
