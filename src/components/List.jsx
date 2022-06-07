import React from "react";
import Todo from "./Todo.jsx";

const List = ({ todos, setTodos, filteredTodos }) => {

  return (
    <div className="">
      <ul className="">
        {filteredTodos.map(todos, index => ( 
          <Todo 
          todos={todos} 
          setTodos={setTodos}
          key={index} 
          label={todos.label}/>
        ))}
      </ul>
    </div>
  );
};
// in ul instead of using todos.map, I use filteredTodos for cate to work
export default List;