import React, { useEffect } from 'react';
import styles from './desktop.module.scss';
import DesktopIcon from '../DesktopIcon/DesktopIcon';
import { useTranslation } from 'react-i18next';

const Desktop = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={`desktop ${styles.desktop}`} >
      <DesktopIcon image={"glitch-greek-bust.png"} label={t('startMenu.item.aboutMe')} value={'about-me'} />
      <DesktopIcon image={"icon-contact.png"} label={t('startMenu.item.social')} value={'social'} />
      <DesktopIcon image={"icon-tools.png"} label={t('startMenu.item.myTools')} value={'my-tools'} />
      <DesktopIcon image={"icon-cv.png"} label={t('startMenu.item.curriculumVitae')} value={'cv'} />
      <DesktopIcon image={"icon-folder.png"} label={"Placeholder"} value={'placeholder'} />    </div>
  )
}

export default Desktop;