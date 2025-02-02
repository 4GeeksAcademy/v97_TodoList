import React, { useState } from "react";
import Todo from "./Todo.jsx";

export default function TodoContainer() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    console.log(value);
    setUserInput(event.target.value);
  };

 

  const changeHandler = (arr) => {

    if (arr.length === 0) {
     return <Todo todo = "No tasks, add a task"/>
    } else {
      return todoList.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))
    }
  };

 
  const removeTodo = (key) => {
    //filter()
    // avoid mutating todoList
    // dont use .splice
    setTodoList(todoList.filter((list, index) => index !== key));

    return console.log(todoList);
  };

  // [...] spread operator , creat copy of the element

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (event.key === "Enter") {
      setTodoList([...todoList, userInput]);
      setUserInput("");
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          id="inputTasks"
          value={userInput}
          onChange={onChangeHandler}
          onKeyUp={addTodoHandler}
          required
          placeholder="What need to be done?"
        />
      </form>

      {changeHandler(todoList)}
     

      <p id="itemsLeft">{todoList.length} items left</p>
    </>
  );
}
