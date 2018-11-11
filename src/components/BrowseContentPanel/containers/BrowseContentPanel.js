import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Content from '../../common/content/containers/Content'
import AddContentPanel from '../../AddContentPanel/containers/AddContentPanel'

const BrowseContentPanel = ({ contentMap }) => (
  <div>
    {contentMap.map(({
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
    ))}
    <AddContentPanel />
  </div>
)

BrowseContentPanel.propTypes = {
  contentMap: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })),
}

BrowseContentPanel.defaultProps = {
  contentMap: [],
}

const mapStateToProps = ({ updateModel: { contentMap: { data } } }) => ({ contentMap: data })

export default connect(mapStateToProps)(BrowseContentPanel)
