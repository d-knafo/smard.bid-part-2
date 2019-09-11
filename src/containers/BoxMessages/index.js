import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class BoxMessages extends Component {
  constructor(props) {
        super(props)
        this.state = {
          messages: [
            {
              id: 0,
              from: 'Jhone Doe',
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              at: "02/02/2020"
            },
            {
              id: 1,
              from: 'Jhone Doe',
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              at: "02/02/2020"
            },
            {
              id: 2,
              from: 'Jhone Doe',
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
              at: "02/02/2020"
            },

          ]
        }
  }

  render () {
    const messageBox = this.state.messages.map( (m) =>
        <div className="message-row" key={m.id}>
          <div className="message-from">
            {m.from}
          </div>
          <div className="message-content">
            {m.content}
          </div>
          <div className="message-time">
            {m.at}
          </div>
        </div>
     );

    return (
      <div className="box-messages-box">
        <div className="box-state-title">
           <div className="pv15 cGray">
              Messages
            </div>
            <div>
              x
            </div>
        </div>
        <div className="box-state-content cGray">
          {messageBox}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({  }) => ({

})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoxMessages)
