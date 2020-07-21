import React, { useEffect } from 'react';
import styles from './desktop.module.scss';
import BackgroundSection from '../BackgroundSection/BackgroundSection';

const Desktop = () => {


  useEffect(() => {
    glitcEffect();
  })

  const glitcEffect = () => {
    let bg = document.getElementById('background');
    let count = 10;
    for (let i = 0; i < count; i++) {
      let glitchBox = document.createElement('div');
      glitchBox.className = 'box';
      bg.appendChild(glitchBox)
    }
    let glitch = document.getElementsByClassName('box');
    let glitchInterval = Math.floor(Math.random() * 3000) + 1000;
    setInterval(() => {
      for (let i = 0; i < glitch.length; i++) {
        glitch[i].style.left = Math.floor(Math.random() * 100) + 'vw';
        glitch[i].style.top = Math.floor(Math.random() * 100) + 'vh';
        glitch[i].style.width = Math.floor(Math.random() * 200) + 'px';
        glitch[i].style.height = Math.floor(Math.random() * 20) + 'px';
        glitch[i].style.backgroundPosition = Math.floor(Math.random() * 50) + 'px';
      }
      glitchInterval = Math.floor(Math.random() * 4000) + 1000;
      setTimeout(() => {
        for (let i = 0; i < glitch.length; i++) {
          glitch[i].style.width = '0px';
          glitch[i].style.height = '0px';
          glitch[i].style.backgroundPosition = '0px';
        }
      }, 200);
    }, glitchInterval);
  }



  return (
    <div className={`desktop ${styles.desktop}`} >
      <BackgroundSection className="background" id="background" />
    </div>
  )
}

export default Desktop;