import React from 'react';

const ListTodo = ({ toDos, deleteToDo }) => {
    return (
        <ul>
            {
                toDos && toDos.length > 0
                    ? (
                        toDos.map(todo => {
                            return (
                                <li key={todo._id} onClick={() => deleteToDo(todo._id)}>{todo.action}</li>
                            )
                        })
                    )
                    : (
                        <li>No todo(s) left</li>
                    )
            }
        </ul>
    );
}

export default ListTodo