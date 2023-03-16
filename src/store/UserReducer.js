import { TODOACTIONS } from './Actions'

const users = {
    userData: []
}

export const userReducer = (state = users, action) => {
    switch (action.type) {
        case TODOACTIONS.GET_USERS_SUCCESS:
            return {
                ...state,
                userData: action.userData
            }
        case TODOACTIONS.CREATE_USER_SUCCESS:
            return {
                ...state,
                userData: action.userData
            }
        case TODOACTIONS.DELETE_USER_SUCCESS:
            const filterId = state.userData.filter((user) => user.id !== action.id)
            return {
                ...state,
                userData: filterId
            }
        default:
            return state;
    }
}