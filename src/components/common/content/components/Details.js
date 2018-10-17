import React from 'react'
import PropTypes from 'prop-types'

const Details = ({ id, title }) => (
  <div>
    <span>ID: {id}</span>
    <span>Title: {title}</span>
  </div>
)

Details.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
}

export default Details
