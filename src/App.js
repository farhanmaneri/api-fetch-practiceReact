import { useState } from 'react';
import './App.css';
import{get} from './components/api/get'

function App() {
  let [todos, setTodos]= useState(null)
let [error, setError] = useState(false)
  
 const handleClick = async()=>{
  try{
  let data = await get()
  // console.log(todos);
  setTodos(data)
}catch(error){
  setError(true)
}

  if(todos === null)
  return (<h1> loading ....</h1>)
  else if(error === true){
    return (<h1>something went wrong</h1>)
 }
 }
  return (
    <>
    <div className="App">
    <button onClick={handleClick}>Get Data</button>
    <ul>
      
        {todos && todos.map(todo =>(
      <div style={{color:todo.completed ? "red" : "green"}} key={todo.id}>{todo.id} {todo.title} </div>
        )
        )}
      
    </ul>
    </div>
   
      </>
  );
}

export default App;
