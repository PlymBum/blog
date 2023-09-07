export const setTickets = (payload) => ({ type: 'SET_TICKETS', payload })
export const sortTickets = (payload) => ({ type: 'SORT_TICKETS', payload })
export const setError = (payload) => ({ type: 'SET_ERROR', payload })
export const filterTicketsAdd = (filter) => ({ type: 'FILTER_TICKETS_ADD', filter })
export const filterTicketsDelet = (filter) => ({ type: 'FILTER_TICKETS_DELETE', filter })

export const sortByCheap = () => ({ type: 'SORT_CHEAP' })
export const sortByFast = () => ({ type: 'SORT_FAST' })
export const sortByOptimal = () => ({ type: 'SORT_OPTIMAL' })
