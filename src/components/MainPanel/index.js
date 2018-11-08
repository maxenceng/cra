import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './index.css'
import BrowseContentPanel from '../BrowseContentPanel/containers/BrowseContentPanel'
import * as contentMap from '../../source/contentMap.json'
import Slide from '../common/slide/containers/Slide'
import Presentation from '../common/presentation/containers/Presentation'

import { updateContentMap, updatePresentation } from '../../actions/updateModelAction'

// REMOVE NEXT LINE
/* eslint-disable-next-line */
class MainPanel extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount = () => {
    const { dispatch } = this.props
    const content = Object.values(contentMap.default)
    dispatch(updateContentMap(content))
    dispatch(updatePresentation({
      id: 0,
      title: 'Presentation title',
      description: 'Presentation description',
    }))
  }

  render() {
    console.log(contentMap)
    const slideArray = [{
      id: 0,
      title: 'Slide title',
      txt: 'Slide txt',
      contentId: 2,
    }]
    return (
      <div className="container-fluid height-100">
        <div className="row height-100">
          <div className="col-md-3 col-lg-3 height-100 vertical-scroll">
            <Presentation slideArray={slideArray} />
          </div>
          <div className="col-md-6 col-lg-6 height-100">
            <Slide
              id={0}
              title="Basic slide title"
              txt="Texte"
              contentId={1}
              displayMode="SHORT"
            />
            <Slide
              id={0}
              title="Basic slide title"
              txt="Texte"
              contentId={1}
              displayMode="FULL_MNG"
            />
          </div>
          <div className="col-md-3 col-lg-3 height-100 vertical-scroll">
            <BrowseContentPanel />
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(MainPanel)
