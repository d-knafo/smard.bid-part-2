import React from 'react'
import BoxState from './../BoxState'
import BoxMessages from './../BoxMessages'
import UserProjectsList from './../UserProjectsList'
import SmallToDoList from './../SmallToDoList'
import TransactionWorldWide from './../TransactionWorldWide'
const Home = props => (

  <div>
    <div className="box-state-container">
      <BoxState type="primary" data={{
          title: 'Income',
          period: 'Mounthly',
          sum: '40 886 200',
          subTitle: 'Total income',
          percents: 98
        }} />

      <BoxState type="info" data={{
            title: 'Order',
            period: 'Annual',
            sum: '275,800',
            subTitle: 'New orders',
            percents: 20
          }} />

      <BoxState type="success" data={{
            title: 'Visits',
            period: 'Today',
            sum: '106,120',
            subTitle: 'New visits',
            percents: 44
          }} />

        <BoxState type="important" data={{
              title: 'User activity',
              period: 'Low value',
              sum: '80,600',
              subTitle: 'In first month',
              percents: 38
            }} />
    </div>

    <div className="orders-image">
      <img src="/orders.png"/>
    </div>

    <div className="w100">
        <div className="w50">
            <BoxMessages />
        </div>
        {/* <div className="w50">
            <div>
              <SmallToDoList />
              <UserProjectsList />
            </div>
        </div> */}
        <div className="w50 float-right">
            <TransactionWorldWide />
        </div>

    </div>

  </div>

)

export default Home
