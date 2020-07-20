import React from 'react'
import TaskBarLeftBox from '../TaskBarLeftBox/TaskBarLeftBox'
import TaskBarRightBox from '../TaskBarRightBox/TaskBarRightBox'

import taskbarStyles from './taskbar.module.scss';

export default function TaskBar() {
  return (
    <div className={`taskbar ${taskbarStyles.taskbar}`}>
      <TaskBarLeftBox />
      <TaskBarRightBox />
    </div>
  )
}
