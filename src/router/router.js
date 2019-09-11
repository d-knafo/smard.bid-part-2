import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../containers/home/index'

class ReactRouter extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
      </React.Fragment>
    )
  }
}

export default ReactRouter
