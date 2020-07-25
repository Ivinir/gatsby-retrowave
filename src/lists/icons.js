
const openCV = () => {
  const cvURL = 'https://drive.google.com/file/d/15KyGipos6rFm9ptyjSTZ-Iom67mNS1Tc/view?usp=sharing';
  window.open(cvURL, '_blank')
}

const jibiri = () => {
  console.log('aaaaaazaaaaaaa')
}

const iconList = (language) => {
  if (language !== 'it') {
    return [
      { image: 'glitch-greek-bust.png', label: 'startMenu.item.aboutMe', value: 'about-me' },
      { image: 'icon-contact.png', label: 'startMenu.item.social', value: 'social' },
      { image: 'icon-tools.png', label: 'startMenu.item.myTools', value: 'my-tools' },
      { image: 'icon-cv.png', label: 'startMenu.item.curriculumVitae', value: 'cv', action: openCV },
      { image: 'notepad.png', label: 'startMenu.item.readMe', value: 'read-me', action: jibiri }
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

