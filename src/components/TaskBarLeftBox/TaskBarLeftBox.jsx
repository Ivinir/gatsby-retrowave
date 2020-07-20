import React from 'react'

import taskbarBarLeftBoxStyle from './taskbarLeftBox.module.scss';
import { useTranslation } from 'react-i18next';

export default function TaskBarLeftBox() {
  const { t, i18n } = useTranslation('common');
  return (
    <div className={`taskbar-left ${taskbarBarLeftBoxStyle.taskbarLeftBox}`}>
      {t('taskbar.leftBox.start')}


   
    </div>
  )
}
