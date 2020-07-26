import React from 'react'
import styles from './startMenuItem.module.scss';
import Image from '../Image/Image';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const StartMenuItem = (props) => {
  const { t, i18n } = useTranslation('common');

  return (
    <button
      className={`startMenuItem ${styles.startMenuItem}`}
      type="button"
      onClick={props.action }
      onKeyDown={props.action }
    >
      <div className={`startMenuItem__image ${styles.startMenuItem__image}`}>
        <Image alt="placeholder" filename={props.image} />
      </div>
      <div className={`startMenuItem___text ${styles.startMenuItem__text}`} >
        {t(props.label)}
      </div>
    </button>
  )
}

export default StartMenuItem;