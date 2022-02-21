import React, { useEffect, useReducer } from 'react'
import './styles.css';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import todoReducer from './todoReducer';


const init = () => {
    
    // return [
    //     {
    //         id: new Date().getTime(),
    //         desc: 'Aprender React',
    //         done: false
    //     }
    // ];

    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    const [todos,dispatch] = useReducer(todoReducer, [],init);
    
    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);
    
    const handleDelete = (todoId) => {
        
        const action = {
            type: 'delete',
            payload: todoId
        };
        dispatch(action);


    }

    const handleToggle = (todoId) => {
        
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        
        dispatch({
            type: 'add',
            payload: newTodo
        })

    }

    return (
        <div>
            <h1>TodoApp ( {todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}

export default TodoApp