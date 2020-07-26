import React, { useState } from 'react'
import styles from './languageSelector.module.scss'
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation('common');

  function openMenu() {
    setMenuOpen(!menuOpen)

  }

  return (
    <div className={`languageSelector ${styles.languageSelector}`} >
      <LanguageSelectorMenu menuOpen={menuOpen} />
      <button onClick={openMenu}>{i18n.language.toUpperCase()}</button>
    </div>
  )
}

const LanguageSelectorMenu = (props) => {
  const { t, i18n } = useTranslation('common');

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }

  if (props.menuOpen) {
    return (
      <div className={`languageSelectorMenu ${styles.languageSelectorMenu}`} >
        <button onClick={() => changeLanguage('es')}>ES</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('zh')}>ZH</button>
        <button onClick={() => changeLanguage('it')}>IT</button>
      </div>
    )
  } else {
    return null;
  }
}



export default LanguageSelector;