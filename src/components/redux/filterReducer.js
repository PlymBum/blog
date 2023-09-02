const initState = {
  filters: [
    { id: 1, value: 'Все', isChecked: true },
    { id: 2, value: 'Без пересадок', isChecked: true },
    { id: 3, value: '1 пресадка', isChecked: true },
    { id: 4, value: '2 пересадки', isChecked: true },
    { id: 5, value: '3 пересадки', isChecked: true },
  ],
  allIsChecked: true,
}

function filterReducer(state = initState, action = {}) {
  switch (action.type) {
    case 'TOOGLE_CHECKED': {
      let newArr = state.filters.map((el) => {
        if (el.id === action.id) return { ...el, isChecked: !el.isChecked }
        return el
      })
      const allChecked = newArr.slice(1).every((el) => el.isChecked === true)
      if (!allChecked) {
        newArr = newArr.map((el) => {
          if (el.id === 1) return { ...el, isChecked: false }
          return el
        })
      }
      if (allChecked) {
        newArr = newArr.map((el) => {
          if (el.id === 1) return { ...el, isChecked: true }
          return el
        })
      }
      return { ...state, filters: newArr, allIsChecked: allChecked }
    }
    case 'TOOGLE_ALL': {
      if (!state.allIsChecked) {
        const newArr = state.filters.map((el) => {
          return { ...el, isChecked: true }
        })
        return { filters: newArr, allIsChecked: true }
      }
      const newArr = state.filters.map((el) => {
        return { ...el, isChecked: false }
      })
      return { filters: newArr, allIsChecked: false }
    }
    default:
      return state
  }
}
export default filterReducer
