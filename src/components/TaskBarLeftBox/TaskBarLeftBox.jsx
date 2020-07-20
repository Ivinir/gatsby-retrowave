import React from 'react'

import taskbarBarLeftBoxStyle from './taskbarLeftBox.module.scss';

export default function TaskBarLeftBox() {

  return (
    <div className={`taskbar-left ${taskbarBarLeftBoxStyle.taskbarLeftBox}` }> 
      TASK BAR LEFT BOX
    </div>
  )
}
