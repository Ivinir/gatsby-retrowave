const README_OPEN = 'README_OPEN';
const README_MINIMIZE = 'README_MINIMIZE';
const README_CLOSE = 'README_CLOSE';
const README_MAXIMIZE = 'README_MAXIMIZE';

import {
  WINDOW_OPEN,
  WINDOW_CLOSE,
  WINDOW_MINIMIZE,
  WINDOW_MAXIMIZE
} from '../actions/actions'

const initialState = {
  sectionWindow: { window: { image: 'notepad.png', label: 'startMenu.item.readMe', value: 'read-me' }, open: true, minimized: false, maximized: false },
};

const windowsReducer = (state = initialState, action) => {
  switch (action.type) {

    case WINDOW_OPEN: {
      return { ...state, sectionWindow: { window: action.window.window, open: true, minimized: false, maximized: false } };
    }

    case WINDOW_CLOSE: {
      return { ...state, sectionWindow: { window: action.window.window, open: false, minimized: false, maximized: false } };
    }

    case WINDOW_MINIMIZE: {
      return { ...state, sectionWindow: { window: action.window.window, open: false, minimized: true, maximized: false } };
    }

    case WINDOW_MAXIMIZE: {
     // const window = action.window;
      if (state.sectionWindow.maximized) {
        return { ...state, sectionWindow: { window: action.window, open: true, minimized: false, maximized: false } };
      } else {
        return { ...state, sectionWindow: { window: action.window, open: true, minimized: false, maximized: true } };
      }
    }

    default:
      return state;
  }
};

export default windowsReducer;
