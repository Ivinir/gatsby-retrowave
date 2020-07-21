import React, { useEffect, useState } from 'react'
import styles from './taskbarRightBox.module.scss'
import { useTranslation } from "react-i18next";

const TaskBarRightBox = () => {
  const [time, setTime] = useState(() => new Date());
  const { t, i18n } = useTranslation('common');

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
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('zh')}>ZH</button>
      <span className={`taskbarRightBox ${styles.taskbarRightBox__clock}`}>{time.toString()}</span>
    </div>
  )
}

export default TaskBarRightBox;