import WindowReadme from "../components/WindowReadme/WindowReadme";
import { useDispatch, useStore } from 'react-redux';
import { openWindow, taskbarItemAdd } from "../actions/actions";
import store from '../store/store';




const openCV = () => {
  const cvURL = 'https://drive.google.com/file/d/15KyGipos6rFm9ptyjSTZ-Iom67mNS1Tc/view?usp=sharing';
  window.open(cvURL, '_blank')
}

const displayWindow = (language, number) => {
  store.dispatch(openWindow(iconList(language)[number]))
  store.dispatch(taskbarItemAdd([
    { window: iconList(language)[number] },
    { open: true, minimized: false, maximized: false }
  ])
  )
}

const iconList = (language) => {
  if (language !== 'it') {
    return [
      { image: 'glitch-greek-bust.png', label: 'startMenu.item.aboutMe', value: 'about-me', action: (e) => { displayWindow(language, 0) } },
      { image: 'icon-contact.png', label: 'startMenu.item.social', value: 'social', action: (e) => { displayWindow(language, 1) } },
      { image: 'icon-tools.png', label: 'startMenu.item.myTools', value: 'my-tools', action: (e) => { displayWindow(language, 2) } },
      { image: 'icon-cv.png', label: 'startMenu.item.curriculumVitae', value: 'cv', action: openCV },
      { image: 'notepad.png', label: 'startMenu.item.readMe', value: 'read-me', action: (e) => { displayWindow(language, 4) } }
    ]
  } else {
    return [
      { image: 'it-about-me.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
      { image: 'it-pizza.png', label: 'startMenu.item.social', value: 'social' },
      { image: 'it-pizza.png', label: 'startMenu.item.myTools', value: 'my-tools' },
      { image: 'it-pizza.png', label: 'startMenu.item.curriculumVitae', value: 'cv' },
      { image: 'icon-cv.png', label: 'startMenu.item.readMe', value: 'read-me', action: 'README_OPEN' }

    ]
  }
}

export default iconList;

