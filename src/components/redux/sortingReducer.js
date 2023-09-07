// const initialState = [
//   { text: 'ДЕШЕВЫЙ', id: 1, isActive: false },
//   { text: 'БЫСТРЫЙ', id: 2, isActive: false },
//   { text: 'ОПТИМАЛЬНЫЙ', id: 3, isActive: false },
// ]

const initialState = { cheap: false, fast: false, optimal: false }

export default function sortingReducer(state = initialState, actions = {}) {
  switch (actions.type) {
    case 'SORT_CHEAP': {
      return { cheap: true, fast: false, optimal: false }
    }
    case 'SORT_FAST': {
      return { cheap: false, fast: true, optimal: false }
    }
    case 'SORT_OPTIMAL': {
      return { cheap: false, fast: false, optimal: true }
    }
    default:
      return state
  }
}
