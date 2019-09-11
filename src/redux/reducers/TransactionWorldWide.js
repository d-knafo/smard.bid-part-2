const initialState = {
  transactionWorldWide: [
    {
      id: 0,
      date: '2020/02/02',
      amount: 20,
      transaction: 'Security door'
    },
    {
      id: 1,
      date: '2020/02/02',
      amount: 20,
      transaction: 'Wardrobes'
    },
    {
      id: 2,
      date: '2020/02/02',
      amount: 20,
      transaction: 'Set Of tools'
    },
    {
      id: 3,
      date: '2020/02/02',
      amount: 20,
      transaction: 'Panoramic pictures'
    },
    {
      id: 4,
      date: '2020/02/02',
      amount: 20,
      transaction: 'Phone'
    },
    {
      id: 5,
      date: '2020/02/02',
      amount: 20,
      transaction: 'Monitors'
    },
  ]
}

export default (state = initialState, action) => {

  switch (action.type) {
    default:
      return state
  }
}
