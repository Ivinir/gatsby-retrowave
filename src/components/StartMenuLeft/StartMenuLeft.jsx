import React from 'react'
import styles from './startMenuLeft.module.scss';

const StartMenuLeft = () => {
  return (
    <div className={`startMenuLeft ${ styles.startMenuLeft}`} >
      <span className={`startMenuLeft ${ styles.startMenuLeft__text}`} >diego santaolalla</span>
    </div>
  )
}

export default StartMenuLeft;