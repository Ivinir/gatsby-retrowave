import React, { useEffect, useState } from 'react'
import taskbarRightBoxStyles from './taskbarRightBox.module.scss'
import { useTranslation } from "react-i18next";

export default function TaskBarRightBox() {
  const [time, setTime] = useState(formatDate(new Date()));
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    let timerID = setInterval(() => {
      getTime();
    }, 10000);
    return () => {
      clearInterval(timerID);
    }
  })

  function getTime() {
    let time = new Date();
    time = formatDate(time);
    setTime(time);
  }

  function formatDate(date) {
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  return (
    <div className={`taskbarRightBox ${taskbarRightBoxStyles.taskbarRightBox}`}>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      {time.toString()}
    </div>
  )
}
