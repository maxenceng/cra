import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Slide.css'
import Content from '../../content/containers/Content'
import EditMetaSlide from '../components/EditMetaSlide'

import { updateSlide } from '../../../../actions/updateModelAction'

class Slide extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
    contentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    contentMap: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })),
    displayMode: PropTypes.oneOf(['SHORT', 'FULL_MNG']).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    contentMap: [],
  }

  updateSlide = field => ({ target: { value } }) => {
    const {
      id,
      title,
      txt,
      contentId,
      dispatch,
    } = this.props
    dispatch(updateSlide({
      id,
      title,
      txt,
      contentId,
      [field]: value,
    }))
  }

  onDrop = (event) => {
    event.preventDefault()
    const contentId = event.dataTransfer.getData('text/html')
    event.currentTarget.appendChild(document.getElementById(contentId))
  }

  allowDrop = event => event.preventDefault()

  render() {
    const {
      id,
      title,
      txt,
      contentId,
      contentMap,
      displayMode,
    } = this.props
    const content = contentMap.find(line => line.id === contentId)
    return (
      <div onDrop={this.onDrop} onDragOver={this.allowDrop}>
        <h1>{id} {title}</h1>
        <p>{txt}</p>
        {content && (
          <Content
            id={contentId}
            title={content.title}
            type={content.type}
            src={content.src}
            onlyContent
          />
        )}
        {displayMode === 'FULL_MNG'
          ? (
            <EditMetaSlide
              title={title}
              txt={txt}
              handleChangeTitle={this.updateSlide('title')}
              handleChangeTxt={this.updateSlide('txt')}
            />
          ) : null}
      </div>
    )
  }
}

const mapStateToProps = ({ updateModel: { contentMap: { data } } }) => ({ contentMap: data })

export default connect(mapStateToProps)(Slide)
