import React from 'react'
import PropTypes from 'prop-types'
import './EditMetaSlide.css'

const EditMetaSlide = ({
  title,
  txt,
  handleChangeTitle,
  handleChangeTxt,
}) => (
  <div className="form-group">
    <label htmlFor="current-slide-title">Title</label>
    <input
      type="text"
      className="form-control"
      id="current-slide-title"
      onChange={handleChangeTitle}
      value={title}
    />
    <label htmlFor="current-slide-text">Text</label>
    <textarea
      rows="5"
      className="form-control"
      id="current-slide-text"
      onChange={handleChangeTxt}
      value={txt}
    />
  </div>
)

EditMetaSlide.propTypes = {
  handleChangeTitle: PropTypes.func.isRequired,
  handleChangeTxt: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
}

export default EditMetaSlide
