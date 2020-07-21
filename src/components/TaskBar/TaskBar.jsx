import React, { useState } from 'react'
import TaskBarLeftBox from '../TaskBarLeftBox/TaskBarLeftBox'
import TaskBarRightBox from '../TaskBarRightBox/TaskBarRightBox'

import styles from './taskbar.module.scss';
import StartMenu from '../StartMenu/StartMenu';

export default function TaskBar() {

  const [isActive, setIsActive] = useState(false)

  const boxClicked = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={`taskbar ${styles.taskbar}`}>
      <StartMenu isActive={isActive} />
      <div className={`taskbar__inner ${styles.taskbar__inner}`}>
        <TaskBarLeftBox isActive={isActive} onClick={boxClicked} />
        <TaskBarRightBox />
      </div>
    </div>
  )
}
