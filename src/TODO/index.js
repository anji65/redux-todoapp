import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as todoactionCrators from '../store/ActionCreators'

function Index() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { globalState } = state
    console.log('redux state', state)

    let style = {
        display: 'flex', border: '1px solid black',
        width: 500,
        justifyContennt: 'space-between'
    }

    const router = (id) => {
        // navigate(`/user/${id}`)
    }

    return (
        <div>
            {
                globalState.todos.map((todo, i) => (
                    <div key={i} style={style}>
                        <p
                        //  onClick={() => router(todo.id)}
                        >{todo.text}
                        </p>
                        <p style={{ margin: '0 10px', color: 'green' }}>{new Date(todo.time).toDateString()}</p>
                        {
                            state &&
                            <button onClick={() => dispatch(todoactionCrators.deleteTodoList(todo.id))}>delete</button>
                        }
                    </div>
                ))
            }
            <button onClick={() => dispatch(todoactionCrators.initcreateTodo({ text: 'hey' }))}>create todo</button>
        </div>
    )
}

export default Index