import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ?
    'reminder' : ''}`}
    onDoubleClick={() =>
    onToggle(task.id)}>
        <h3 style={taskStyle}>
        {task.text}
        <FaTimes style={{color: 'red', cursor: 'pointer'}}
        onClick={() => onDelete(task.id)}/>
        </h3>
        <p style={taskStyle}>{task.day}</p>
    </div>
  )
}

const taskStyle = {
  color: 'white',
}

export default Task