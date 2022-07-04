import React from 'react'
import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const useTodos = (initialState = []) => {
    



        const [todos, dispatch] = useReducer(todoReducer, initialState, init);


        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
        }, [todos]);


        const handleNewTodo = (todo) => {
            const action = {
                type: '[TODO] add todo',
                payload: todo
            }

            dispatch(action);
        }

        const handleDeleteTodo = (id) => {
            dispatch({
                type: '[TODO] remove todo',
                payload: id
            })
        }

        const handleToggleTodo = (id) => {
            dispatch({
                type: '[TODO] toggle todo',
                payload: id
            })
        }

        const todosCount = () => {
            return todos.length;
        }

        const pendingTodosCount = () => {
            return todos.filter(todo => !todo.done).length;
        }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount

    }
        
    
}

export default useTodos