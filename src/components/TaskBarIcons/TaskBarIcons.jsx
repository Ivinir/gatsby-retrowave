import React from 'react'
import styles from './taskBarIcons.module.scss';
import iconList from '../../lists/icons';
import { useSelector } from 'react-redux';

const TaskBarIcons = (props) => {

  const { taskbarItems } = useSelector(state => ({
    taskbarItems: state.startMenuReducer.taskbarItems
  }))

  console.log(taskbarItems)
  let render = []

  if (taskbarItems) {
    taskbarItems.map((value, index) => {
      const item = value[0].window
      render.push(<Icon key={index} image={item.image} label={item.label} value={item.value} />)
    })
  }


  return (
    <div className={`taskBarIcons ${styles.taskBarIcons}`}>
      {render}
    </div>
  )
}

const Icon = props => {
  return (
    <button>
      {props.value}
    </button>
  )
}



export default TaskBarIcons;