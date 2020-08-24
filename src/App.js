import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [item,setItem]=useState('')
  const [todos,setTodos]=useState([])
  const handleTodo=()=>{

    setTodos([...todos,{id:Math.random(),item:item}])
  }
  const removeitem=(id)=>{
    setTodos(todos.filter(el=>el.id!==id))

  }

  const edititem=(id)=>{
    let x=prompt('definir la nouvelle valeur')
    setTodos(todos.map(el=>(el.id===id)?{id:id,item:x}:el))
  }
  return (
    <div className="App">
    <input type='text' placeholder='task' onChange={(e)=>setItem(e.target.value)}/>
    <button onClick={handleTodo}>add</button>
    <div>{todos.map(el=><div>
      <p>{el.item}</p>
      <button onClick={()=> edititem(el.id)}>edit</button>
      <button onClick={()=>removeitem(el.id)}>delete</button>
    </div>)}
    </div>
    </div>
  );
}

export default App;
