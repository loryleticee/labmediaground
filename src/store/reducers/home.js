const INIT_STATE = {
  soundcloud: false,
  spotify: false,
}

export const Home = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ACTIVESOUNDCLOUD':
      return { ...state, soundcloud: true }

    case 'ACTIVESPOTIFY':
      return { ...state, spotify: true }

    default:
      return state
  }
}
