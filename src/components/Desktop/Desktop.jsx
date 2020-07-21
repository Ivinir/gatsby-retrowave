import React, { useEffect } from 'react';
import styles from './desktop.module.scss';
import DesktopIcon from '../DesktopIcon/DesktopIcon';

const Desktop = () => {
  return (
    <div className={`desktop ${styles.desktop}`} >
      <DesktopIcon />
    </div>
  )
}

export default Desktop;