import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from '../Image/Image';
import styles from './taskBarItem.module.scss'

const TaskBarItem = (props) => {
  const { t } = useTranslation('common')
  console.log(props)

  return (
    <button className={`taskBarItem ${styles.taskBarItem}`}
    type="button"
      onClick={props.action}
      onKeyDown={props.action}>
      <div className={`taskBarItem__image ${styles.taskBarItem__image}`}>
        <Image alt="placeholder" filename={props.image} />
      </div>
      <div className={`taskBarItem__label ${styles.taskBarItem__label}`}>
        {t(props.label)}
      </div>
    </button>
  )
}


export default TaskBarItem