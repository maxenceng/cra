import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Details from '../components/Details'
import Visual from '../components/Visual'

import { updateDraggedElt } from '../../../../actions/selectedAction'


class Content extends React.Component {
  onDragStart = (event) => {
    const { id, dispatch } = this.props
    event.dataTransfer.setData('text/html', `content${id}`)
    dispatch(updateDraggedElt(id))
  }

  render() {
    const {
      id,
      src,
      type,
      title,
      onlyContent,
    } = this.props
    return (
      <div id={`content${id}`} draggable="true" onDragStart={this.onDragStart}>
        <Visual src={src} type={type} />
        {!onlyContent && <Details id={id} title={title} />}
      </div>
    )
  }
}

Content.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onlyContent: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}

Content.defaultProps = {
  onlyContent: false,
}

export default connect()(Content)
