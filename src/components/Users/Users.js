import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as UserActionCreator from '../../store/UserActionCreator'

function Users() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.usersState)
  const { userData } = state
  // console.log('gggg',state)

  React.useEffect(() => {
    dispatch(UserActionCreator.initGetUsers())
  }, [])
// alert('test')
  let style = {
    display: 'flex', border: '1px solid black',
    width: 500,
    justifyContennt: 'space-between'
  }
  return (
    <div>
      {
        userData.map((user, i) => (
          <div key={i} style={style} >
            <p>{user.title}</p>
            {
              state &&
              <button onClick={() => {
                  dispatch(UserActionCreator.deleteUser(user.id))
              }}>delete</button>
            }
          </div>
        ))
      }
      <button onClick={() => dispatch(UserActionCreator.createUser({ title: 'hey' }))}>create User</button>

    </div >
  )
}

export default React.memo(Users)