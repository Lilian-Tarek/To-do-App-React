import React, { useState } from 'react';

const Edit = ({ EdiTtodo,task }) => {
const [value, setValue] = useState(task.task);
  const handleChange = (e) => {

    setValue(e.target.value); 

  }
  const handlesubmit = (e) => {
    e.preventDefault();
    EdiTtodo(value,task.id);
    setValue("");
  }
  return (
    
      <form className='d-flex  p-3 my-3 bg-dark' onSubmit={handlesubmit}>
      <input className='todo-input p-2 bg-dark text-white ' placeholder="Edit your Task" type="text" onChange={(e) => { handleChange(e) }} value={value} />
        <button type='submit' className='todo-btn text-white fw-bold px-4'>Edit</button>
      </form>
   
  )
}

export default Edit
