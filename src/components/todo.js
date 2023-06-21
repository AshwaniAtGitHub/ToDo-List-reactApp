import React,{useState} from 'react';
import './style.css'

const ToDoApp=()=>{

const [todos,setTodos] = useState([])
const [inputValue,setInputValue] = useState('')

const handleInputChange =(event)=>{
     setInputValue(event.target.value)
}

const handleAddTodo =()=>{
    if(inputValue.trim()!==''){
        setTodos([...todos,inputValue])
        setInputValue('')
    }
}

const handleDeleteTodo = (index)=>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
}

    return(<>
       
            <div className='main'>
                       <h1>Todo List App in React JS</h1>
             <input type='text' value={inputValue} onChange={handleInputChange}  />
             <button onClick={handleAddTodo}>Add Todo</button>

              <ul>
                {todos.map((todo, index) => (
                     <li key={index}>
                        {todo}
                        <button onClick={()=>handleDeleteTodo(index)}>Delete</button>
                     </li>
                ))}
              </ul>

          </div>


    </>)
}


export default ToDoApp