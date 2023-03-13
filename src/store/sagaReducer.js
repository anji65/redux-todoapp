
import { put, delay } from 'redux-saga/effects'
import * as todoactioncreators from './ActionCreators'

export function* createTodosaga(action){

    //we can do fetching data;
    yield put(todoactioncreators.createdTodoSuccess({ text: action.data.text, time: new Date() }))
    console.log('action in saga reducer', action)
}