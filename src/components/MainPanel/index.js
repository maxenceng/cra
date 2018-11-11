import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './index.css'
import BrowseContentPanel from '../BrowseContentPanel/containers/BrowseContentPanel'
import Slide from '../common/slide/containers/Slide'
import Presentation from '../common/presentation/containers/Presentation'
import Comm from '../../services/Comm'
import Tools from '../../services/Tools'

import { updateContentMap, updatePresentation } from '../../actions/updateModelAction'

class MainPanel extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    cmdPres: PropTypes.string.isRequired,
    presentation: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }

  static defaultProps = {
    presentation: {
      id: 0,
      title: 'Error',
      description: 'Could not fetch presentations',
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

  componentWillReceiveProps = (newProps) => {
    const { cmdPres } = this.props
    const { cmdPres: newCmdPres, presentation } = newProps
    if (cmdPres !== newCmdPres && newCmdPres === 'SAVE_CMD') {
      this.comm.savePres(presentation, err => console.error(err))
    }
  }

  render() {
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

const mapStateToProps = ({
  command: { cmdPres },
  updateModel: { presentation: { data } },
}) => ({
  cmdPres,
  presentation: data,
})

export default connect(mapStateToProps)(MainPanel)
