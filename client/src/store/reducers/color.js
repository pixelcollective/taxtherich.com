const initialState = {
  color: {
    primary: `#CFCFCF`,
    secondary: `#000000`,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'color': {
      return {
        ...state,
        color: {
          primary: action.color.primary,
          secondary: action.color.secondary,
        },
      }
    }

    default : {
      return { ...state }
    }
  }
}
