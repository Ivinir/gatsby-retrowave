const STARTMENU_TOGGLE = 'STARTMENU_TOGGLE';


const initialState = {
  startMenuActive: false
}

const startMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case STARTMENU_TOGGLE:
      return { ...state, startMenuActive: !state.startMenuActive }
    default:
      return state;
  }
};

export default startMenuReducer;
