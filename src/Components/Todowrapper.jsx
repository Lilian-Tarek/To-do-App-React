import React, { useState } from 'react'
import Todoform from './Todoform'
import Todo from "../Components/Todo";
import Edit from './Edit';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
const Todowrapper = () => {

  const EditTask = (task,thisid) => {
   setTodos(
     todos.map((e) => (e.id === thisid ? { ...e, task, isEdited: !e.isEdited } : e ))
   );
}

  const deleteTodo=(thisid) => {
    setTodos(todos.filter((e) => 
      e.id !==thisid
    ))
  }
  const UpdateTodo = (thisid) => {
   setTodos( todos.map((e) => e.id === thisid ? { ...e, isEdited: !e.isEdited } : e));
    
    
   };
    const togglecomplete = (thisid) => {
      setTodos(todos.map((e) => e.id === thisid ? { ...e, completed: !e.completed } : e)
      )
  }
  const [todos, setTodos] = useState([]);
  const add =(todo)=>
  {
    setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEdited:false}]);
  }
  return (
    <div className="to-do-wrapper d-flex justify-content-center my-5 bg-dark text-white flex-column p-3">
      <Todoform addtodo={add} />
      {todos.map((e) => (e.isEdited ? <Edit EdiTtodo={EditTask} task={e} />:
        <Todo
          name={e.task}
          completed={e.completed}
          key={e.id}
          id={e.id}
          togglecomplete={togglecomplete}
          deleteTodo={deleteTodo}
          UpdateTodo={UpdateTodo}
          /> 
        
      ))}
    </div>
  );
}

export default Todowrapper
