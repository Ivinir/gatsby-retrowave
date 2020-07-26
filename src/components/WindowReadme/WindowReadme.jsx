import React, { useEffect, useState } from 'react'
import Draggable from "react-draggable"

import styles from './windowReadme.module.scss';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { maximizeWindow, closeWindow, minimizeWindow } from '../../actions/actions'

const WindowReadme = ({ sectionWindow }) => {
  const [readmeWindow, setReadmeWindow] = useState({ window: 'read-me' }, { open: false, minimized: false, maximized: false })

  useEffect(() => {
    if (sectionWindow[0].window === 'read-me') {
      setReadmeWindow(sectionWindow[1]);
    }
  })

  const { t, i18n } = useTranslation('common');

  const dispatch = useDispatch()

  function maximize() {
    dispatch(maximizeWindow('read-me'))
  }

  function minimize() {
    dispatch(minimizeWindow('read-me'))
  }

  function close() {
    dispatch(closeWindow('read-me'))
  }



  if (readmeWindow.open && !readmeWindow.minimized) {
    return (
      <Draggable
        bounds="parent"
        handle=".windowReadme__bar__left" >
        <div className={`windowReadme ${styles.windowReadme} ${readmeWindow.maximized ? styles.windowReadme__maximized : ""}`}>
          <div className={`windowReadme__bar ${styles.windowReadme__bar}`}>
            <span className={`windowReadme__bar__left ${styles.windowReadme__bar__left}`}>{t('readme.title')}</span>
            <div className={`windowReadme__bar__button__container ${styles.windowReadme__bar__button__container}`}>
              <button type="button" className={`windowReadme__bar__button ${styles.windowReadme__bar__button}`} onClick={() => { minimize() }}>_</button>
              <button type="button" className={`windowReadme__bar__button ${styles.windowReadme__bar__button}`} onClick={() => { maximize() }}>[]</button>
              <button type="button" className={`windowReadme__bar__button ${styles.windowReadme__bar__button}`} onClick={() => { close() }}>X</button>
            </div>
          </div>
          <div className={`windowReadme__screen ${styles.windowReadme__screen}`}>
            <div className={`windowReadme__screen__content ${styles.windowReadme__screen__content}`}>
              <span>{t('readme.content')}</span>
            </div>
          </div>
        </div>
      </Draggable >
    )
  } else {
    return null;
  }
}

export default WindowReadme