import React from 'react'
import styles from './startMenuLeft.module.scss';
import { useTranslation } from 'react-i18next';

const StartMenuLeft = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <div className={`startMenuLeft ${ styles.startMenuLeft}`} >
      <span className={`startMenuLeft ${ styles.startMenuLeft__text}`} >{t('startMenu.myName')}</span>
    </div>
  )
}

export default StartMenuLeft;