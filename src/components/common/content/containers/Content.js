import React from 'react'
import PropTypes from 'prop-types'

import Details from '../components/Details'
import Visual from '../components/Visual'


const Content = ({
  id,
  src,
  type,
  title,
  onlyContent,
}) => (
  <div>
    <Visual src={src} type={type} />
    {!onlyContent && <Details id={id} title={title} />}
  </div>
)

Content.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onlyContent: PropTypes.bool,
}

Content.defaultProps = {
  onlyContent: false,
}

export default Content
