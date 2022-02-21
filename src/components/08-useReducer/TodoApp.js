import React, { useEffect, useReducer } from 'react'
import useForm from '../../hooks/useForm';
import './styles.css';
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
    

    const [{description}, handleInputChange,reset]=useForm({
        description:''
    });


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

    //console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length<=1) {
            
            return;
        }
        

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload:newTodo
        }

        dispatch(action)
        reset();

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
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit} >
                        <input
                            type="text"
                            name="description"
                            placeholder="Aprender..."
                            autoComplete="off"
                            className="form-control"
                            onChange={handleInputChange}
                            value={description}
                            
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 w-100"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp