import React from 'react'
import PropTypes from 'prop-types'

const EditMetaPres = ({ field, onChange, value }) => (
  <div>
    <label htmlFor={`presentation-${field}`}>
      {field}
    </label>
    <input
      type="text"
      className="form-control"
      id={`presentation-${field}`}
      onChange={onChange(field)}
      value={value}
    />
  </div>
)

EditMetaPres.propTypes = {
  field: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default EditMetaPres
