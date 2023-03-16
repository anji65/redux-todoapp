import { TODOACTIONS } from './Actions'


export const initcreateTodo = (data) => {
    return {
        type: TODOACTIONS.CREATE_TODO,
        data: data
    }
}

export const createdTodoSuccess = (data) => {
    return {
        type: TODOACTIONS.CREATE_TODO_SUCCESS,
        todo: data
    }
}

export const deleteTodoList = (todoId) => {
    return {
        type: TODOACTIONS.DELETE_TODO,
        todoId: todoId
    }
}




