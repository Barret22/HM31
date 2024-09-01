export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const LOAD_TODOS = 'LOAD_TODOS';
export const SET_TODOS = 'SET_TODOS';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
});

export const editTodo = (id, text) => ({
    type: EDIT_TODO,
    payload: { id, text }
});

export const clearTodos = () => ({
    type: CLEAR_TODOS
});

export const loadTodos = () => ({
    type: LOAD_TODOS
});

export const setTodos = (todos) => ({
    type: SET_TODOS,
    payload: todos
});
