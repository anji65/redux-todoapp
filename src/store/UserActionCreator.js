import { TODOACTIONS } from './Actions'


//users
export const initGetUsers = () => {
    return {
        type: TODOACTIONS.GET_USERS
    }
}
export const initGetUsersSuccess = (data) => {
    return {
        type: TODOACTIONS.GET_USERS_SUCCESS,
        userData: data
    }
}
export const createUser = (data) => {
    return {
        type: TODOACTIONS.CREATE_USER,
        userData: data
    }
}

export const createUserSuccess = (data) => {
    console.log(data);
    return {
        type: TODOACTIONS.CREATE_USER_SUCCESS,
        userData: data
    }
}

export const deleteUser = (id) => {
    return {
        type: TODOACTIONS.DELETE_USER,
        id: id
    }
}

export const deleteUserSuccess = (id) => {
    return {
        type: TODOACTIONS.DELETE_USER_SUCCESS,
        id: id
    }
}
