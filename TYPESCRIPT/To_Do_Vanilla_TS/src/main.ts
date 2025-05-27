import './style.css'
interface todo{
  id: number;
  title: string;
  completed: boolean;
}
const todos: todo[] =[]
const renderTodos = () => {
  const todoList = document.getElementById('todoList') as HTMLUListElement
  todoList.innerHTML = ''
  if(todos.length === 0){
    return todoList.innerHTML = '<li>No todos</li>'
  }
  todos.forEach((todo) => {
    let li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed
    checkbox.id = todo.id.toString()
    checkbox.addEventListener('change', (e: Event)=>{
      const target = e.target as HTMLInputElement
      const todoId = parseInt(target.id)
      const todoIndex = todos.findIndex((todo) => todo.id === todoId)
      if(todoIndex !== -1){
        todos[todoIndex].completed = target.checked
        renderTodos()
      }
    })
    const span = document.createElement('span')
    span.innerText = todo.title
    if(checkbox.checked){
      span.style.textDecoration = 'line-through'
    }
    const removeButton = document.createElement('button')
    removeButton.type = 'button'
    removeButton.innerText = 'Remove'
    removeButton.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLButtonElement
      const todoId = target.parentElement?.querySelector('input')?.id
      if(!todoId) return
      const todoIndex = todos.findIndex((todo)=> todo.id == parseInt(todoId))
      if(todoIndex !== -1){
        todos.splice(todoIndex, 1)
        renderTodos()
      }
    })
    li.append(checkbox,span,removeButton)
    todoList.appendChild(li)
  })
}
renderTodos()
const inputTodo = document.getElementById('inputTodo') as HTMLInputElement
const form = document.getElementById('toDoForm') as HTMLFormElement
form.addEventListener('submit', (e:Event) => {
  e.preventDefault()
  let todo: todo = {
    id: Math.floor(Math.random() * 1000),
    title: inputTodo.value,
    completed: false
  }
  inputTodo.value = ''
  todos.push(todo)
  renderTodos();
})
