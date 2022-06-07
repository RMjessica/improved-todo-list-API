import React from "react";

const Todo = ({ label, todos, setTodos }) => {
  
  const deleteHandler = () => {
    setTodos(todos.filter(element => element.id !== todo.id))
  };
  // check if my item.id === todo.id (state)
  //const completeHandler = () => {
    //setTodos(todos.map(item => {
    //  if (item.id === todo.id){
    //    return{
    //      ...item, done: !item.done
    //      //keep everything same - change to //opposite of done.
    //    }; 
    //  } 
    //return item;
    //  
    //}))
  //};

  return (
    <div className="todo">
      <li className={`todo-item ${todo.done ? "done" : ""}`}>{label}</li>
      <button className="complete-btn">
        <i className="fas fa-check">Check</i>
        </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash">Trash</i>
        </button>
    </div>
  );
};

export default Todo;
