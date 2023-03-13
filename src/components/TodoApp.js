import React, { useState } from 'react'
import '../App.css'

function TodoApp() {
    const [list, setList] = useState()
    const [todoList, setTodoList] = useState([
        // {
        //     id: "",
        //     task: ''
        // },

    ])

    let newId = 3

    const addNewTodo = () => {
        if (list === "") {
            alert("Add some task")
        } else {
            let newTodos = [
                ...todoList,
                {
                    id: newId++,
                    task: list
                }
            ]
            setTodoList(newTodos)
            setList("")
        }
    }

    const deleteTodo = (id) => {
        let updatedList = todoList.filter((list) => {
            return list.id != id
        })
        setTodoList(updatedList)
    }
    return (
        <div className='container mt-5 w-50'>
            <h3 className='text-center'>Todo App using React</h3>
            <div className='input-group'>
                <input className='form-control' type="text" value={list} onChange={(e) => setList(e.target.value)} />
                <button className='btn btn-primary' onClick={addNewTodo}>Add</button>
            </div>
            <div>
                <ul className='list-group mt-4'>
                    {
                        todoList.length > 0 && todoList.map((list) => (
                            <li className='list-group-item'>
                                <p>{list.task}</p>
                                <button className='btn' onClick={() => deleteTodo(list.id)}>❌</button>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default TodoApp