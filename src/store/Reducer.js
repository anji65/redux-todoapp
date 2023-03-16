import { TODOACTIONS } from './Actions'

const todostate = {
    todos: []
}

export const todoReducer = (state = todostate, action) => {
    // console.log('s',action);
    switch (action.type) {
        case TODOACTIONS.CREATE_TODO_SUCCESS:
            const copyTodos = [...state.todos, action.todo]
            return {
                ...state,
                todos: copyTodos
            }
        case TODOACTIONS.DELETE_TODO:
            const filterTodos = state.todos.filter((todo) => todo.id !== action.todoId)
            return {
                ...state,
                todos: filterTodos
            }
        default:
            return state;
    }
}
