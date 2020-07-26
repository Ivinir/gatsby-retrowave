import { TASKBAR_ITEM_ADD, TASKBAR_ITEM_REMOVE } from "../actions/actions";

const STARTMENU_TOGGLE = 'STARTMENU_TOGGLE';

const initialState = {
  startMenuActive: false,
  taskbarItems: []
};

const startMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case STARTMENU_TOGGLE:
      return { ...state, startMenuActive: !state.startMenuActive };

    case TASKBAR_ITEM_ADD:
      if (state.taskbarItems.length === 0) {
        state.taskbarItems.push(action.item)
      } else {
        // Checks if item already exists in the taskbarItems array
        if (!state.taskbarItems.some(item => item[0].window.value === action.item[0].window.value)) {
          state.taskbarItems.push(action.item)
        } else {
        }
      }
      return { ...state, taskbarItems: state.taskbarItems };

    case TASKBAR_ITEM_REMOVE:


      for (let i = 0; i < state.taskbarItems.length; i++) {
        const item = state.taskbarItems[i];
        console.log([i, { item }])


      }

      return { ...state, taskbarItems: state.taskbarItems };


    default:
      return state;
  }
};

export default startMenuReducer;
