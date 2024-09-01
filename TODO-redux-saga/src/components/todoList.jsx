import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, editTodo, clearTodos, loadTodos } from '../actions/todoActions.jsx';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
        const text = prompt('Enter a todo:');
        if (text) {
            dispatch(addTodo({ id: Date.now(), text, completed: false }));
        }
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        {todo.text}
                        <button className="edit" onClick={() => {
                            const newText = prompt('Edit todo:', todo.text);
                            if (newText) {
                                dispatch(editTodo(todo.id, newText));
                            }
                        }}>Edit</button>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                    </li>
                ))}
            </ul>
            <button className="clear-btn" onClick={() => dispatch(clearTodos())}>Clear Todos</button>
        </div>
    );
};

export default TodoList;