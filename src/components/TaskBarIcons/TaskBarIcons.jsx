import React from 'react'
import styles from './taskBarIcons.module.scss';
import iconList from '../../lists/icons';

const TaskBarIcons = (props) => {

  const getTaskBarIconList = () => {
    const { i18n } = useTranslation('common');
    return (iconList(i18n.language))
  }

  console.log(props)
  console.log(getTaskBarIconList)
  
  return (
    <button className={`taskBarIcons ${styles.taskBarIcons}`}>
      icon
    </button>
  )
}



export default TaskBarIcons;