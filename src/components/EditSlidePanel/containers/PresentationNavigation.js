import React from 'react'
// import PropTypes from 'prop-types'

class PresentationNavigation extends React.Component {
  static propTypes = {
  }

  onClickAdd = () => {}

  onClickRemove = () => {}

  onClickSave = () => {}

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClickAdd}>Start</button>
        <button type="button" onClick={this.onClickRemove}>End</button>
        <button type="button" onClick={this.onClickSave}>Previous</button>
        <button type="button" onClick={this.onClickSave}>Next</button>
        <button type="button" onClick={this.onClickSave}>Last</button>
        <button type="button" onClick={this.onClickSave}>First</button>
      </div>
    )
  }
}

export default PresentationNavigation
