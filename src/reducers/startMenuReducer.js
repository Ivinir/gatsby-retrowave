import { TASKBAR_ITEM_ADD, TASKBAR_ITEM_REMOVE } from "../actions/actions";
import { displayWindow } from "../lists/icons";

const STARTMENU_TOGGLE = 'STARTMENU_TOGGLE';

const initialState = {
  startMenuActive: false,
  taskbarItems: [
    {
      appWindow: { image: 'notepad.png', label: 'startMenu.item.readMe', value: 'read-me', action: (e) => { displayWindow('en', 4) } },
      open: true,
      minimized: false,
      maximized: false
    }]
};

const startMenuReducer = (state = initialState, action) => {
  const actItem = action.item
  switch (action.type) {
    case STARTMENU_TOGGLE:
      return { ...state, startMenuActive: !state.startMenuActive };

    case TASKBAR_ITEM_ADD:
      if (state.taskbarItems.length === 0) {
        state.taskbarItems.push(actItem)
      } else {
        // Checks if item already exists in the taskbarItems array
        if (!state.taskbarItems.some(item =>
          item.appWindow.value === actItem.appWindow.value
        )) {
          state.taskbarItems.push(actItem)
        } else {
        }
      }
      return { ...state, taskbarItems: state.taskbarItems };

    case TASKBAR_ITEM_REMOVE:
      state.taskbarItems.findIndex((item, index) => {
        if (item.appWindow.value === actItem.appWindow.value) {
          state.taskbarItems.splice(index, 1)
        }
      })
      return { ...state, taskbarItems: state.taskbarItems };

    default:
      return state;
  }
};

export default startMenuReducer;
