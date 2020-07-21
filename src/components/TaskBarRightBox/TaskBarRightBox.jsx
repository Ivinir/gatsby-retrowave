import React, { useEffect, useState } from 'react'
import styles from './taskbarRightBox.module.scss'
import LanguageSelector from '../LanguageSelector/languageSelector';

const TaskBarRightBox = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    getTime();
    let timerID = setInterval(() => {
      getTime();
    }, 10000);
    return () => {
      clearInterval(timerID);
    }
  })

  function getTime() {
    setTime(new Date())
    setTime(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
  }

  return (
    <div className={`taskbarRightBox ${styles.taskbarRightBox}`}>
      <LanguageSelector />
      <span className={`taskbarRightBox ${styles.taskbarRightBox__clock}`}>{time.toString()}</span>
    </div>
  )
}

export default TaskBarRightBox;