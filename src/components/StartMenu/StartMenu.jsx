import React from 'react'
import styles from './startMenu.module.scss';
import StartMenuRight from '../StartMenuRight/StartMenuRight';
import StartMenuLeft from '../StartMenuLeft/StartMenuLeft';

const StartMenu = (props) => {
  
  return (
    <div className={
      `startMenu 
      ${styles.startMenu} 
      ${!props.isActive ? styles.startMenuHidden : ""}`} >
        <StartMenuLeft />
        <StartMenuRight />
    </div>
  )
}

export default StartMenu;
