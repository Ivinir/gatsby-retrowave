import React from 'react'
import styles from './taskBarIcons.module.scss';
import iconList from '../../lists/icons';
import { useSelector } from 'react-redux';
import TaskBarItem from '../TaskBarItem/TaskBarItem';

const TaskBarIcons = (props) => {

  const { taskbarItems } = useSelector(state => ({
    taskbarItems: state.startMenuReducer.taskbarItems
  }))

  let render = []

  if (taskbarItems) {
    taskbarItems.map((value, index) => {
      const item = value.window
      render.push(<TaskBarItem key={index} image={item.image} label={item.label} value={item.value} />)
    })
  }


  return (
    <div className={`taskBarIcons ${styles.taskBarIcons}`}>
      {render}
    </div>
  )
}



export default TaskBarIcons;