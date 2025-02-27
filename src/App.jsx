import { useState } from 'react'
import './App.css'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Primeira tarefa',
      description: 'Descrição da primeira tarefa'
    },
    {
      id: 2,
      title: 'Segunda tarefa',
      description: 'Descrição da segunda tarefa'
    },
    {
      id: 3,
      title: 'Terceira tarefa',
      description: 'Descrição da terceira tarefa'
    }
  ])

  function handleAddNewTodo(event){
    event.preventDefault()

    setTodos((todos) => {
      const newTodo = {
        title: inputValue,
        description: textareaValue
      }
      return [ ...todos, newTodo]
    })

    setInputValue('')
    setTextareaValue('')
  }

  function handleRemoveTodo(id) {
    const newTodoList = todos.filter((todo) => todo.id !== id)
    setTodos(newTodoList)
  }
  return (
    <>
      <header>
        <h1>ToDoList</h1>
      </header>

      <main>
        <div>
          <form onSubmit={handleAddNewTodo}>
              <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="Adicionar um titulo" className='todo-input' />
              <textarea value={textareaValue} onChange={(event) => setTextareaValue(event.target.value)} type="text" placeholder="Adicionar uma descricao" className='todo-textarea' />
              <button type="submit">Adicionar</button>
          </form>
        </div>
        <div className='todo-list-container'>
          {todos?.map((todo, index) => (
            <div key={index} id='divcard'>
              <input type="checkbox" id={todo.title} onClick={() => handleRemoveTodo(todo.id)}/> <br/>
              <label htmlFor={todo.title}>{todo.title}</label>
              <p>{todo.description}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; Todos os direitos reservados</p>
      </footer>
    </>
  )
}


