import {TODOACTIONS} from './Actions'

const todostate = {
    todos: []
}

export const todoReducer = (state = todostate, action) => {
    switch(action.type){
        case TODOACTIONS.CREATE_TODO_SUCCESS: 
       
            const copyTodos = [...state.todos, action.todo]
            
            return {
                ...state,
                todos: copyTodos
            }
        default: 
            return state;
    }
}
