import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as todoactionCrators from '../store/ActionCreators'

function Index() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { globalState } = state
    console.log('redux state', state)
    return (
        <div>
            {
                globalState.todos.map((todo, i) => (
                    <div key={i} style={{ display: 'flex', border: '1px solid black', width: 500 }}>
                        <p>{todo.text}</p>
                        <p style={{ margin: '0 10px', color: 'green' }}>{new Date(todo.time).toDateString()}</p>
                    </div>
                ))
            }
            <button onClick={() => dispatch(todoactionCrators.initcreateTodo({ text: 'hey' }))}>create todo</button>
        </div>
    )
}

export default Index