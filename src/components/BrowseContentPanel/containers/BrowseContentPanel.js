import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Content from '../../common/content/containers/Content'

const BrowseContentPanel = ({ contentMap }) => contentMap.map(({
  id,
  title,
  type,
  src,
}) => (
  <Content
    key={id}
    id={id}
    title={title}
    type={type}
    src={src}
    onlyContent
  />
))

BrowseContentPanel.propTypes = {
  contentMap: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = ({ updateModel: { contentMap } }) => ({ contentMap })

export default connect(mapStateToProps)(BrowseContentPanel)
