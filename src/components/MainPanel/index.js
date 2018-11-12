import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './index.css'
import BrowseContentPanel from '../BrowseContentPanel/containers/BrowseContentPanel'
import BrowsePresentationPanel from '../BrowsePresentationPanel/containers/BrowsePresentationPanel'
import Slide from '../common/slide/containers/Slide'
import Comm from '../../services/Comm'
import Tools from '../../services/Tools'

import { updateContentMap, updatePresentation } from '../../actions/updateModelAction'
import { resetCmd } from '../../actions/commandAction'

class MainPanel extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    cmdPres: PropTypes.string.isRequired,
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
    slide: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      txt: PropTypes.string.isRequired,
      contentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
  }

  static defaultProps = {
    presentation: {
      id: 0,
      title: 'Error',
      description: 'Could not fetch presentations',
      slides: [],
    },
  }

  constructor(props) {
    super(props)
    this.comm = new Comm()
  }

  componentWillMount = () => {
    const { dispatch } = this.props
    dispatch(updateContentMap())
    dispatch(updatePresentation(1))
    const tools = new Tools()
    const uuid = tools.generateUUID()
    this.comm.socketConnection(uuid)
  }

  /**
   * React component lifecycle method, called when a value in props has been updated
   * @param newProps
   */
  componentWillReceiveProps = (newProps) => {
    const { cmdPres } = this.props
    const { cmdPres: newCmdPres, presentation, dispatch } = newProps
    // If we received a send command, then saves the presentation
    if (cmdPres !== newCmdPres && newCmdPres === 'SAVE_CMD') {
      this.comm.savePres(presentation, err => console.error(err))
      dispatch(resetCmd)
    }
  }

  render() {
    const { slide } = this.props
    return (
      <div className="container-fluid height-100">
        <div className="row height-100">
          <div className="col-md-3 col-lg-3 height-100 vertical-scroll">
            <BrowsePresentationPanel />
          </div>
          <div className="col-md-6 col-lg-6 height-100">
            <Slide
              id={slide.id}
              title={slide.title}
              txt={slide.txt}
              contentId={slide.contentId}
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

const mapStateToProps = ({
  command: { cmdPres },
  updateModel: { presentation: { data: presentation }, slide },
}) => ({
  cmdPres,
  presentation,
  slide,
})

export default connect(mapStateToProps)(MainPanel)
