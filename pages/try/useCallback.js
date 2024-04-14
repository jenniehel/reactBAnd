import React, { useState, memo, useCallback } from 'react'
// useState


const Foo = memo(function Foo(props) {
    console.log("FOO i am")
    return (<div>
        <button onClick={props.restart}>null</button>  
        </div>
    )})
 
export default function a() {
    const [count, setCount] = useState(0);
    const restart = useCallback(()=>{setCount(0)},[setCount]);  
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <Foo restart={restart} />
        </div>
    )
}

