import React, { useState } from 'react';

const Todoform = ({ addtodo }) => {
const [value, setValue] = useState("");
  const handleChange = (e) => {

    setValue(e.target.value); 

  }
  const handlesubmit = (e) => {
    e.preventDefault();
    addtodo(value);
    setValue("");
  }
  return (
    
      <form className='d-flex  p-3 my-3 bg-dark' onSubmit={handlesubmit}>
      <input className='todo-input p-2 bg-dark text-white ' placeholder="what is your new task?" type="text" onChange={(e) => { handleChange(e) }} value={value} />
        <button type='submit' className='todo-btn text-white fw-bold'>Add Task</button>
      </form>
   
  )
}

export default Todoform
