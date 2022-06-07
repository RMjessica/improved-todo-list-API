import React from "react";

//I can add props as my function parameter
// and add it before the return as props.setInputText
// or I can add it directly 
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTasksHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, 
      {label: inputText, done: false}
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    
      <form>
        
          <input 
          value={inputText}
          onChange={inputTextHandler}
          type="text" 
          className="formControl" 
          placeholder="Add new task"
          />

          <button onClick={submitTasksHandler} className="btn btn-outline-dark">
            <i className="fas fa-plus square" >Add Task</i>
          </button>
       

        <div className="select">
          <select onClick={statusHandler} name="tasks" className="filter'tasks">
            <option value="all">All Tasks</option>
            <option value="done">Completed</option>
            <option value="uncompleted">Uncompleted Tasks</option>
          </select>
        </div>

      </form>
     
  );
};


export default Form;