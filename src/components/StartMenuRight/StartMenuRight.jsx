import React from 'react'
import styles from './startMenuRight.module.scss';
import StartMenuItem from '../StartMenuItem/StartMenuItem';
import { useTranslation } from 'react-i18next';

const StartMenuRight = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <div className={`startMenuRight ${styles.startMenuRight}`}>
      <StartMenuItem image={"glitch-greek-bust.png"} label={t('startMenu.item.aboutMe')} value={'about-me'} />
      <StartMenuItem image={"icon-contact.png"} label={t('startMenu.item.social')} value={'social'} />
      <StartMenuItem image={"icon-tools.png"} label={t('startMenu.item.myTools')} value={'my-tools'} />
      <StartMenuItem image={"icon-cv.png"} label={t('startMenu.item.curriculumVitae')} value={'cv'} />
      <StartMenuItem image={"icon-folder.png"} label={"Placeholder"} value={'placeholder'} />
    </div>
  )
}

export default StartMenuRight;