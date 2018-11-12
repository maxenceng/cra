import React from 'react'
import PropTypes from 'prop-types'

import Slide from '../../slide/containers/Slide'

const SlideList = ({ slides }) => slides.map(({
  id,
  title,
  txt,
  contentId,
}) => (
  <Slide
    key={id}
    id={id}
    title={title}
    txt={txt}
    contentId={contentId}
    displayMode="SHORT"
  />
))

SlideList.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
    contentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
}

export default SlideList
