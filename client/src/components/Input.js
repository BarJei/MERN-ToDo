import React, { useState } from 'react';
import axios from 'axios';

const Input = ({ getToDos }) => {
    const [state, setState] = useState({ action: '' });

    const handleChange = e => {
        setState({ ...state, action: e.target.value });
    };

    const addToDo = () => {
        const task = { action: state.action };
        if (task.action && task.action.length > 0) {
            axios.post('/api/todos', task)
                .then(res => {
                    if (res.data) {
                        getToDos();
                        setState({ ...state, action: '' });
                    }
                })
                .catch(err => console.log(err))
        } else {
            console.log('input field required')
        }
    };

    return (
        <div>
            <input type="text" onChange={handleChange} value={state.action} />
            <button onClick={addToDo}>add todo</button>
        </div >
    );
};

export default Input;