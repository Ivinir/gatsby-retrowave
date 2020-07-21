import React, { useEffect } from 'react';
import styles from './desktop.module.scss';
import DesktopIcon from '../DesktopIcon/DesktopIcon';
import { useTranslation } from 'react-i18next';

const Desktop = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={`desktop ${styles.desktop}`} >
      <DesktopIconList />
    </div>
  )
}

const DesktopIconList = () => {
  const { t, i18n } = useTranslation('common');

  const getDesktopIconList = () => {
    if (i18n.language !== 'it') {
      return [
        { image: 'glitch-greek-bust.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
        { image: 'icon-contact.png', label: 'startMenu.item.social', value: 'social' },
        { image: 'icon-tools.png', label: 'startMenu.item.myTools', value: 'my-tools' },
        { image: 'icon-cv', label: 'startMenu.item.curriculumVitae', value: 'cv' }
      ]
    } else {
      return [
        { image: 'pizza.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
        { image: 'pizza.png', label: 'startMenu.item.social', value: 'social' },
        { image: 'pizza.png', label: 'startMenu.item.myTools', value: 'my-tools' },
        { image: 'pizza.png', label: 'startMenu.item.curriculumVitae', value: 'cv' }
      ]
    }
  }
  let desktopIconList = getDesktopIconList();
  let render = []

  if (desktopIconList) {
    desktopIconList.map((value, index) => {
      render.push(<DesktopIcon key={index} image={value.image} label={value.label} value={value.value} />)
    })
  }

  return (
    <div>
      {render}
    </div>
  )

}

export default Desktop;