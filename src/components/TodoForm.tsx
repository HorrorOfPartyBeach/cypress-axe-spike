interface Props {
  task: ITask
  completeTask(taskNameToDelete: string): void
}

const TodoList = ({ task, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{task.taskName}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName)
        }}
      >
        X
      </button>
    </div>
  )
}

export default TodoList
