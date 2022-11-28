import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ToDo = ({todo, index, handleToggle, markTodo, removeTodo}) => {
    //get what a user click
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id) //get the index of items
    }

    //itself. no need to using <toDo></toDo>
    return (
        <div>
        <Row>
            <Col sm="auto">
            <Form>
                <Form.Check onClick={() => markTodo(index)}></Form.Check>{' '}
            </Form>
            </Col>
            <Col style={{disply:'flex', justifyContent:'left'}}>
                <div
                    style={{ textDecoration: todo.complete ? "line-through" : "" }}
                    id={todo.id} 
                    key={todo.id} 
                    name="todo" 
                    value={todo.id} 
                    onClick={handleClick}>
                        {todo.task}
                </div>
            </Col>
            <Col sm="auto">
                <div>
                    {/*Use check box or Button*/}
                    {/*<Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}*/}
                    <Button variant="outline-danger" size="sm" onClick={() => removeTodo(index)}>✕</Button>
                </div>
            </Col>
        </Row>
        </div>
    );
};
 
export default ToDo;
