const initialState = {
  paths: {
    paths: ``,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'paths': {
      return {
        ...state,
        paths: action.paths,
      }
    }

    default: {
      return { ...state }
    }
  }
}
