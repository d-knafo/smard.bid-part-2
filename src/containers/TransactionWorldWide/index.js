import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
var Highcharts = require('highcharts/highmaps.js'),
    map = require('@highcharts/map-collection/countries/il/il-all.geo.json');

class TransactionWorldWide extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      this.renderTheMap()
  }

  renderTheMap() {
    Highcharts.mapChart('chart', {
      chart: {
        map: map
      },
    });
    // need to complete that
    // and function to change the series
  }

  render () {
    const row = this.props.transactionWorldWide.map( t =>
        <tr>
          <td>{ t.id }</td>
          <td>{ t.transaction }</td>
          <td>{ t.date }</td>
          <td>{ t.amount }</td>
        </tr>
     );
    return (
      <div className="box-messages-box">
        <div className="box-state-title">
           <div className="pv15 cGray">
              Transaction WorldWide
            </div>
            <div>
             x
            </div>
        </div>
        <div className="box-state-content cGray">
        <div>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Transaction</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {row}
            </tbody>
          </table>

          <div id="chart" >

          </div>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  transactionWorldWide: state.transactionWorldWide.transactionWorldWide,
})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TransactionWorldWide)
