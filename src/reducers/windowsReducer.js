const README_OPEN = 'README_OPEN';
const README_MINIMIZE = 'README_MINIMIZE';
const README_CLOSE = 'README_CLOSE';
const README_MAXIMIZE = 'README_MAXIMIZE';


const initialState = {
  windowReadme: { open: true, minimized: false, maximized: false }
}

const windowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case README_OPEN:
      return { ...state, windowReadme: { open: true, minimized: false, maximized: false } };
    case README_MINIMIZE:
      return { ...state, windowReadme: { open: false, minimized: true, maximized: false } };
    case README_CLOSE:
      return { ...state, windowReadme: { open: false, minimized: false, maximized: false } };
    case README_MAXIMIZE:
      if (state.windowReadme.maximized) {
        return { ...state, windowReadme: { open: true, minimized: false, maximized: false } };
      } else {
        return { ...state, windowReadme: { open: true, minimized: false, maximized: true } };
      }
    default:
      return state;
  }
};

export default windowsReducer;
