import React, { useRef } from 'react'

function UseRef() {
    const data = useRef(null)

    const submitHandlr = () => {

    }

    return (
        <div>
            <form onSubmit={submitHandlr}>
                <input ref={data} type="text" placeholder='enter name' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UseRef