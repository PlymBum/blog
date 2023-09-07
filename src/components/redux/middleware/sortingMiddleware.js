import { sortTickets } from '../ticketsActions'

const sortTicketsMiddleware = (store) => (next) => (actions) => {
  const result = next(actions)

  if (actions.type === 'CHANGE_SORT') {
    const currentSort = store.getState().sort.filter((el) => el.isActive)

    const { tickets } = store.getState().tickets

    let sortedTickets = {
      tickets: [],
    }
    const sorting = (activeSort) => {
      switch (activeSort.id) {
        case 1: {
          console.log('1')

          sortedTickets = {
            tickets: [...tickets.sort((a, b) => a.price - b.price)],
          }
          store.dispatch(sortTickets(sortedTickets))
          break
        }
        case 2: {
          console.log('2')

          sortedTickets = {
            tickets: [
              ...tickets.sort(
                (a, b) =>
                  a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
              ),
            ],
          }
          store.dispatch(sortTickets(sortedTickets))
          break
        }
        case 3: {
          console.log('3')
          sortedTickets = {
            tickets: [...tickets.sort((a, b) => a.segments[0].duration - b.segments[1].duration)],
          }
          store.dispatch(sortTickets(sortedTickets))
          break
        }
        default:
          break
      }
    }
    sorting(currentSort[0])
  }
  return result
}
export default sortTicketsMiddleware
