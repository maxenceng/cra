export const UPDATE_SELECTED_SLIDE = 'UPDATE_SELECTED_SLIDE'
export const UPDATE_DRAGGED_ELT = 'UPDATE_DRAGGED_ELT'

export const setSelectedSlide = slide => ({
  type: UPDATE_SELECTED_SLIDE,
  slide,
})

export const updateDraggedElt = id => ({
  type: UPDATE_DRAGGED_ELT,
  id,
})
