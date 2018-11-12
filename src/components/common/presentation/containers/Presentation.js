import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { localUpdatePresentation } from '../../../../actions/updateModelAction'
import EditMetaPres from '../components/EditMetaPres'
import SlideList from '../components/SlideList'

class Presentation extends React.Component {
  static propTypes = {
    presentation: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slides: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        txt: PropTypes.string.isRequired,
        contentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      })).isRequired,
    }),
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = {
    presentation: {
      id: 0,
      title: 'Error',
      description: 'Could not fetch presentations',
      slides: [],
    },
  }

  handleChange = field => ({ target: { value } }) => {
    const { dispatch, presentation } = this.props
    dispatch(localUpdatePresentation({
      ...presentation,
      [field]: value,
    }))
  }

  render() {
    const {
      presentation: {
        id,
        title,
        description,
        slides,
      },
    } = this.props
    return (
      <div>
        {id}
        <EditMetaPres
          field="title"
          onChange={this.handleChange}
          value={title}
        />
        <EditMetaPres
          field="description"
          onChange={this.handleChange}
          value={description}
        />
        <SlideList slides={slides} />
      </div>
    )
  }
}

const mapStateToProps = ({ updateModel: { presentation: { data } } }) => ({ presentation: data })

export default connect(mapStateToProps)(Presentation)
