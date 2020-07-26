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

export function openWindow(appWindow) {
  return { type: WINDOW_OPEN, appWindow }
}

export function maximizeWindow(appWindow) {
  return { type: WINDOW_MAXIMIZE, appWindow }
}


export function minimizeWindow(appWindow) {
  return { type: WINDOW_MINIMIZE, appWindow }
}


export function closeWindow(appWindow) {
  return { type: WINDOW_CLOSE, appWindow }
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