import React, { useRef } from 'react'
// useRef
export default function IIseRef() {
    // 獲取dom對象
    const box=useRef();
    const handler=()=>{
        
        // current  
        console.log(box);}

  return (
    <div>
      <input type="text" ref={box} onChange={handler} />
      <button onClick={()=>console.log(box)}>獲取對象</button>
    </div>
  )
}
