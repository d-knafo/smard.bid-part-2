import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class BoxState extends Component {

  render () {
    const data = this.props.data

    return (
      <div className="box-state-box">
        <div className="box-state-title">
           <div className="pv15 cGray">
              {data.title}
            </div>
            <div className={`pv15 badge badge-${this.props.type}`}>
              {data.period}
            </div>
        </div>
        <div className="box-state-content cGray">
          <div className="box-state-sum">
            {data.sum}
          </div>
          <div className="box-state-footer">
             <div className="box-state-footer-first">
                {data.subTitle}
              </div>
              <div className={`text-${this.props.type}`}>
                {data.percents}%
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({  }) => ({

})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoxState)
