import React, { useEffect } from 'react';
import styles from './desktopIcon.module.scss';
import Image from '../Image/Image';
import { useTranslation } from 'react-i18next';

const DesktopIcon = (props) => {
  const { t, i18n } = useTranslation('common');

  const iconSelected = () => {
    alert(props.value)
  }

  return (
    <div className={`desktopIcon ${styles.desktopIcon}`}
      tabIndex={0}
      onClick={() => { iconSelected() }}
      onKeyDown={() => { iconSelected() }}
    >
      <div className="desktop-icon__image">
        <Image alt="placeholder" filename={props.image} />
      </div>
      <div className="desktop-icon__name">
        {t(props.label)}
      </div>
    </div>
  )
}

export default DesktopIcon;