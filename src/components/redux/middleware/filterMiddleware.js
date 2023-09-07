// import { forEach } from 'lodash'

// const filterTicketsMiddleware = (store) => (next) => (actions) => {
//   const result = next(actions)
//   if (actions.type === 'TOOGLE_CHECKED') {
//     const { filters } = store.getState().filter
//     const { tickets } = store.getState().tickets
//     const currentFilters = []
//     filters.forEach((el) => {
//       console.log(el)
//       if (el.isChecked) currentFilters.push(el.id)
//     })
//     let filtredTickets = []
//     console.log(currentFilters)
//     const setFilteredTickets = (filter) => {
//       if (filter.includes(5)) return
//       if (filter.includes(3)) {
//         filtredTickets = tickets.filter((el) => el.segments[0].stops.length === 3 && el.segments[1].stops.length === 3)
//       }
//     }
//     setFilteredTickets(currentFilters)
//     console.log(filtredTickets, 'filtredTickets')
//   }
//   return result
// }
// export default filterTicketsMiddleware
