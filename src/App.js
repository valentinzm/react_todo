import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';


function App() {

  const title = <h1 className="mb-5">React ToDo list</h1>
  let [ todos, setTodos ] = useState([])
  const formHandler = (event) => {
    event.preventDefault();
    let inputvalue = event.target.todo.value;
    if(!inputvalue == ''){
      let newElement = { id: Date.now(), title: inputvalue, completed: false }
      setTodos( (prev) => { return [ ...prev, newElement ]} );
      event.target.todo.value = '';
    }
    
  }
  function ToDoCompleted(id){
   setTodos(todos.map( todo => {
     if(todo.id == id){
       todo.completed = !todo.completed
     }
     return todo;
   } ))
  }

  function ToDoRemoved(id){
    setTodos(todos.filter( todo => todo.id !== id))
  }
  return (
    <div className="container mt-5">
      {title}
      <form onSubmit={formHandler} className="mb-3">
        <input type="text" className='form-control mb-3'  name="todo" />
        <input type="submit" className="btn btn-success" value="Добавить" />
      </form>
      <div className="todos">
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id} completed={ToDoCompleted} removed={ToDoRemoved} />
          })}
      </div>
    </div>
  );
}

export default App;
