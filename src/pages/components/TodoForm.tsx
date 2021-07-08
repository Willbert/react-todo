import TodoItem from './TodoItem'

export default function TodoForm() {
  return(
    <form data-controller="add">
      <input
        name="todo"
        className="c-input"
        placeholder="What needs to be done?"
        data-add-target="input"
      />
    <TodoItem />
    </form>
  )
}
