import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import test data
import data from "./data.json";
//components
import Header from "./Header";
//the container that hold all of todo items
import ToDoList from "./ToDoList";
//the input form
import ToDoForm from './ToDoForm';
//style
import './App.css';

function App() {
  const [ toDoList, setToDoList ] = useState([]); //or use data instead of []

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  {/*conflict with toggle*/}
  const markTodo = index => {
    let copy = [...toDoList];
    copy[index].complete = !copy[index].complete;
    setToDoList(copy);
  };

  const removeTodo = index => {
    let copy = [...toDoList];
    copy.splice(index, 1);
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask}/>
      <div>
          <ToDoList
          toDoList={toDoList} 
          handleToggle={handleToggle} 
          handleFilter={handleFilter}
          markTodo={markTodo} 
          removeTodo={removeTodo}/>
      </div>
    </div>
  );
 }

export default App;