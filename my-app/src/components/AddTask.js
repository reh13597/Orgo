import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
      e.preventDefault()

      if (!text) {
          alert('Please add a task')
          return
      }
      onAdd({ text, day, reminder })
      setText('')
      setDay('')
      setReminder(false)
  }

  const label = { inputProps: { 'aria-label': 'Checkbox' } };

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div classname='form-control'>
            <label style={addTaskStyle}>Task</label>
            <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}/>
        </div>
        <div classname='form-control'>
            <label style={addTaskStyle}>Date</label>
            <input
            // type='datetime-local'
            type='text'
            value={day}
            onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div>
            <label style={addTaskStyle}>Set Reminder</label>
            <Checkbox
            {...label}
            type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <Button variant="contained" type='submit' className='saveBtn'>Save Task</Button>
    </form>
  )
}

const addTaskStyle = {
    color: 'white',
}

export default AddTask