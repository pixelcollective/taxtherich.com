const initialState = {
  action: {
    id: `tax-jeff-bezos`,
    loaded: false,
    requested: false,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'action': {
      return {
        ...state,
        action: action.payload
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}
