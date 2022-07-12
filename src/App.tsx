import React, { ChangeEvent, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './App.css'
import Header from './components/Header'
import TodoTask from './components/TodoTask'

const App: React.FC = () => {
  const [task, setTask] = useState<string>('')
  // const [deadLine, setDeadLine] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([])
  const [startDate, setStartDate] = useState(new Date())

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      // setDeadLine(Number(event.target.value))
      setStartDate(new Date(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: startDate,
    }
    setTodo([...todo, newTask])
    setTask('')
    // setDeadLine(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete
      }),
    )
  }

  return (
    <div className='App'>
      <Header />
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Task...'
            name='task'
            value={task}
            onChange={handleChange}
          />

          {/* <input
            type='number'
            placeholder='DeadLine (in days)'
            name='deadline'
            value={deadLine}
            onChange={handleChange}
          /> */}
          <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todo.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
    </div>
  )
}

export default App
