import React, { useEffect } from 'react';
import styles from './desktop.module.scss';
import DesktopIcon from '../DesktopIcon/DesktopIcon';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import WindowReadme from '../WindowReadme/WindowReadme';
import iconList from '../../lists/icons'

const Desktop = () => {
  const { sectionWindow } = useSelector(state => ({
    sectionWindow: state.windowsReducer.sectionWindow
  }))

  return (
    <div className={`desktop ${styles.desktop}`} >
      <DesktopIconList />
      <WindowReadme sectionWindow={sectionWindow} />
    </div>
  )
}

const DesktopIconList = () => {
  let desktopIconList = getDesktopIconList();
  let render = []

  if (desktopIconList) {
    desktopIconList.map((value, index) => {
      render.push(<DesktopIcon key={index} image={value.image} label={value.label} value={value.value} action={value.action} />)
    })
  }

  return (
    <div>
      {render}
    </div>
  )
}

const getDesktopIconList = () => {
  const { i18n } = useTranslation('common');
  return (iconList(i18n.language))
}

export default Desktop;