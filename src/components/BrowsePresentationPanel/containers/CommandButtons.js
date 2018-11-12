import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addSlide, removeSlide } from '../../../actions/updateModelAction'
import { sendNavCmd } from '../../../actions/commandAction'

class CommandButtons extends React.Component {
  static propTypes = {
    slide: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      txt: PropTypes.string.isRequired,
      contentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    contentId: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    contentId: null,
  }

  onClickAdd = () => {
    const { dispatch, slide, contentId } = this.props
    dispatch(addSlide({
      ...slide,
      contentId,
    }))
  }

  onClickRemove = () => {
    const { dispatch, slide } = this.props
    dispatch(removeSlide(slide.id))
  }

  onClickSave = () => {
    const { dispatch } = this.props
    dispatch(sendNavCmd)
  }

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

const mapStateToProps = ({ updateModel: { slide }, selected: { id } }) => ({ slide, contentId: id })

export default connect(mapStateToProps)(CommandButtons)
