import React, { useState } from 'react';
import axios from 'axios';

const Input = ({ getToDos }) => {
    const [action, setAction] = useState('');

    const handleChange = e => {
        setAction(e.target.value);
    };

    const addToDo = () => {
        const task = { action };
        if (task.action && task.action.length > 0) {
            axios.post('/api/todos', task)
                .then(res => {
                    if (res.data) {
                        getToDos();
                        setAction('');
                    }
                })
                .catch(err => console.log(err));
        } else {
            console.log('input field required');
        }
    };

    return (
        <div>
            <input type="text" onChange={handleChange} value={action} />
            <button onClick={addToDo}>Add</button>
        </div >
    );
};

export default Input;