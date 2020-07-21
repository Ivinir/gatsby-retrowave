import React, { useEffect } from 'react';
import styles from './desktop.module.scss';
import BackgroundSection from '../BackgroundSection/BackgroundSection';

const Desktop = () => {




  return (
    <div className={`desktop ${styles.desktop}`} >
      <BackgroundSection className="background" />
    </div>
  )
}

export default Desktop;