import React from 'react'
import styles from './startMenuItem.module.scss';
import Image from '../Image/Image';
import { useTranslation } from 'react-i18next';

const StartMenuItem = (props) => {
  const { t, i18n } = useTranslation('common');

  const iconSelected = () => {
    alert(props.value)
  }

  return (
    <div className={`startMenuItem ${styles.startMenuItem}`}
      role="button"
      onClick={e => { iconSelected() }}
      onKeyDown={() => { iconSelected() }}
      tabIndex={0}
    >
      <div className={`startMenuItem__image ${styles.startMenuItem__image}`} >
        <Image alt="placeholder" filename={props.image} />
      </div>
      <div className={`startMenuItem___text ${styles.startMenuItem__text}`} >
        {t(props.label)}
      </div>
    </div>
  )
}

export default StartMenuItem;