import React, {useState, useEffect} from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"

const oldTask = localStorage.getItem("tasks")

const App = () => {
  const [tasks,setTasks] = useState(JSON.parse(oldTask) || [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task,index) => index !== taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className="app_main">
          <TaskColumn icon={todoIcon} handleDelete={handleDelete} title="Todo" tasks={tasks} status="todo" />
          <TaskColumn icon={doingIcon} handleDelete={handleDelete} title="Doing" tasks={tasks} status="doing" />
          <TaskColumn icon={doneIcon} handleDelete={handleDelete}  title="Done" tasks={tasks} status="done" />
      </main>
    </div>
  )
}

export default App
