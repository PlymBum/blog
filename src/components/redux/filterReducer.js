const initState = {
  all: false,
  one: false,
  two: false,
  three: false,
  without: false,
}

function filterReducer(state = initState, actions = {}) {
  switch (actions.type) {
    case 'TOOGLE_CHECKED': {
      return { ...state, ...actions.filter }
    }
    case 'CHECKED_ALL': {
      return {
        all: true,
        one: true,
        two: true,
        three: true,
        without: true,
      }
    }
    case 'UNCHECKED_ALL': {
      return {
        all: false,
        one: false,
        two: false,
        three: false,
        without: false,
      }
    }
    case 'UNCHECKED_CHECKOX_ALL': {
      return {
        ...state,
        all: false,
      }
    }
    default:
      return state
  }
}
export default filterReducer
