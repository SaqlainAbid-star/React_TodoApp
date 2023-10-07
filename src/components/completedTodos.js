import React from "react";
import {AiOutlineDelete} from 'react-icons/ai';


const CompletedTodos = ({item,index,handleCompletedTodoDelete  }) => {
  return (
    <div className="todo-list-item" key={index}>
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p> <i>Completed at: {item.completedOn}</i></p>
    </div>
    <div>
      <AiOutlineDelete
        className="icon"
        onClick={() => handleCompletedTodoDelete (index)}
      />
    </div>
  </div>
  );
};

export default CompletedTodos;