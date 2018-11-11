import React from 'react'
// import PropTypes from 'prop-types'

class CommandButtons extends React.Component {
  static propTypes = {
  }

  onClickAdd = () => {}

  onClickRemove = () => {}

  onClickSave = () => {}

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClickAdd}>Add</button>
        <button type="button" onClick={this.onClickRemove}>Remove</button>
        <button type="button" onClick={this.onClickSave}>Save</button>
      </div>
    )
  }
}

export default CommandButtons
