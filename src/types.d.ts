export {}

declare global {
  interface ITask {
    taskName: string
    deadline: Date
  }
}
