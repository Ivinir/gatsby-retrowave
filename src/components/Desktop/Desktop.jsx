import React, { useEffect } from 'react';
import styles from './desktop.module.scss';
import DesktopIcon from '../DesktopIcon/DesktopIcon';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import WindowReadme from '../WindowReadme/WindowReadme';

const Desktop = () => {
  const { t, i18n } = useTranslation('common');

  const { windowReadme } = useSelector(state => ({
    windowReadme: state.windowsReducer.windowReadme
  }))

  return (
    <div className={`desktop ${styles.desktop}`} >
      <DesktopIconList />
      <WindowReadme windowReadme={windowReadme} />
    </div>
  )
}

const DesktopIconList = () => {
  const { t, i18n } = useTranslation('common');
  let desktopIconList = getDesktopIconList();
  let render = []

  if (desktopIconList) {
    desktopIconList.map((value, index) => {
      render.push(<DesktopIcon key={index} image={value.image} label={value.label} value={value.value} dispatcher={value.dispatcher} />)
    })
  }

  return (
    <div>
      {render}
    </div>
  )
}

const getDesktopIconList = () => {
  const { t, i18n } = useTranslation('common');
  if (i18n.language !== 'it') {
    return [
      { image: 'glitch-greek-bust.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
      { image: 'icon-contact.png', label: 'startMenu.item.social', value: 'social' },
      { image: 'icon-tools.png', label: 'startMenu.item.myTools', value: 'my-tools' },
      { image: 'icon-cv.png', label: 'startMenu.item.curriculumVitae', value: 'cv' },
      { image: 'notepad.png', label: 'startMenu.item.readMe', value: 'read-me', dispatcher: 'README_OPEN' }
    ]
  } else {
    return [
      { image: 'it-about-me.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
      { image: 'it-pizza.png', label: 'startMenu.item.social', value: 'social' },
      { image: 'it-pizza.png', label: 'startMenu.item.myTools', value: 'my-tools' },
      { image: 'it-pizza.png', label: 'startMenu.item.curriculumVitae', value: 'cv' },
      { image: 'icon-cv.png', label: 'startMenu.item.readMe', value: 'read-me', dispatcher: 'README_OPEN' }

    ]
  }
}

export default Desktop;