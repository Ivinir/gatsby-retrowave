import React from 'react'
import Image from '../../components/image/image';

import styles from './taskbarLeftBox.module.scss';
import { useTranslation } from 'react-i18next';

const TaskBarLeftBox = (props) => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={`taskbar-left 
    ${styles.taskbarLeftBox}
    ${props.isActive ? styles.taskbarLeftBoxActive : ""}`
    } onClick={props.onClick}>
      <div className={`taskbar-left__imageContainer ${styles.taskbarLeftBox__imageContainer} `}>
        <Image alt="Windows logo" filename="windows-logo.png" />
      </div>
      <span>
        {t('taskbar.leftBox.start')}
      </span>
    </div>
  )
}

export default TaskBarLeftBox;