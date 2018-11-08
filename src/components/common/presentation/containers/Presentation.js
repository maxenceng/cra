import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Slide from '../../slide/containers/Slide'

const Presentation = ({
  presentation: {
    id,
    title,
    description,
  },
  slideArray,
}) => (
  <div>
    {id}
    <label htmlFor="presentation-title">Title</label>
    <input
      type="text"
      className="form-control"
      id="presentation-title"
      onChange={null}
      value={title}
    />
    <label htmlFor="presentation-description">Description</label>
    <input
      type="text"
      className="form-control"
      id="presentation-description"
      onChange={null}
      value={description}
    />
    {slideArray.map(slide => (
      <Slide
        key={slide.id}
        id={slide.id}
        title={slide.title}
        txt={slide.txt}
        contentId={slide.contentId}
        displayMode="SHORT"
      />
    ))}
  </div>
)
Presentation.propTypes = {
  presentation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  slideArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
    contentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
}

const mapStateToProps = ({ updateModel: { presentation } }) => ({ presentation })

export default connect(mapStateToProps)(Presentation)
