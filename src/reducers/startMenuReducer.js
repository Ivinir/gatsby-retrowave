import { TASKBAR_ITEM_ADD, TASKBAR_ITEM_REMOVE } from "../actions/actions";

const STARTMENU_TOGGLE = 'STARTMENU_TOGGLE';

const initialState = {
  startMenuActive: false,
  taskbarItems: [{ window: { image: 'notepad.png', label: 'startMenu.item.readMe', value: 'read-me' }, open: true, minimized: false, maximized: false }]
};

const startMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case STARTMENU_TOGGLE:
      return { ...state, startMenuActive: !state.startMenuActive };

    case TASKBAR_ITEM_ADD:
      const actItem = action.item
      if (state.taskbarItems.length === 0) {
        state.taskbarItems.push(actItem)
      } else {
        // Checks if item already exists in the taskbarItems array
        if (!state.taskbarItems.some(item => 
          item.window.value === actItem.window.value
          )) {
          state.taskbarItems.push(actItem)
        } else {
        }
      }
      return { ...state, taskbarItems: state.taskbarItems };

    case TASKBAR_ITEM_REMOVE:


      for (let i = 0; i < state.taskbarItems.length; i++) {
        const item = state.taskbarItems[i];
      }

      return { ...state, taskbarItems: state.taskbarItems };


    default:
      return state;
  }
};

export default startMenuReducer;
