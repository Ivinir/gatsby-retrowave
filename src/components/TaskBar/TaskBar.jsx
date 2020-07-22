import React, { useState } from 'react'
import TaskBarLeftBox from '../TaskBarLeftBox/TaskBarLeftBox'
import TaskBarRightBox from '../TaskBarRightBox/TaskBarRightBox'

import { useStore, useDispatch, useSelector } from 'react-redux';
import styles from './taskbar.module.scss';
import StartMenu from '../StartMenu/StartMenu';

export default function TaskBar() {

  const dispatch = useDispatch()

  const { startMenuActive } = useSelector(state => ({
    startMenuActive: state.startMenuReducer.startMenuActive
  }))

  return (
    <div className={`taskbar ${styles.taskbar}`}>
      <StartMenu isActive={startMenuActive} />
      <div className={`taskbar__inner ${styles.taskbar__inner}`}>
        <TaskBarLeftBox isActive={startMenuActive} onClick={e => { dispatch({ type: "STARTMENU_TOGGLE" }) }} />
        <TaskBarRightBox />
      </div>
    </div>
  )
}
