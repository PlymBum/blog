const initialState = [
  { text: 'ДЕШЕВЫЙ', id: 1, isActive: true },
  { text: 'БЫСТРЫЙ', id: 2, isActive: false },
  { text: 'ОПТИМАЛЬНЫЙ', id: 3, isActive: false },
]
export default function sortingReducer(state = initialState, actions = {}) {
  switch (actions.type) {
    case 'CHANGE_SORT': {
      const newArr = state.map((el) => {
        if (el.id === actions.id) return { ...el, isActive: true }
        return { ...el, isActive: false }
      })
      return newArr
    }
    default:
      return state
  }
}
