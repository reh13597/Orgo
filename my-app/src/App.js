import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import AppBar from './components/AppBar'
import Line from './components/Line'
import React, { useState } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState()
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Listen to new Yeat album',
        day: 'April 2nd at every second of the day',
        reminder: true,
    },
    {
        id: 2,
        text: 'Go to the washroom',
        day: 'April 2nd at 12:30 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Go to downtown Van',
        day: 'April 2nd at 12:45 pm',
        reminder: true,
    },
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
    { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div>
      <AppBar/>
      <div className='container'>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        <Line color="white"/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) :
        (<p style={{ color: 'white' }}>No tasks to show.</p>)}
      </div>
    </div>
  )
}

export default App