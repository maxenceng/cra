import React from 'react'
import PropTypes from 'prop-types'

/* eslint-disable jsx-a11y/media-has-caption */
const Visual = ({ src, type }) => {
  switch (type) {
    case 'video':
    case 'web':
      return <iframe title={src} src={src} />
    case 'img':
    case 'img_url':
    default:
      return <img src={src} alt={type} />
  }
}

Visual.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Visual
