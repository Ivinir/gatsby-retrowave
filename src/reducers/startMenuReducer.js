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
        state.taskbarItems.forEach(item => {
          if (item[0].window.value === action.item[0].window.value) {
            return;
          }
          state.taskbarItems.push(action.item)
        });
      }
      return { ...state, taskbarItems: state.taskbarItems };

    case TASKBAR_ITEM_REMOVE:

      console.log(state)
      console.log(action)

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
