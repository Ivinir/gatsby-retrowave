import React, { useEffect } from 'react';
import styles from './desktopIcon.module.scss';
import Image from '../Image/Image';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const DesktopIcon = (props) => {
  const { t, i18n } = useTranslation('common');
  const dispatch = useDispatch()

  return (
    <button className={`desktopIcon ${styles.desktopIcon}`}
      type="button"
      onClick={ props.action  }
      onKeyDown={ props.action  }
    >
      <div className="desktop-icon__image">
        <Image alt="placeholder" filename={props.image} />
      </div>
      <div className="desktop-icon__name">
        {t(props.label)}
      </div>
    </button>
  )
}

export default DesktopIcon;