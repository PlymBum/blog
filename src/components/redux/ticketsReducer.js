import ApiTickets from '../../api/apiTickets'

import { setTickets } from './ticketsActions'

const initialState = { tickets: [], filteredTickets: [] }

export function ticketReducer(state = initialState, actions = {}) {
  switch (actions.type) {
    case 'SET_TICKETS': {
      return { tickets: [...state.tickets, ...actions.payload.tickets], filteredTickets: [...state.filteredTickets] }
    }
    case 'SORT_TICKETS': {
      return { tickets: [...actions.payload.tickets], filteredTickets: [...state.filteredTickets] }
    }
    case 'SET_ERROR': {
      return { ...state, error: actions.payload }
    }
    case 'FILTER_TICKETS_ADD': {
      const filteredTickets = state.tickets.filter((el) => {
        if (actions.filter === 'one') return el.segments[0].stops.length === 1 && el.segments[1].stops.length === 1
        if (actions.filter === 'two') return el.segments[0].stops.length === 2 && el.segments[1].stops.length === 2
        if (actions.filter === 'three') return el.segments[0].stops.length === 3 && el.segments[1].stops.length === 3
        if (actions.filter === 'without') return el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0
        return false
      })
      return { ...state, filteredTickets: [...state.filteredTickets, ...filteredTickets] }
    }
    case 'FILTER_TICKETS_DELETE': {
      const filteredTickets = state.filteredTickets.filter((el) => {
        if (actions.filter === 'one') return el.segments[0].stops.length !== 1 && el.segments[1].stops.length !== 1
        if (actions.filter === 'two') return el.segments[0].stops.length !== 2 && el.segments[1].stops.length !== 2
        if (actions.filter === 'three') return !el.segments[0].stops.length !== 3 && el.segments[1].stops.length !== 3
        if (actions.filter === 'without') return el.segments[0].stops.length !== 0 && el.segments[1].stops.length !== 0
        return false
      })
      return { ...state, filteredTickets }
    }
    case 'SORT_CHEAP': {
      const sortedTickets = state.tickets.sort((a, b) => a.price - b.price)
      const sortedFilteredTickets = state.filteredTickets.sort((a, b) => a.price - b.price)
      return { ...state, tickets: sortedTickets, filteredTickets: sortedFilteredTickets }
    }
    case 'SORT_FAST': {
      const sortedTickets = state.tickets.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
      const sortedFilteredTickets = state.filteredTickets.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )

      return { ...state, tickets: sortedTickets, filteredTickets: sortedFilteredTickets }
    }
    case 'SORT_OPTIMAL': {
      const sortedTickets = state.tickets.sort(
        (a, b) =>
          (a.price < b.price) - (b.price < a.price) ||
          a.segments[0].duration + a.segments[1].duration <
            b.segments[0].duration + b.segments[1].duration + (b.segments[0].duration + b.segments[1].duration) <
            a.segments[0].duration + a.segments[1].duration
      )
      const sortedFilteredTickets = state.filteredTickets.sort(
        (a, b) =>
          (a.price < b.price) - (b.price < a.price) ||
          a.segments[0].duration + a.segments[1].duration <
            b.segments[0].duration + b.segments[1].duration + (b.segments[0].duration + b.segments[1].duration) <
            a.segments[0].duration + a.segments[1].duration
      )
      return { ...state, tickets: sortedTickets, filteredTickets: sortedFilteredTickets }
    }
    default:
      return state
  }
}

export const fetchTickets = (id) => async (dispatch) => {
  const apiTickets = new ApiTickets()
  // eslint-disable-next-line no-unused-vars
  const subscribe = async (searchId) => {
    const response = await apiTickets.getTickets(searchId)

    if (response.status === 500) {
      await subscribe(searchId)
    } else if (response.status !== 200) {
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 1000))
      subscribe(searchId)
    } else {
      const tickets = await response.json()
      dispatch(setTickets(tickets))
      if (!tickets.stop) {
        subscribe(searchId)
      }
    }
  }
  // subscribe(id) dev
  const response = await apiTickets.getTickets(id)
  const tickets = await response.json()
  dispatch(setTickets(tickets))
}
