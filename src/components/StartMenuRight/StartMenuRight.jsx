import React from 'react'
import styles from './startMenuRight.module.scss';
import StartMenuItem from '../StartMenuItem/StartMenuItem';
import { useTranslation } from 'react-i18next';

const StartMenuRight = () => {
  return (
    <div className={`startMenuRight ${styles.startMenuRight}`}>
      <MenuItemList />
    </div>
  )
}

const MenuItemList = (props) => {
  const { t, i18n } = useTranslation('common');

  const getMenuItemList = () => {
    if (i18n.language !== 'it') {
      return [
        { image: 'glitch-greek-bust.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
        { image: 'icon-contact.png', label: 'startMenu.item.social', value: 'social' },
        { image: 'icon-tools.png', label: 'startMenu.item.myTools', value: 'my-tools' },
        { image: 'icon-cv', label: 'startMenu.item.curriculumVitae', value: 'cv' }
      ]
    } else {
      return [
        { image: 'it-about-me.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
        { image: 'it-pizza.png', label: 'startMenu.item.social', value: 'social' },
        { image: 'it-pizza.png', label: 'startMenu.item.myTools', value: 'my-tools' },
        { image: 'it-pizza.png', label: 'startMenu.item.curriculumVitae', value: 'cv' }
      ]
    }
  }

  let menuItemList = getMenuItemList()
  const render = []

  if (menuItemList) {
    menuItemList.map((value, index) => {
      render.push(<StartMenuItem key={index} image={value.image} label={value.label} value={value.value} />)
    })
  }

  return (
    <div>
      {render}
    </div>
  )

}

export default StartMenuRight;