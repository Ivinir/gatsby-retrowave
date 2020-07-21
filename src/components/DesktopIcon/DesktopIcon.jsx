import React, { useEffect } from 'react';
import styles from './desktopIcon.module.scss';
import Image from '../Image/Image';

const DesktopIcon = (props) => {

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
        {props.label}
      </div>
    </div>
  )
}

export default DesktopIcon;