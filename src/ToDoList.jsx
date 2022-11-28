import React from 'react';
import { Button, Card } from 'react-bootstrap';

//import all todo items
import ToDo from './ToDo';
 
const ToDoList = ({toDoList, handleToggle, handleFilter, markTodo, removeTodo}) => {
    return (
        <div className="todo">
            {toDoList.map((todo, index) => {
                return (
                    <Card style={{margin: '5px'}}>
                        <Card.Body>
                            <ToDo
                            key={index} 
                            index={index} 
                            todo={todo} 
                            handleToggle={handleToggle} 
                            handleFilter={handleFilter} 
                            markTodo={markTodo}
                            removeTodo={removeTodo}/>
                        </Card.Body>
                    </Card>
                )})}
            <Button variant="secondary" style={{margin: '5px'}} onClick={handleFilter}>Clear Completed</Button>
        </div>
    );
 };
 
export default ToDoList;