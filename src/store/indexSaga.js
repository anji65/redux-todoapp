import { takeEvery } from 'redux-saga/effects'
import { TODOACTIONS } from './Actions'
import { createTodosaga, getUsers, createUser, deleteUser } from './sagaReducer'

export default function* indexSaga() {
    yield takeEvery(TODOACTIONS.CREATE_TODO, createTodosaga)
    yield takeEvery(TODOACTIONS.GET_USERS, getUsers)
    yield takeEvery(TODOACTIONS.CREATE_USER, createUser)
    yield takeEvery(TODOACTIONS.DELETE_USER, deleteUser)
}
