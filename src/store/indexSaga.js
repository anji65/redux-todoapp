import { takeEvery } from 'redux-saga/effects'
import {TODOACTIONS} from './Actions'
import { createTodosaga } from './sagaReducer'

export default function* indexSaga(){
    yield takeEvery(TODOACTIONS.CREATE_TODO, createTodosaga)
}