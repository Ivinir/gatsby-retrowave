/*
 * action types
 */

export const WINDOW_OPEN = 'WINDOW_OPEN';
export const WINDOW_MINIMIZE = 'WINDOW_MINIMIZE';
export const WINDOW_CLOSE = 'WINDOW_CLOSE';
export const WINDOW_MAXIMIZE = 'WINDOW_MAXIMIZE';


export const TASKBAR_ITEM_ADD = 'TASKBAR_ITEM_ADD';
export const TASKBAR_ITEM_REMOVE = 'TASKBAR_ITEM_REMOVE';


/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function openWindow(window) {
  return { type: WINDOW_OPEN, window }
}

export function maximizeWindow(window) {
  return { type: WINDOW_MAXIMIZE, window }
}


export function minimizeWindow(window) {
  return { type: WINDOW_MINIMIZE, window }
}


export function closeWindow(window) {
  return { type: WINDOW_CLOSE, window }
}

export function taskbarItemAdd(item) {
  return { type: TASKBAR_ITEM_ADD, item }
}

export function taskbarItemRemove(item) {
  return { type: TASKBAR_ITEM_REMOVE, item }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}