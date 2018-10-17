import React from 'react'
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './index.css'
import BrowseContentPanel from '../BrowseContentPanel/containers/BrowseContentPanel'

import * as contentMap from '../../source/contentMap.json'

// REMOVE NEXT LINE
/* eslint-disable-next-line */
export default class MainPanel extends React.Component {
  render() {
    const content = Object.values(contentMap.default)
    return (
      <div className="container-fluid height-100">
        <div className="row height-100">
          <div className="col-md-3 col-lg-3 height-100 vertical-scroll" />
          <div className="col-md-6 col-lg-6 height-100" />
          <div className="col-md-3 col-lg-3 height-100 vertical-scroll">
            <BrowseContentPanel contentMap={content} />
          </div>
        </div>
      </div>
    )
  }
}
