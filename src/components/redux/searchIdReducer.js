import ApiTickets from '../../api/apiTickets'

export const searchIdReducer = (state = '', action = {}) => {
  switch (action.type) {
    case 'GET_ID':
      return { id: action.payload }
    default:
      return state
  }
}

const setSearchId = (payload) => ({
  type: 'GET_ID',
  payload,
})

export const fetchSearchId = () => async (dispatch) => {
  const apiTickets = new ApiTickets()
  apiTickets.getSearchId().then((id) => {
    dispatch(setSearchId(id))
  })
}
