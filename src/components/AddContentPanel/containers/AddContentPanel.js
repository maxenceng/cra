import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux'

import { addContent } from '../../../actions/updateModelAction'

class AddContentPanel extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  state = {
    type: 'video',
    open: false,
    title: '',
    src: '',
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleChangeType = ({ target: { value } }) => this.setState({ type: value })

  handleChangeTitle = ({ target: { value } }) => this.setState({ title: value })

  handleChangeUrl = ({ target: { value } }) => this.setState({ src: value })

  addContent = () => {
    const { dispatch } = this.props
    const { type, title, src } = this.state
    dispatch(addContent({
      title,
      type,
      src,
    }))
    this.setState({ open: false })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onClick={this.addContent}
      />,
    ]

    const {
      type,
      open,
      title,
      src,
    } = this.state
    return (
      <MuiThemProvider>
        <RaisedButton label="Add Content" onClick={this.handleOpen} />
        <Dialog
          title="Add a new content"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.handleClose}
        >
          <div className="form-group">
            <label htmlFor="new-content-title">Title</label>
            <input
              type="text"
              className="form-control"
              id="new-content-title"
              onChange={this.handleChangeTitle}
              value={title}
            />
          </div>
          <select
            value={type}
            onChange={this.handleChangeType}
          >
            <option value="video">Video</option>
            <option value="img_url">Img URL</option>
            <option value="img">Img</option>
            <option value="web">Web</option>
          </select>
          <div className="form-group">
            <label htmlFor="new-content-url">URL</label>
            <input
              type="text"
              className="form-control"
              id="new-content-url"
              onChange={this.handleChangeUrl}
              value={src}
            />
          </div>
        </Dialog>
      </MuiThemProvider>
    )
  }
}

export default connect()(AddContentPanel)
