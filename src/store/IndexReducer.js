import { todoReducer } from './Reducer'
import { userReducer } from './UserReducer'

export const indexReducer = {
    globalState: todoReducer,
    usersState: userReducer
}