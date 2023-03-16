
import axios from 'axios'
import { put, delay } from 'redux-saga/effects'
import * as todoactioncreators from './ActionCreators'
import *  as UserActionCreator from './UserActionCreator'

export function* createTodosaga(action) {
    //we can do fetching data;
    yield put(todoactioncreators.createdTodoSuccess({ id: Math.random() * 1000, text: action.data.text, time: new Date() }))
    // console.log('action in saga reducer', action)
}

export function* getUsers() {
    const users = yield axios.get('https://jsonplaceholder.typicode.com/posts');
    yield put(UserActionCreator.initGetUsersSuccess(users.data))

}

export function* createUser(data) {
    // const data = {
    //     title:''
    // }
    console.log('userdata0', data)
    const postUser = yield axios.post('https://jsonplaceholder.typicode.com/posts', { title: data.userData.title })
    yield put(UserActionCreator.initGetUsers())
}

export function* deleteUser(data){
    // console.log('deleteId',data);
    const deleteUser = yield axios.delete(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
    yield put(UserActionCreator.initGetUsers())
}