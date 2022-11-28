import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value) //get the input value
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput) return;
        addTask(userInput); //call addTask function in App,jsx
        setUserInput(""); //clear the input box
    }
    return (
        <div style={{margin: '5px'}}>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control 
                        value={userInput} 
                        type="text" 
                        className="input" 
                        onChange={handleChange} 
                        placeholder="Enter task..."/>
                        <Button variant="primary mt-2 mb-2" size="m" type="submit">Add Task</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ToDoForm;