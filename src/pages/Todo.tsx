import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import TodoItem from './components/TodoItem'


type TodoProps = {};

export default function Todo({}: TodoProps) {
  return (
    <>
      <TodoHeader />
      <main className="text-center container shadow">
        <TodoForm />
        <TodoList />
        <TodoFooter />
      </main>
    </>
  )
}