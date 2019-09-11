import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class UserProjectsList extends Component {

  render () {
    return (
      <div className="box-messages-box">
        <div className="box-state-title">
           <div className="pv15 cGray">
              User Projects List
            </div>
            <div>
              x
            </div>
        </div>
        <div className="box-state-content cGray">
            lists...
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({  }) => ({

})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserProjectsList)
