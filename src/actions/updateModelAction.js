import Comm from '../services/Comm'

export const ADD_CONTENT = 'ADD_CONTENT'
export const UPDATE_PRESENTATION_SUCCESS = 'UPDATE_PRESENTATION_SUCCESS'
export const UPDATE_PRESENTATION_ERROR = 'UPDATE_PRESENTATION_ERROR'
export const UPDATE_CONTENT_MAP_SUCCESS = 'UPDATE_CONTENT_MAP_SUCCESS'
export const UPDATE_CONTENT_MAP_ERROR = 'UPDATE_CONTENT_MAP_ERROR'
export const ADD_SLIDE = 'ADD_SLIDE'
export const REMOVE_SLIDE = 'REMOVE_SLIDE'
export const UPDATE_SLIDE = 'UPDATE_SLIDE'
export const LOCAL_UPDATE_PRESENTATION = 'LOCAL_UPDATE_PRESENTATION'

export const localUpdatePresentation = data => ({
  type: LOCAL_UPDATE_PRESENTATION,
  data,
})

export const addSlide = slide => ({
  type: ADD_SLIDE,
  slide,
})

export const removeSlide = slideId => ({
  type: REMOVE_SLIDE,
  slideId,
})

export const updateSlide = slide => ({
  type: UPDATE_SLIDE,
  slide,
})

export const addContent = content => ({
  type: ADD_CONTENT,
  content,
})

export const updatePresentationSuccess = data => ({
  type: UPDATE_PRESENTATION_SUCCESS,
  data,
})

export const updatePresentationError = error => ({
  type: UPDATE_PRESENTATION_ERROR,
  error,
})

export const updatePresentation = presId => (dispatch) => {
  const comm = new Comm({})
  comm.loadPres(
    presId,
    data => dispatch(updatePresentationSuccess(data)),
    err => dispatch(updatePresentationError(err)),
  )
}

export const updateContentMapSuccess = data => ({
  type: UPDATE_CONTENT_MAP_SUCCESS,
  data,
})

export const updateContentMapError = error => ({
  type: UPDATE_CONTENT_MAP_ERROR,
  error,
})

export const updateContentMap = () => (dispatch) => {
  const comm = new Comm({})
  comm.loadContent(
    data => dispatch(updateContentMapSuccess(data)),
    err => dispatch(updateContentMapError(err)),
  )
}
