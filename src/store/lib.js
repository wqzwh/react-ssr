function createReducer(initialState, reducerObj) {
  return (state = initialState, action) => {
    if (reducerObj[action.type]) {
      return reducerObj[action.type](state, action)
    }
    return state
  }
}

export { createReducer }
