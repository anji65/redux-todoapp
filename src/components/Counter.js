import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const onChangeBackgroundColor = (e) => {
        document.body.style.background = e.target.value
    }

    return (
        <>
            <div style={{ display: 'flex', gap: 15, marginTop: 20 }}>
                <button type='submit' disabled={count === 0} onClick={() => setCount(count - 1)}>-</button>
                <div>Counter : {count}</div>
                <button type='submit' onClick={() =>
                    // mprice = document.getElementById('id').value
                    setCount(count + 1)
                }>+</button>

            </div>
            <div>
                <h5>Change background color</h5>
                <input type="color" onChange={onChangeBackgroundColor} />
            </div>
        </>
    )
}

export default Counter