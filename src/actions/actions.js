/*
 * action types
 */

export const WINDOW_OPEN = 'WINDOW_OPEN';
export const WINDOW_MINIMIZE = 'WINDOW_MINIMIZE';
export const WINDOW_CLOSE = 'WINDOW_CLOSE';
export const WINDOW_MAXIMIZE = 'WINDOW_MAXIMIZE';


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

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}