import './App.css';
import {useState} from 'react'
import List from './components/List'
import AddTodo from './components/AddTodo'

function App(){
  const [todos, setTodos] = useState([])

function addTodo(item){
  const newTodos = [...todos, item]
  setTodos(newTodos)
}
  return(
    <div>
<AddTodo addTodo = {addTodo}/>
<List list= {todos}/>
    </div>
  )
}

export default App