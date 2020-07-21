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

  const getLocation = () => {
    if (i18n.language !== 'it') {
      return [
        { image: 'glitch-greek-bust.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
        { image: 'icon-contact.png', label: 'startMenu.item.social', value: 'social' },
        { image: 'icon-tools.png', label: 'startMenu.item.myTools', value: 'my-tools' },
        { image: 'icon-cv', label: 'startMenu.item.curriculumVitae', value: 'cv' }
      ]
    } else {
      return [
        { image: 'pizza.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
        { image: 'pizza.png', label: 'startMenu.item.social', value: 'social' },
        { image: 'pizza.png', label: 'startMenu.item.myTools', value: 'my-tools' },
        { image: 'pizza.png', label: 'startMenu.item.curriculumVitae', value: 'cv' }
      ]
    }

  }
  let menuItemList = getLocation()
  const items = []

  if (menuItemList) {
    menuItemList.map((value, index) => {
      items.push(<StartMenuItem key={index} image={value.image} label={value.label} value={value.value} />)
    })
  }

  return (
    <div>
      {items}
    </div>
  )

}

export default StartMenuRight;