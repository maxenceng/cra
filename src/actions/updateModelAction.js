export const UPDATE_PRESENTATION = 'UPDATE_PRESENTATION'
export const UPDATE_PRESENTATION_SLIDES = 'UPDATE_PRESENTATION_SLIDES'
export const UPDATE_CONTENT_MAP = 'UPDATE_CONTENT_MAP'
export const ADD_CONTENT = 'ADD_CONTENT'

export const updatePresentation = presentation => ({
  type: UPDATE_PRESENTATION,
  presentation,
})

export const updatePresentationSlides = presentationSlides => ({
  type: UPDATE_PRESENTATION_SLIDES,
  presentationSlides,
})

export const updateContentMap = contentMap => ({
  type: UPDATE_CONTENT_MAP,
  contentMap,
})

export const addContent = content => ({
  type: ADD_CONTENT,
  content,
})
