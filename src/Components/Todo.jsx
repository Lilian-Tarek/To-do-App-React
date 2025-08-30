import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Todo = (props) => {

  return (
    <div className="todo my-2 text-white p-2 ">
      <div className="d-flex justify-content-between fw-bold align-items-center">
        <p
          onClick={() => {
            props.togglecomplete(props.id);
          }}
          className={`${props.completed ? "completed" : "not-completed"} m-0`}
        >
          {props.name}
        </p>
        <div className=" icons d-flex gap-2">
          <MdDelete
            className="fs-3"
            onClick={() => {
              props.deleteTodo(props.id);
            }}
          />
          <FaRegEdit
            className="fs-3"
            onClick={() => {
              props.UpdateTodo(props.id);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo
