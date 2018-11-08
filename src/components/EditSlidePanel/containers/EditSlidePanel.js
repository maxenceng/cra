import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Slide from '../../common/slide/containers/Slide'
import {updatePresentationSlides} from '../../../actions/updateModelAction'

class EditSlidePanel extends React.Component {
  static propTypes = {
    slide: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      txt: PropTypes.string.isRequired,
      contentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  updateSlidePanel = () => {
    const {
      slide,
      dispatch,
    } = this.props
    dispatch(updatePresentationSlides(slide))
  }

  render() {
    const {
      slide: {
        id,
        title,
        txt,
        contentId,
      },
    } = this.props
    return (
      <Slide
        id={id}
        title={title}
        txt={txt}
        contentId={contentId}
        displayMode="FULL_MNG"
      />
    )
  }
}

const mapStateToProps = ({ selected: { slide } }) => ({ slide })

export default connect(mapStateToProps)(EditSlidePanel)
