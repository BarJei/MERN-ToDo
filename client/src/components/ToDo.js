import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Input from './Input';
import ListToDo from './ListToDo';

const ToDo = () => {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        getToDos();
    }, []);

    const getToDos = () => {
        axios.get('/api/todos')
            .then(res => {
                if (res.data) {
                    setToDos(res.data);
                }
            })
            .catch(err => console.log(err));
    };

    const deleteToDo = id => {
        axios.delete(`/api/todos/${id}`)
            .then(res => {
                if (res.data) {
                    getToDos();
                }
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <h1>My To Do(s)</h1>
            <Input getToDos={getToDos} />
            <ListToDo toDos={toDos} deleteToDo={deleteToDo} />
        </div>
    )
};

export default ToDo;